"use client";

import { motion } from "framer-motion";

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-24">

      {/* Film Reel */}
      <motion.div
        className="relative h-28 w-28"
        animate={{ rotate: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Outer Reel */}
        <div className="h-28 w-28 rounded-full 
          bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-600
          shadow-[0_0_40px_rgba(255,215,0,0.5)]
          flex items-center justify-center"
        >
          {/* Inner circle */}
          <div className="h-16 w-16 rounded-full bg-black flex items-center justify-center">
            
            {/* Reel holes */}
            <div className="grid grid-cols-2 gap-3">
             <div className="absolute h-6 w-6 bg-yellow-500 rounded-full top-4 left-1/2 -translate-x-1/2" />
            <div className="absolute h-6 w-6 bg-yellow-500 rounded-full bottom-4 left-1/2 -translate-x-1/2" />
            <div className="absolute h-6 w-6 bg-yellow-500 rounded-full left-4 top-1/2 -translate-y-1/2" />
            <div className="absolute h-6 w-6 bg-yellow-500 rounded-full right-4 top-1/2 -translate-y-1/2" />
            </div>

          </div>
        </div>
      </motion.div>

      {/* Loading text */}
      <motion.p
        className="text-yellow-300 text-lg tracking-wide"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Rewinding audience reviews...
      </motion.p>

    </div>
  );
}