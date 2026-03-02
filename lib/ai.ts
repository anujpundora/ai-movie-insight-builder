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

Return STRICT JSON ONLY:

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
    return JSON.parse(text);
  } catch (err) {
    console.error("AI JSON Parse Error:", text);

    return {
      sentiment: "Mixed",
      summary: "Unable to analyze sentiment reliably.",
      highlights: [],
    };
  }
}