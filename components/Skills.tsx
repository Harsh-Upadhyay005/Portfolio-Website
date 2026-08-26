"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiSupabase,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiScikitlearn,
  SiDocker,
  SiPandas,
  SiNumpy,
  SiFastapi,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  darkColor?: string;
}

// 4 Columns of skills matching the design showcase
const column1: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", darkColor: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
];

const column2: Skill[] = [
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Express", icon: SiExpress, color: "#000000", darkColor: "#FFFFFF" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
];

const column3: Skill[] = [
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717", darkColor: "#FFFFFF" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const column4: Skill[] = [
  { name: "Numpy", icon: SiNumpy, color: "#00ADD8" },
  { name: "Pandas", icon: SiPandas, color: "#DD0031" },
  { name: "FastAPI", icon: SiFastapi, color: "#FD366E" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Scikitlearn", icon: SiScikitlearn, color: "#00599C" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-center justify-center group/card cursor-pointer py-1">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white dark:bg-zinc-800/95 shadow-[0_4px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.35)] border border-zinc-200/80 dark:border-zinc-700/60 flex items-center justify-center transition-all duration-300 group-hover/card:scale-110 group-hover/card:shadow-md group-hover/card:border-orange-400 dark:group-hover/card:border-orange-500/80">
        <skill.icon
          className={`w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover/card:scale-110 ${
            skill.darkColor ? "text-zinc-900 dark:text-white" : ""
          }`}
          style={{
            color: skill.darkColor ? undefined : skill.color,
          }}
        />
      </div>
      <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 text-center mt-2 leading-tight tracking-tight whitespace-nowrap group-hover/card:text-orange-500 transition-colors">
        {skill.name}
      </span>
    </div>
  );
}

function MarqueeColumn({
  skills,
  direction = "up",
  speed = "slow",
}: {
  skills: Skill[];
  direction?: "up" | "down";
  speed?: "slow" | "fast";
}) {
  const animationClass =
    direction === "up"
      ? speed === "slow"
        ? "animate-marquee-up-slow"
        : "animate-marquee-up-fast"
      : speed === "slow"
      ? "animate-marquee-down-slow"
      : "animate-marquee-down-fast";

  // Duplicate items 4 times to ensure perfectly smooth continuous looping without gaps
  const items = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="flex-1 flex flex-col overflow-hidden select-none">
      <div
        className={`flex flex-col gap-4 sm:gap-5 ${animationClass} hover:[animation-play-state:paused]`}
      >
        {items.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-14 sm:py-20 bg-[#fafafa] dark:bg-[#0c0c0c] transition-colors relative overflow-hidden contain-paint selection:bg-orange-500/30"
    >
      {/* Background Soft Accents */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-orange-500/5 dark:bg-orange-500/5 rounded-full blur-[130px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-amber-500/5 dark:bg-amber-500/5 rounded-full blur-[130px] pointer-events-none transform-gpu" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* --- Left Side: Header & Context --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            {/* ✦ TECH STACK Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-zinc-800/60 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300 text-xs font-semibold mb-4 shadow-xs tracking-wider uppercase backdrop-blur-sm">
              <span className="text-orange-500 text-xs">✦</span>
              <span>TECH STACK</span>
            </div>

            {/* Headline matching user design */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-[1.1] mb-1.5">
              Key Technologies
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal italic font-serif text-zinc-400 dark:text-zinc-500 tracking-tight leading-[1.1] mb-5">
              &amp; Platforms
            </h3>

            {/* Subtitle description */}
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md mb-6">
              A curated set of modern tools I use to build fast, scalable, and production-ready applications.
            </p>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 shadow-xs">
                <CheckCircle2 size={12} className="text-orange-500" />
                <span>Full-Stack Ready</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 shadow-xs">
                <CheckCircle2 size={12} className="text-orange-500" />
                <span>Modern Architecture</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 shadow-xs">
                <CheckCircle2 size={12} className="text-orange-500" />
                <span>Cloud &amp; DevOps</span>
              </div>
            </div>
          </motion.div>

          {/* --- Right Side: Smooth Continuous Moving Showcase Card (No fade mask, compact size) --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 flex justify-center lg:justify-end w-full"
          >
            {/* Compact Enclosing Card with Rounded Corners & Shadow */}
            <div className="relative w-full max-w-[460px] rounded-[2rem] sm:rounded-[2.5rem] bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.07)] dark:shadow-[0_15px_45px_-10px_rgba(0,0,0,0.5)] p-4 sm:p-6 overflow-hidden group">
              
              {/* Subtle ambient internal glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

              {/* 4 Vertical Continuous Marquee Columns without fade mask */}
              <div className="relative h-[380px] sm:h-[420px] flex gap-2.5 sm:gap-3.5 overflow-hidden">
                <MarqueeColumn skills={column1} direction="up" speed="slow" />
                <MarqueeColumn skills={column2} direction="down" speed="fast" />
                <MarqueeColumn skills={column3} direction="up" speed="fast" />
                <MarqueeColumn skills={column4} direction="down" speed="slow" />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
