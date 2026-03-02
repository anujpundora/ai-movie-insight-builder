"use client";

import { motion } from "framer-motion";

const steps = [
  "Fetching movie data...",
  "Analyzing audience reviews...",
  "Generating AI insights...",
];

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center gap-6 mt-10">

      {/* Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "linear",
        }}
        className="h-14 w-14 border-4 border-blue-500 border-t-transparent rounded-full"
      />

      <h2 className="text-xl font-semibold">
        🤖 AI analyzing movie sentiment...
      </h2>

      {/* Animated Steps */}
      <div className="flex flex-col gap-2 text-neutral-400">
        {steps.map((step, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.6,
            }}
          >
            {step}
          </motion.p>
        ))}
      </div>
    </div>
  );
}