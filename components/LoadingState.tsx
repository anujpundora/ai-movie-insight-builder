"use client";

import { motion } from "framer-motion";

const steps = [
  "Fetching movie data...",
  "Analyzing audience reviews...",
  "Generating AI insights...",
];

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20">

      {/* Gold AI Pulse */}
      <motion.div
        className="h-24 w-24 rounded-full bg-yellow-400"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.6, 1, 0.6],
          boxShadow: [
            "0 0 20px rgba(255,215,0,0.4)",
            "0 0 40px rgba(255,215,0,0.9)",
            "0 0 20px rgba(255,215,0,0.4)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <p className="text-gray-300 text-lg animate-pulse">
        🤖 AI analyzing audience sentiment...
      </p>
    </div>
  );

}