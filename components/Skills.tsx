"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
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

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "REST API", icon: TbApi, color: "#47A248" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Java", icon: FaJava, color: "#007396" },
      ]
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      ]
    },
    {
      category: "Tools & DevOps",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#181717" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "VS Code", icon: VscCode, color: "#007ACC" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      ]
    },
    {
      category: "Cloud & Design",
      skills: [
        { name: "AWS", icon: FaAws, color: "#FF9900" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-linear-to-br from-yellow-50 via-orange-50 to-orange-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-yellow-300/20 dark:bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-orange-300/15 dark:bg-orange-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-4"
            >
              <div className="bg-linear-to-r from-yellow-600 to-orange-600 p-3 rounded-2xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-yellow-600 via-orange-600 to-orange-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              {"Skills & Expertise".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 0.3 + index * 0.03,
                    duration: 0.3
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Technologies and tools I work with to bring{" "}
              <GradientShimmerText gradientFrom="#3b82f6" gradientTo="#a855f7" speed={3}>
                ideas to life
              </GradientShimmerText>
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIndex * 0.15, duration: 0.5 }}
                className="group relative"
              >
                <div className="relative bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-700 hover:border-yellow-400 dark:hover:border-yellow-500 transition-all hover:shadow-2xl">
                  {/* Category Header */}
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                    {category.category}
                  </h3>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          delay: catIndex * 0.15 + skillIndex * 0.08, 
                          duration: 0.4,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.15,
                          y: -8,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                        className="group/item relative flex flex-col items-center justify-center"
                      >
                        {/* Icon Container */}
                        <div className="relative">
                          <div 
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover/item:opacity-100 blur-xl transition-opacity duration-300"
                            style={{ backgroundColor: `${skill.color}40` }}
                          />
                          <div 
                            className="relative bg-white dark:bg-zinc-700 p-4 sm:p-5 rounded-2xl shadow-lg border-2 border-zinc-200 dark:border-zinc-600 group-hover/item:border-transparent transition-all"
                            style={{
                              boxShadow: `0 4px 20px ${skill.color}20`
                            }}
                          >
                            <skill.icon 
                              className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300"
                              style={{ 
                                color: skill.color,
                                filter: 'brightness(1.1)'
                              }}
                            />
                          </div>
                        </div>

                        {/* Skill Name */}
                        <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-3 text-center leading-tight">
                          {skill.name}
                        </span>

                        {/* Hover Tooltip */}
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-zinc-900 dark:bg-zinc-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover/item:opacity-100 pointer-events-none transition-opacity duration-200 shadow-xl">
                          {skill.name}
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-zinc-900 dark:bg-zinc-700 rotate-45" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
