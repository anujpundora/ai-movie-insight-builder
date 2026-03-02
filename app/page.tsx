"use client";

import { useState } from "react";
import MovieInput from "@/components/MovieInput";

export default function Home() {
  const [result, setResult] = useState<any>(null);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-10 p-6">
      <h1 className="text-4xl font-bold">
        AI Movie Insight Builder 🎬
      </h1>

      <MovieInput onResult={setResult} />

      {result && (
        <pre className="max-w-2xl overflow-auto bg-neutral-900 p-4 rounded">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </main>
  );
}