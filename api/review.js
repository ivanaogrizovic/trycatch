export default async function handler(req, res) {
  const { code } = req.body;

  const response = await fetch("https://api.cohere.ai/generate", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
      "Content-Type": "application/json",
      "Cohere-Version": "2023-12-15",
    },
    body: JSON.stringify({
      model: "command-xlarge-nightly",
      prompt: `Review this code:\n${code}`,
      max_tokens: 300,
    }),
  });

  const data = await response.json();
  res.status(200).json(data);
}
