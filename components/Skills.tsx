"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Palette, Database, Cloud, Wrench, Star } from "lucide-react";

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
        { name: "Python", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
      ]
    },
    {
      category: "Tools & DevOps",
      icon: Wrench,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
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
    const badges = {
      "Expert": "bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/50",
      "Advanced": "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/50",
      "Intermediate": "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/50"
    };
    return badges[level as keyof typeof badges] || badges.Intermediate;
  };

  return (
    <section id="skills" className="bg-white dark:bg-slate-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Skills & Expertise
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Technical skills organized by category
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`bg-gradient-to-br ${category.color} p-2 rounded-lg`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                      className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-400 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-900 dark:text-white text-sm sm:text-base">
                          {skill.name}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getLevelBadge(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 sm:p-5 text-center text-white">
              <div className="text-2xl sm:text-3xl font-bold mb-1">18+</div>
              <div className="text-xs sm:text-sm opacity-90">Technologies</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 sm:p-5 text-center text-white">
              <div className="text-2xl sm:text-3xl font-bold mb-1">5+</div>
              <div className="text-xs sm:text-sm opacity-90">Projects</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-4 sm:p-5 text-center text-white">
              <div className="text-2xl sm:text-3xl font-bold mb-1">1+</div>
              <div className="text-xs sm:text-sm opacity-90">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-4 sm:p-5 text-center text-white">
              <div className="text-2xl sm:text-3xl font-bold mb-1">4</div>
              <div className="text-xs sm:text-sm opacity-90">Categories</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
