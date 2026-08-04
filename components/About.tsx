"use client";

import { motion } from "framer-motion";
import {
  Quote,
  GraduationCap,
  Lightbulb,
  Rocket,
  Code,
  MapPin,
  CheckCircle2
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-zinc-50 dark:bg-zinc-950 transition-colors relative overflow-hidden">
      {/* Background Soft Accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean 2-Card Layout Matching Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Main Quote Card (8 Columns on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 flex flex-col justify-between rounded-3xl bg-zinc-900/90 dark:bg-zinc-900/95 border border-zinc-800/80 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300"
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Quote Mark Icon 99 */}
              <div className="mb-6 text-orange-500 dark:text-orange-500/90">
                <span className="text-5xl sm:text-6xl font-serif leading-none font-bold select-none tracking-tighter opacity-90">
                  99
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-snug mb-6 tracking-tight">
                I am a{" "}
                <span className="text-orange-500 dark:text-orange-400">
                  Full-Stack Developer
                </span>{" "}
                who loves turning ideas into real, production-ready products—from code to deployment.
              </h2>

              {/* Detailed Bio Paragraph */}
              <p className="text-sm sm:text-base md:text-lg text-zinc-300 dark:text-zinc-300 leading-relaxed mb-8 font-normal">
                I have practical experience with{" "}
                <strong className="font-semibold text-white">
                  JavaScript, TypeScript, React, Node.js, Next.js and Python
                </strong>
                , and I specialize in building scalable, maintainable applications while emphasizing clean architecture, performance, and reliability.
              </p>
            </div>

            {/* Bottom Badge Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs sm:text-sm font-semibold text-orange-400 shadow-sm hover:border-orange-500/40 transition-colors">
                <div className="p-1 rounded-full bg-orange-500/20 text-orange-400">
                  <GraduationCap size={15} />
                </div>
                <span>Continuous Learning</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs sm:text-sm font-semibold text-orange-400 shadow-sm hover:border-orange-500/40 transition-colors">
                <div className="p-1 rounded-full bg-orange-500/20 text-orange-400">
                  <Lightbulb size={15} />
                </div>
                <span>Problem Solving</span>
              </div>

              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs sm:text-sm font-semibold text-orange-400 shadow-sm hover:border-orange-500/40 transition-colors">
                <div className="p-1 rounded-full bg-orange-500/20 text-orange-400">
                  <Rocket size={15} />
                </div>
                <span>Innovation Focus</span>
              </div>
            </div>
          </motion.div>

          {/* Right "AT A GLANCE" Quick Facts Card (4 Columns on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col justify-between rounded-3xl bg-zinc-900/90 dark:bg-zinc-900/95 border border-zinc-800/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300"
          >
            {/* Header */}
            <div>
              <h3 className="text-xs uppercase font-extrabold tracking-widest text-zinc-400 mb-6">
                AT A GLANCE
              </h3>

              {/* Status Items List */}
              <div className="space-y-6">
                
                {/* Row 1: ROLE */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-zinc-800/90 border border-zinc-700/60 text-orange-400 shrink-0">
                    <Code size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase font-bold tracking-wider text-zinc-500 mb-0.5">
                      ROLE
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white">
                      Full-Stack Developer
                    </span>
                  </div>
                </div>

                <div className="w-full h-px bg-zinc-800/60" />

                {/* Row 2: EDUCATION */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-zinc-800/90 border border-zinc-700/60 text-orange-400 shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase font-bold tracking-wider text-zinc-500 mb-0.5">
                      EDUCATION
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white">
                      B.Tech, CSE · 2024-2028
                    </span>
                  </div>
                </div>

                <div className="w-full h-px bg-zinc-800/60" />

                {/* Row 3: BASED IN */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-zinc-800/90 border border-zinc-700/60 text-orange-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase font-bold tracking-wider text-zinc-500 mb-0.5">
                      BASED IN
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white">
                      India
                    </span>
                  </div>
                </div>

                <div className="w-full h-px bg-zinc-800/60" />

                {/* Row 4: STATUS */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-zinc-800/90 border border-zinc-700/60 text-orange-400 shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase font-bold tracking-wider text-zinc-500 mb-0.5">
                      STATUS
                    </span>
                    <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
                      <span>Open to opportunities</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
