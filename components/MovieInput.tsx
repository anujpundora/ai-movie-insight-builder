"use client";

import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  onResult: (data: any) => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MovieInput({
  onResult,
  setLoading,
}: Props) {

  const [imdbId, setImdbId] = useState("");

  async function handleAnalyze() {
    if (!imdbId.trim()) {
      toast.error("Please enter IMDb ID");
      return;
    }

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

      if (!res.ok) {
        throw new Error(data.error);
      }

      onResult(data);

    } catch (err: any) {
      toast.error(err.message || "Failed to analyze movie");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <input
        type="text"
        placeholder="Enter IMDb ID (e.g. tt0133093)"
        value={imdbId}
        onChange={(e) => setImdbId(e.target.value)}
        className="w-full max-w-md rounded-lg bg-neutral-800 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleAnalyze}
        className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
      >
        Analyze Movie
      </button>
    </div>
  );
}