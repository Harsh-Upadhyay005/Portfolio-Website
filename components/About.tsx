"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { Code2, Rocket, Heart, Sparkles, Award, Target } from "lucide-react";
import { GradientShimmerText } from "./ui/shimmer-text";
import { StackedCarousel } from "./ui/stacked-carousel";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="bg-linear-to-br from-purple-50 via-orange-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-6 sm:py-10 px-4 sm:px-6 lg:px-8 transition-colors relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/30 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-300/20 dark:bg-teal-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-4"
            >
              <div className="bg-linear-to-r from-purple-600 to-orange-600 p-3 rounded-2xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-purple-600 via-orange-600 to-teal-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              {"About Me".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20, rotateX: 90 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ 
                    delay: 0.3 + index * 0.05,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="inline-block"
                  style={{ transformOrigin: "bottom" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>
            <motion.p 
              className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              {["Crafting", "digital", "experiences", "with", "passion", "and", "precision"].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: 0.8 + index * 0.1,
                    duration: 0.3
                  }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mt-2 sm:mt-4 items-center">
            {/* 3D Stacked Carousel (Left Side) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
              className="relative w-full flex justify-center items-center py-2 order-2 lg:order-1"
            >
              <StackedCarousel 
                images={[
                  "/profile.png", 
                  "/profile1.png", 
                  "/video-conferencing.png",
                  "/college-building.jpg"
                ]} 
              />
            </motion.div>

            {/* Text Content (Right Side) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-full space-y-4 text-left order-1 lg:order-2"
            >
              {/* Introduction */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-5 sm:p-6 border border-purple-200 dark:border-purple-900 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 flex justify-start items-center gap-3">
                  <span className="text-3xl hover:rotate-12 transition-transform cursor-default"></span> Hello There!
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  I&apos;m a passionate <span className="font-semibold text-purple-600 dark:text-purple-400">Full Stack Developer</span> with 
                  a keen eye for design and a love for creating exceptional digital experiences. I transform ideas into 
                  reality through <GradientShimmerText gradientFrom="#ea580c" gradientTo="#f97316" speed={2.5} className="font-semibold">clean code</GradientShimmerText> and{" "}
                  <GradientShimmerText gradientFrom="#0d9488" gradientTo="#14b8a6" speed={2.5} className="font-semibold">intuitive interfaces</GradientShimmerText>.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Currently pursuing my <span className="font-semibold">Bachelor&apos;s in Computer Science and Engineering 
                  in Data Science</span>, I specialize in building responsive, user-friendly applications that deliver 
                  outstanding performance and delightful user experiences.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
