import { NextResponse } from "next/server";
import { getMovieById } from "@/lib/omdb";
import { analyzeSentiment } from "@/lib/ai";

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

      const aiResult = await analyzeSentiment([
      "Amazing movie with incredible visuals",
      "Story was slightly confusing but enjoyable",
      "Great performances overall"
    ]);

    console.log(aiResult);

    return NextResponse.json({
      success: true,
      movie,
    });
  } catch (error: any) {
    console.error("Analyze API Error:", error);

    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}