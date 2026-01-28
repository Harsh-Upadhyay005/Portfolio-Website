"use client";
import { Boxes } from "@/components/ui/background-boxes";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white dark:bg-slate-900 flex flex-col items-center justify-center transition-colors">
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 text-center px-4 sm:px-6"
      >
        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
          className="mb-6 sm:mb-8"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-0.5 shadow-lg">
            <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HU
              </div>
            </div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3"
        >
          Harsh Upadhyay
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 font-medium"
        >
          Full Stack Developer | Tech Enthusiast
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 max-w-xl mx-auto px-4"
        >
          Passionate about creating beautiful and functional web experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4"
        >
          <button
            onClick={scrollToAbout}
            className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
          >
            View My Work
          </button>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-lg font-semibold hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-all hover:scale-105 active:scale-95"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollToAbout}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-slate-900 dark:text-white animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>
    </section>
  );
}
