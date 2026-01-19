"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      title: "Junior Full Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      location: "Remote",
      description: "Leading development of enterprise web applications using modern technologies.",
      responsibilities: [
        "Architected and implemented scalable microservices",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance by 40%",
        "Led migration to cloud infrastructure",
      ],
      technologies: ["React", "Node.js", "AWS", "TypeScript"],
    },
    {
      title: "Full Stack Developer",
      company: "Startup Solutions",
      period: "2020 - 2022",
      location: "Hybrid",
      description: "Developed and maintained multiple client projects from concept to deployment.",
      responsibilities: [
        "Built responsive web applications from scratch",
        "Collaborated with designers and product managers",
        "Implemented CI/CD pipelines",
        "Reduced bug reports by 60% through testing",
      ],
      technologies: ["React", "Express", "MongoDB", "Docker"],
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      location: "On-site",
      description: "Contributed to various web development projects and learned industry best practices.",
      responsibilities: [
        "Developed website features and components",
        "Fixed bugs and improved code quality",
        "Participated in agile development process",
        "Assisted in database design and optimization",
      ],
      technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap"],
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-white dark:bg-slate-900 py-20 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            Work Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-12">
            My professional journey and accomplishments
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gray-100 dark:bg-slate-800 rounded-lg p-6 md:p-8 border border-slate-300 dark:border-slate-700 hover:border-blue-500 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className="bg-blue-600 rounded-lg p-3">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{exp.title}</h3>
                      <p className="text-xl text-blue-600 dark:text-blue-400 mb-2">{exp.company}</p>
                      <p className="text-slate-600 dark:text-slate-400">{exp.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <span className="text-slate-500 dark:text-slate-500">{exp.location}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-slate-900 dark:text-white font-semibold mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-300 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
