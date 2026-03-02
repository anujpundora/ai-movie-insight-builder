"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
   <div className="backdrop-blur-md w-full max-w-xl bg-white/5 border border-yellow-400/20 rounded-xl p-6 flex flex-col gap-6 shadow-[0_0_30px_rgba(255,215,0,0.05)] ">
      <input
        type="text"
        placeholder="Enter IMDb ID (e.g. tt0133093)"
        value={imdbId}
        onChange={(e) => setImdbId(e.target.value)}
        className="w-full  rounded-lg bg-neutral-800 px-4 py-3 outline-none focus:ring-1 focus:ring-yellow-800"
      />

      <button
        onClick={handleAnalyze}
        className="rounded-lg px-6 py-3 font-semibold text-black bg-linear-to-r from-yellow-400 via-yellow-500 to-amber-500 hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] active:scale-95"
      >
        Analyze Movie
      </button>
    </div>
  );
}