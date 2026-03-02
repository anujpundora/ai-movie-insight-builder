"use client";

import { useState } from "react";
import MovieInput from "@/components/MovieInput";
import MovieCard from "@/components/MovieCard";
import SentimentCard from "@/components/SentimentCard";
import LoadingState from "@/components/LoadingState";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

return (
  <>
  <AnimatedBackground />
  <main className="min-h-screen flex flex-col items-center justify-center gap-10 p-6">
    
   <h1 className="text-5xl font-bold text-center flex items-center justify-center gap-3">

  {/* Gradient ONLY on text */}
  <span
    className="
      bg-linear-to-r
      from-white
      via-gray-300
      to-gray-500
      text-transparent
      bg-clip-text
    "
  >
    AI Movie Insight Builder
  </span>

  {/* Emoji excluded */}
  <span className="text-white drop-shadow-lg">
    🎬
  </span>

</h1>

    <MovieInput
      onResult={setResult}
      setLoading={setLoading}
    />

    {loading && <LoadingState />}

    {!loading && result && (
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        <MovieCard movie={result.movie} />

        <SentimentCard
          sentiment={result.sentiment}
          summary={result.summary}
          highlights={result.highlights}
        />
      </div>
    )}
  </main>
  </>
);
}