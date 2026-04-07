const { CohereClientV2 } = require("cohere-ai");
const cohere = new CohereClientV2({ token: process.env.CO_API_KEY });

export default async function handler(req, res) {
  const { code } = req.body;

  if (!code) return res.status(400).json({ error: "Code is required" });

  try {
    const response = await cohere.chat({
      model: "command-xlarge-nightly",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `You are an expert software engineer. Review this code and provide constructive feedback with suggestions for improvement:\n\n${code}`,
            },
          ],
        },
      ],
      temperature: 0.3,
    });

    // Extract the text safely
    const reviewText =
      response.messages
        ?.map((msg) =>
          msg.content
            ?.filter((c) => c.type === "text")
            .map((c) => c.text)
            .join("\n"),
        )
        .join("\n") || "No review returned";

    res.status(200).json({ review: reviewText });
  } catch (err) {
    console.error("Cohere API error:", err);
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
}
