import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

// ✅ DEFINE MODEL HERE
const model = genAI.getGenerativeModel({
  model: "models/gemini-2.5-pro",
});

export async function analyzeSentiment(movie: any) {
  try {
    console.log("✅ Sending request to Gemini...");
    const prompt = `
You are analyzing public audience perception of a movie.

Movie:
Title: ${movie.Title}
Genre: ${movie.Genre}
Plot: ${movie.Plot}
Actors: ${movie.Actors}

Simulate realistic audience opinions and provide sentiment insight.

Return ONLY valid JSON:

{
  "sentiment": "Positive | Mixed | Negative",
  "summary": "3-4 line audience perception summary",
  "highlights": [
    "key opinion 1",
    "key opinion 2",
    "key opinion 3"
  ]
}
`;
const result = await model.generateContent(prompt);

console.log("✅ Gemini response received");
    const text = result.response.text()
                  .replace(/```json/g, "")
                  .replace(/```/g, "")
                  .trim();
    const jsonMatch = text.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      console.error("❌ JSON NOT FOUND");
      throw new Error("JSON parsing failed");
    }

    console.log("✅ JSON parsed successfully");
    return JSON.parse(jsonMatch[0]);

  } catch (err) {
    console.error("🚨 GEMINI FAILURE:");
    console.error(err);

    return {
      sentiment: "Mixed",
      summary:
        "Audience sentiment estimation currently unavailable(API Qouta exceeded daily limit).",
      highlights: [
        "Strong performances noted",
        "Visual storytelling appreciated",
        "Mixed pacing feedback",
      ],
    };
  }
}