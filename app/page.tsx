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
    <h1 className="text-4xl font-bold text-center">
      AI Movie Insight Builder 🎬
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
);
}