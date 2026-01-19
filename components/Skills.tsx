"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    {name: "JavaScript", level: 90, color: "bg-yellow-400" },
    { name: "React", level: 10, color: "bg-blue-500" },
    { name: "Next.js", level: 15, color: "bg-emerald-700" },
    { name: "TypeScript", level: 78, color: "bg-blue-600" },
    { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
    { name: "Node.js", level: 80, color: "bg-green-600" },
    { name: "Python", level: 85, color: "bg-yellow-500" },
    { name: "MongoDB", level: 80, color: "bg-green-500" },
    { name: "Git", level: 85, color: "bg-orange-600" },
    { name: "Express.js", level: 75, color: "bg-purple-600" },
    { name: "Java", level: 50, color: "bg-salmon-600"},
  ];

  const tools = [
    "VS Code", "Figma", "Photoshop", "Docker",
    "AWS", "Vercel", "Postman", "GitHub"
  ];

  return (
    <section id="skills" className="min-h-screen bg-white dark:bg-slate-900 py-20 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            Skills & Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-12">
            Technologies and tools I work with
          </p>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gray-100 dark:bg-slate-800 rounded-lg p-6 border border-slate-300 dark:border-slate-700"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-900 dark:text-white font-medium">{skill.name}</span>
                    <span className="text-slate-600 dark:text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                      className={`h-full ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Tools & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="bg-gray-100 dark:bg-slate-800 rounded-lg p-4 border border-slate-300 dark:border-slate-700 text-center hover:border-blue-500 hover:scale-105 transition-all cursor-pointer"
                >
                  <span className="text-slate-900 dark:text-white font-medium">{tool}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
