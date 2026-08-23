"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { GradientShimmerText } from "./ui/shimmer-text";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiPython,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVercel,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaJava, FaAws } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "REST API", icon: TbApi, color: "#47A248" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#007396" },
    ],
  },
  {
    category: "Databases & Storage",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    category: "Cloud & Design",
    skills: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-linear-to-br from-yellow-50 via-orange-50 to-orange-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors relative overflow-hidden contain-paint"
    >
      {/* Decorative Elements - GPU Accelerated */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400/15 dark:bg-yellow-500/10 rounded-full blur-2xl pointer-events-none transform-gpu" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-400/15 dark:bg-orange-500/10 rounded-full blur-2xl pointer-events-none transform-gpu" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-3 rounded-2xl shadow-lg shadow-orange-500/20">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-orange-600 bg-clip-text text-transparent mb-3 sm:mb-4 tracking-tight">
            Skills &amp; Expertise
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring{" "}
            <GradientShimmerText gradientFrom="#f97316" gradientTo="#eab308" speed={3}>
              ideas to life
            </GradientShimmerText>
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: catIndex * 0.08, duration: 0.45, ease: "easeOut" }}
              className="group relative"
            >
              <div className="relative bg-white/85 dark:bg-zinc-800/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-700/80 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-xl dark:hover:shadow-orange-500/5 transform-gpu">
                {/* Category Header */}
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  {category.category}
                </h3>

                {/* Skills Icons Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3.5 sm:gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item relative flex flex-col items-center justify-center cursor-pointer transition-transform duration-200 hover:-translate-y-1.5"
                    >
                      {/* Icon Container */}
                      <div className="relative bg-white dark:bg-zinc-700/90 p-3.5 sm:p-4 rounded-2xl shadow-sm border border-zinc-200/90 dark:border-zinc-600/80 group-hover/item:border-orange-400 dark:group-hover/item:border-orange-400/80 group-hover/item:shadow-md transition-all duration-200">
                        <skill.icon
                          className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-200 group-hover/item:scale-110"
                          style={{
                            color: skill.color,
                          }}
                        />
                      </div>

                      {/* Skill Name */}
                      <span className="text-[11px] sm:text-xs font-medium text-zinc-700 dark:text-zinc-300 mt-2.5 text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
