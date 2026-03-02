import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

const model = genAI.getGenerativeModel({
  model: "models/gemini-flash-lite-latest",
});

export async function generateFallbackReviews(
  movieTitle: string
): Promise<string[]> {

  const prompt = `
Generate 8 realistic audience reviews for the movie "${movieTitle}".

Rules:
- Mix positive, negative and neutral opinions
- Each review 1–2 sentences
- Sound like real viewers
- Return ONLY JSON array of strings
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();

  try {
    return JSON.parse(text);
  } catch {
    return [
      "Great movie with strong performances.",
      "Interesting concept but pacing felt slow.",
      "Visuals were impressive overall."
    ];
  }
}