"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Database, Cloud, Wrench, Sparkles } from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript", level: "Expert" },
        { name: "React", level: "Intermediate" },
        { name: "Next.js", level: "Intermediate" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
      ]
    },
    {
      category: "Backend Development",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "Java", level: "Beginner" },
      ]
    },
    {
      category: "Tools & DevOps",
      icon: Wrench,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Docker", level: "Beginner" },
        { name: "VS Code", level: "Expert" },
        { name: "Postman", level: "Advanced" },
      ]
    },
    {
      category: "Cloud & Design",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: "Intermediate" },
        { name: "Vercel", level: "Advanced" },
        { name: "Figma", level: "Intermediate" },
        { name: "Photoshop", level: "Intermediate" },
      ]
    }
  ];

  const getLevelBadge = (level: string) => {
    const badges: Record<string, string> = {
      "Expert": "bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/50",
      "Advanced": "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/50",
      "Intermediate": "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/50",
      "Beginner": "bg-red-500/20 text-red-700 dark:text-red-300 border-red-500/50"
    };
    return badges[level] || badges.Intermediate;
  };

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-indigo-300/15 dark:bg-indigo-500/5 rounded-full blur-3xl" />

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
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              Skills & Expertise
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIndex * 0.15, duration: 0.5 }}
                className="group relative"
              >
                {/* Card glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all hover:shadow-xl">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`bg-gradient-to-br ${category.color} p-2.5 rounded-xl shadow-lg`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: catIndex * 0.15 + skillIndex * 0.05, duration: 0.4 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="group relative"
                      >
                        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700/50 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all">
                          <span className="font-medium text-slate-900 dark:text-white text-sm">
                            {skill.name}
                          </span>
                          <span className={`px-2 py-0.5 rounded-md text-xs font-medium border ${getLevelBadge(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
          >
            {[
              { value: "20+", label: "Technologies", color: "from-blue-500 to-blue-600" },
              { value: "5+", label: "Projects", color: "from-green-500 to-green-600" },
              { value: "1+", label: "Years Learning", color: "from-purple-500 to-purple-600" },
              { value: "4", label: "Categories", color: "from-orange-500 to-orange-600" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className={`bg-gradient-to-br ${stat.color} rounded-xl p-4 sm:p-5 text-center text-white shadow-lg cursor-default`}
              >
                <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm opacity-90">{stat.label}</div>
              </motion.div> */}
            {/* ))}
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
