import { NextResponse } from "next/server";
import { getMovieById } from "@/lib/omdb";
import { analyzeSentiment } from "@/lib/ai";
import { generateFallbackReviews } from "@/lib/reviews";



export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { imdbId } = body;

    if (!imdbId) {
      return NextResponse.json(
        { error: "IMDb ID is required" },
        { status: 400 }
      );
    }

    const movie = await getMovieById(imdbId);
    const reviews = await generateFallbackReviews(movie.Title);
    const aiResult = await analyzeSentiment(reviews);

    console.log(aiResult);

    const sentimentData = await analyzeSentiment(reviews);
    return NextResponse.json({
      success: true,
      movie,
      ...sentimentData,
    });
  } catch (error: any) {
    console.error("Analyze API Error:", error);

    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}