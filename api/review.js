import { CohereClientV2 } from "cohere-ai";
import { rateLimit } from "../lib/rateLimit";

const cohere = new CohereClientV2({
  token: process.env.CO_API_KEY,
});

const MAX_CODE_LENGTH = 20000;

function buildPrompt(code) {
  return `
You are an expert software engineer reviewing code.

Return your response in this format:

## Summary
Brief overview of the code.

## Critical Issues 🔴
- Only serious bugs or security issues

## Improvements 🟠
- Important but non-breaking issues

## Suggestions 🟢
- Nice-to-have improvements and best practices

Be specific, concise, and actionable.

CODE:
${code}
`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;

  const allowed = true;

  if (!allowed) {
    return res.status(429).json({ error: "Too many requests" });
  }

  const { code } = req.body || {};

  if (typeof code !== "string" || code.trim().length === 0) {
    return res.status(400).json({ error: "Code is required" });
  }

  if (code.length > MAX_CODE_LENGTH) {
    return res.status(413).json({
      error: `Code too large. Max allowed is ${MAX_CODE_LENGTH} characters.`,
    });
  }

  try {
    const response = await cohere.chat({
      model: "command-r-plus",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: buildPrompt(code),
            },
          ],
        },
      ],
      temperature: 0.3,
    });

    const reviewText =
      response?.message?.content
        ?.filter((c) => c.type === "text")
        ?.map((c) => c.text)
        ?.join("\n")
        ?.trim() || "No review returned";

    return res.status(200).json({ review: reviewText });
  } catch (err) {
    console.error("Cohere API error:", err);

    return res.status(500).json({
      error: "Failed to generate review",
    });
  }
}
