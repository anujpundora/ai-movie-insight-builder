import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

const model = genAI.getGenerativeModel({
  model: "models/gemini-2.5-pro",
});

export async function generateFallbackReviews(
  movieTitle: string
): Promise<string[]> {

  try {
    const result = await model.generateContent(`
Generate 8 realistic audience reviews for the movie "${movieTitle}".

Return ONLY JSON array of strings.
`);

    const text = result.response.text();

    const jsonMatch = text.match(/\[[\s\S]*\]/);

    if (!jsonMatch) throw new Error("Invalid review format");

    return JSON.parse(jsonMatch[0]);

  } catch (err) {
    console.log("Review generation failed → using static fallback");

    // ✅ HARD SAFE FALLBACK (NO AI)
    return [
      "The movie delivers strong performances and engaging action.",
      "Visual effects were impressive throughout.",
      "Some viewers felt pacing could be improved.",
      "The concept was creative and thought provoking.",
      "Acting performances stood out.",
      "Story complexity divided audience opinion.",
      "Soundtrack and atmosphere were appreciated.",
      "Overall an enjoyable cinematic experience."
    ];
  }
}