"use client";

import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  onResult: (data: any) => void;
}


export default function MovieInput({ onResult }: Props) {
  const [imdbId, setImdbId] = useState("");
  const [loading, setLoading] = useState(false);

  
 async function handleAnalyze() {
  if (!imdbId.trim()) return;

  try {
    setLoading(true);

    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imdbId }),
    });

    const data = await res.json();
    onResult(data);

  } catch (err) {
    toast.error("Failed to analyze movie");
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="text"
        placeholder="Enter IMDb ID (e.g. tt0133093)"
        value={imdbId}
        onChange={(e) => setImdbId(e.target.value)}
        className="w-full max-w-md rounded-lg bg-neutral-800 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Analyze Movie"}
      </button>
    </div>
  );
}