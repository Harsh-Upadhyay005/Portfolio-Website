"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      degree: "Bachelor of Computer Science and Engineering in Data Science",
      institution: "Raj Kumar Goel Institute of Technology",
      period: "2024 - 2028",
      description: "Specialized in Data Science and Web Development",
      achievements: ["GPA: 7.5/10.0", "Dean's List", "Best Project Award"],
    },
  
  ];

  const certifications = [
    "Coursera Python for Data Science",
    "Google Cloud Professional",
    "Meta Front-End Developer",
    "Microsoft Azure Fundamentals",
  ];

  return (
    <section id="education" className="min-h-screen bg-gray-100 dark:bg-slate-800 py-20 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-12">
            My Academic journey and Certifications
          </p>

          {/* Timeline */}
          <div className="relative mb-16">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                <div className="ml-20 md:ml-0 md:w-11/12">
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-slate-300 dark:border-slate-700 hover:border-blue-500 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 rounded-full p-3">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-blue-600 dark:text-blue-400 font-semibold mb-1">{edu.period}</div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{edu.degree}</h3>
                        <p className="text-slate-700 dark:text-slate-300 mb-3">{edu.institution}</p>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">{edu.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-300 dark:border-slate-700"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-100 dark:border-slate-800 transform -translate-x-1/2"></div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
              <Award className="w-6 h-6 text-yellow-500" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-slate-300 dark:border-slate-700 hover:border-yellow-500 transition-all flex items-center gap-3"
                >
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-slate-900 dark:text-white">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
