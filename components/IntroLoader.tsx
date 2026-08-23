"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

interface StepItem {
  id: number;
  text: string | React.ReactNode;
  activeBars: number;
  progressPercent: number;
  duration: number;
}

const STEPS: StepItem[] = [
  {
    id: 1,
    text: "LOADING",
    activeBars: 1,
    progressPercent: 20,
    duration: 750,
  },
  {
    id: 2,
    text: "SETTING THINGS UP",
    activeBars: 2,
    progressPercent: 50,
    duration: 850,
  },
  {
    id: 3,
    text: "ALMOST THERE",
    activeBars: 4,
    progressPercent: 80,
    duration: 800,
  },
  {
    id: 4,
    text: (
      <>
        <span>WELCOME TO</span>
        <br />
        <span className="bg-gradient-to-b from-[#FFAE34] via-[#FF6D00] to-[#E65100] bg-clip-text text-transparent">
          HARSH&apos;S PORTFOLIO
        </span>
      </>
    ),
    activeBars: 5,
    progressPercent: 100,
    duration: 1100,
  },
];

export default function IntroLoader({ onComplete }: { onComplete?: () => void }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [displayPercent, setDisplayPercent] = useState(0);

  const handleFinish = useCallback(() => {
    setIsFinished(true);
    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  // Lock scroll while intro is visible
  useEffect(() => {
    if (!isFinished) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFinished]);

  // Handle step progression
  useEffect(() => {
    if (currentStepIndex >= STEPS.length) {
      const timer = setTimeout(() => {
        handleFinish();
      }, 300);
      return () => clearTimeout(timer);
    }

    const currentStep = STEPS[currentStepIndex];

    // Smooth percentage counter interpolation
    const startVal = displayPercent;
    const targetVal = currentStep.progressPercent;
    const duration = currentStep.duration;
    const startTime = performance.now();

    const animateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(startVal + (targetVal - startVal) * easedProgress);
      setDisplayPercent(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      }
    };

    const animFrame = requestAnimationFrame(animateCounter);

    const stepTimer = setTimeout(() => {
      if (currentStepIndex < STEPS.length - 1) {
        setCurrentStepIndex((prev) => prev + 1);
      } else {
        handleFinish();
      }
    }, currentStep.duration);

    return () => {
      clearTimeout(stepTimer);
      cancelAnimationFrame(animFrame);
    };
  }, [currentStepIndex, handleFinish]);

  const activeBars = STEPS[Math.min(currentStepIndex, STEPS.length - 1)]?.activeBars || 1;

  return (
    <AnimatePresence mode="wait">
      {!isFinished && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(8px)",
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] select-none overflow-hidden font-sans"
        >
          {/* Ambient Warm Orange Core Glow */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[520px] sm:h-[520px] rounded-full bg-orange-600/25 blur-[120px] pointer-events-none transition-all duration-700"
            style={{
              transform: `translate(-50%, -50%) scale(${1 + activeBars * 0.08})`,
            }}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] sm:w-[320px] sm:h-[320px] rounded-full bg-amber-500/20 blur-[80px] pointer-events-none" />

          {/* Skip Button */}
          <button
            onClick={handleFinish}
            className="absolute top-6 right-6 z-50 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-bold text-zinc-500 hover:text-orange-400 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-950/60 backdrop-blur-md transition-all duration-300 hover:border-orange-500/40 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] cursor-pointer"
            aria-label="Skip animation"
          >
            Skip
          </button>

          {/* Center Stage: Dynamic Text & Segmented Progress Bar */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 text-center max-w-4xl min-h-[220px]">
            {/* Animated Title Text */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={STEPS[currentStepIndex]?.id || "loader-text"}
                initial={{ opacity: 0, y: 15, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 1.02 }}
                transition={{ duration: 0.38, ease: "easeOut" }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider uppercase text-center leading-[1.1] font-sans antialiased text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE34] via-[#FF6D00] to-[#E65100] drop-shadow-[0_0_35px_rgba(255,109,0,0.55)]"
              >
                {STEPS[currentStepIndex]?.text}
              </motion.h1>
            </AnimatePresence>

            {/* Segmented Dashed Loader Bars */}
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-8 sm:mt-10">
              {[1, 2, 3, 4, 5].map((index) => {
                const isActive = index <= activeBars;
                return (
                  <div
                    key={index}
                    className={`relative h-1.5 sm:h-2 rounded-full transition-all duration-300 ease-out ${
                      isActive
                        ? "w-7 sm:w-9 bg-gradient-to-r from-[#FFA000] to-[#FF5722] shadow-[0_0_14px_rgba(255,109,0,0.85)] scale-100"
                        : "w-5 sm:w-7 bg-zinc-800/80 border border-zinc-700/30 scale-95 opacity-50"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Subtitle / Percentage at the bottom */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none">
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] font-semibold text-orange-400/80 drop-shadow-[0_0_10px_rgba(255,109,0,0.4)]">
              {displayPercent}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
