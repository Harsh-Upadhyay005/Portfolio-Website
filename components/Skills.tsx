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
        { name: "JavaScript", level: "Expert", icon: "⚡" },
        { name: "React", level: "Intermediate", icon: "⚛️" },
        { name: "Next.js", level: "Intermediate", icon: "▲" },
        { name: "TypeScript", level: "Advanced", icon: "🔷" },
        { name: "Tailwind CSS", level: "Expert", icon: "🎨" },
      ]
    },
    {
      category: "Backend Development",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: "Advanced", icon: "🟢" },
        { name: "Express.js", level: "Advanced", icon: "🚀" },
        { name: "MongoDB", level: "Advanced", icon: "🍃" },
        { name: "Python", level: "Advanced", icon: "🐍" },
        { name: "Java", level: "Intermediate", icon: "☕" },
      ]
    },
    {
      category: "Tools & DevOps",
      icon: Wrench,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git & GitHub", level: "Advanced", icon: "🔧" },
        { name: "Docker", level: "Intermediate", icon: "🐳" },
        { name: "VS Code", level: "Expert", icon: "💻" },
        { name: "Postman", level: "Advanced", icon: "📬" },
      ]
    },
    {
      category: "Cloud & Design",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: "Intermediate", icon: "☁️" },
        { name: "Vercel", level: "Advanced", icon: "▲" },
        { name: "Figma", level: "Intermediate", icon: "🎭" },
        { name: "Photoshop", level: "Intermediate", icon: "🖼️" },
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
    <section id="skills" className="min-h-screen bg-white dark:bg-slate-900 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-4"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl">
                <Star className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Skills & Expertise
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
              A comprehensive overview of my technical skills organized by category
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                className="bg-gray-50 dark:bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`bg-gradient-to-br ${category.color} p-3 rounded-xl`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                      className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:scale-[1.02] transition-all group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl group-hover:scale-110 transition-transform">
                            {skill.icon}
                          </span>
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelBadge(skill.level)}`}>
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
            className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-center text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-2">18+</div>
              <div className="text-sm sm:text-base opacity-90">Technologies</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-center text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-2">5+</div>
              <div className="text-sm sm:text-base opacity-90">Projects</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-center text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-2">1+</div>
              <div className="text-sm sm:text-base opacity-90">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-center text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-2">4</div>
              <div className="text-sm sm:text-base opacity-90">Categories</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
