"use client";

"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function StackedCarousel({ images }: { images: string[] }) {
  const radius = 220; // Distance to push cards outward in 3D space

  return (
    <div className="relative w-full max-w-[500px] h-[320px] sm:h-[400px] flex items-center justify-center">
      {/* 3D Perspective Container */}
      <div
        className="relative w-[200px] h-[300px] sm:w-[260px] sm:h-[360px]"      
        style={{ perspective: "1200px" }}
      >
        <motion.div
          className="w-full h-full absolute"
          style={{ transformStyle: "preserve-3d", transform: `translateZ(-${radius}px)` }}
          animate={{ rotateY: [0, -360] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {images.map((src, i) => {
            const angle = (360 / images.length) * i;
            return (
              <div
                key={i}
                className="absolute inset-0 rounded-2xl border border-white/20 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.8)] overflow-hidden"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
              >
                <Image
                  src={src}
                  alt={`Carousel image ${i}`}
                  fill
                  className="object-cover pointer-events-none"
                  sizes="(max-width: 640px) 160px, 200px"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
