"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  size: number;
  top: number;
  left: number;
  duration: number;
}

export default function AnimatedBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  // ✅ generate ONLY on client
  useEffect(() => {
    const generatedStars = Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 3 + Math.random() * 5,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

      {/* cinematic gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-neutral-950/70 to-black" />

      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
         animate={{
          opacity: [0.2, 1, 0.2],
          y: [0, -40],
          x: [0, star.size * 8],
        }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}