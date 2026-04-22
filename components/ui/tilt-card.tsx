"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TiltCardProps {
  children?: React.ReactNode;
  image?: string;
  images?: string[];
  className?: string;
}

export function TiltCard({ children, image, images, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Motion values to track mouse position (normalized from -0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to make the animation feel natural
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // Transform normalized mouse positions into rotation degrees
  // X axis rotation relies on the Y mouse position (and vice-versa)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  // Transform normalized mouse positions into percentages for the glare effect
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize from -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Snap back natively using the spring
    x.set(0);
    y.set(0);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images && images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images && images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  // Auto slide if multiple images are provided
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full max-w-sm rounded-xl border border-white/10 bg-neutral-900 shadow-2xl ${className}`}
    >
      {/* 
        Inner container to encapsulate perspective and hold floating items.
        'translateZ' creates the floating 3D depth effect.
      */}
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full rounded-xl p-6"
      >
        {/* Single Image rendering fallback */}
        {image && !images && (
          <img
            src={image}
            alt="Tilt Card Graphic"
            className="absolute inset-0 h-full w-full rounded-xl object-cover opacity-80"
            style={{ transform: "translateZ(-20px)" }} // Push image back a bit
          />
        )}

        {/* Multi-image slideshow */}
        {images && images.length > 0 && (
          <div 
            className="absolute inset-0 h-full w-full rounded-xl overflow-hidden" 
            style={{ transform: "translateZ(-20px)" }}
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.8, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {images.length > 1 && (
              <>
                {/* Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-20">
                  {images.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? "w-4 bg-orange-500" : "w-1.5 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
        
        <div
          style={{ transform: "translateZ(30px)" }} // Push content forward
          className="relative z-10 drop-shadow-lg"
        >
          {children}
        </div>
      </div>

      {/* Dynamic Glare Effect Overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background: useMotionTemplate`radial-gradient(
            farthest-corner circle at ${glareX} ${glareY},
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0) 80%
          )`,
          opacity: isHovered ? 1 : 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
