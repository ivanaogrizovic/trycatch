const { CohereClientV2 } = require("cohere-ai");

const cohere = new CohereClientV2({
  token: process.env.COHERE_API_KEY,
});

export default async function handler(req, res) {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: "Code is required" });
  }

  try {
    const response = await cohere.chat({
      model: "command-a-03-2025",
      messages: [
        {
          role: "user",
          content: `Please review this code:\n${code}`,
        },
      ],
    });

    const reviewText = response.messages?.[0]?.content || "No review returned";

    res.status(200).json({ review: reviewText });
  } catch (err) {
    console.error("Cohere API error:", err);
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
}
