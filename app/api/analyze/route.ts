import { NextResponse } from "next/server";
import { getMovieById } from "@/lib/omdb";
import { analyzeSentiment } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const { imdbId } = await req.json();

    const cleanId = imdbId?.trim();

    // ✅ format validation
    if (!cleanId || !/^tt\d+$/.test(cleanId)) {
      return NextResponse.json(
        { error: "Invalid IMDb ID format" },
        { status: 400 }
      );
    }

    // ✅ MOVIE FETCH SAFE BLOCK
    let movie;

    try {
      movie = await getMovieById(cleanId);
    } catch {
      return NextResponse.json(
        { error: "Movie not found" },
        { status: 404 }
      );
    }

    // ✅ AI SHOULD NEVER BREAK SYSTEM
    const sentimentData = await analyzeSentiment(movie);

    return NextResponse.json({
      success: true,
      movie,
      ...sentimentData,
    });

  } catch (error) {
    console.error("Analyze API Fatal:", error);

    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}