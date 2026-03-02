"use client";

import { useState } from "react";
import MovieInput from "@/components/MovieInput";
import MovieCard from "@/components/MovieCard";
import SentimentCard from "@/components/SentimentCard";
import LoadingState from "@/components/LoadingState";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-10 p-6">
      <h1 className="text-4xl font-bold">
        AI Movie Insight Builder 🎬
      </h1>

      {loading && <LoadingState />}

      {!loading && result && (
        <>
          <MovieCard movie={result.movie} />

          <SentimentCard
            sentiment={result.sentiment}
            summary={result.summary}
            highlights={result.highlights}
          />
        </>
      )}

    </main>
  );
}