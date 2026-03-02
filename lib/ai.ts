import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

const model = genAI.getGenerativeModel({
  model: "models/gemini-flash-lite-latest",
});

export async function analyzeSentiment(reviews: string[]) {
  const prompt = `
Analyze the following movie audience reviews.

Return ONLY valid JSON.

{
  "sentiment": "Positive | Mixed | Negative",
  "summary": "3 line summary",
  "highlights": ["point1","point2","point3"]
}

Reviews:
${reviews.join("\n")}
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  try {
    // ✅ extract JSON block safely
    const jsonMatch = text.match(/\{[\s\S]*\}/);

    if (!jsonMatch) throw new Error("No JSON found");

    return JSON.parse(jsonMatch[0]);

  } catch (err) {
    console.error("AI Parse Failed:", text);

    return {
      sentiment: "Mixed",
      summary: "AI response formatting issue.",
      highlights: [],
    };
  }
}