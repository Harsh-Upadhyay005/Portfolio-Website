"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { GraduationCap, Award, BookOpen, Trophy, Star, Sparkles, ExternalLink, X } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const education = [
    {
      degree: "Bachelor of Computer Science and Engineering in Data Science",
      institution: "Raj Kumar Goel Institute of Technology",
      period: "2024 - 2028",
      description: "Specialized in Data Science and Web Development",
      achievements: ["GPA: 7.5/10.0", "Dean's List", "Best Project Award"],
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const certifications = [
    { 
      name: "Coursera Python for Data Science", 
      provider: "Coursera", 
      icon: "🐍",
      certUrl: "/certificates/python-cert.pdf" // Replace with your actual certificate URL
    },
    { 
      name: "Google Cloud Professional", 
      provider: "Google", 
      icon: "☁️",
      certUrl: "/certificates/google-cloud-cert.pdf"
    },
    { 
      name: "Meta Front-End Developer", 
      provider: "Meta", 
      icon: "⚛️",
      certUrl: "/certificates/meta-cert.pdf"
    },
    { 
      name: "Microsoft Azure Fundamentals", 
      provider: "Microsoft", 
      icon: "💠",
      certUrl: "/certificates/azure-cert.pdf"
    },
  ];

  return (
    <section id="education" className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
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
              <div className="bg-gradient-to-r from-purple-600 to-orange-600 p-3 rounded-2xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-orange-600 to-teal-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              Education & Certifications
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
              My academic journey and professional achievements
            </p>
          </div>

          {/* Education Cards */}
          <div className="mb-12 sm:mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
              >
                {/* Decorative Corner Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-2xl opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-br from-orange-400 to-red-400 dark:from-orange-600 dark:to-red-600 rounded-2xl opacity-20 blur-xl"></div>
                
                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-purple-200 dark:border-purple-900 shadow-2xl">
                  {/* Top Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-orange-500 to-teal-500 rounded-t-3xl"></div>
                  
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {/* Icon Section */}
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className={`bg-gradient-to-br ${edu.color} p-6 rounded-2xl shadow-xl`}
                      >
                        <edu.icon className="w-12 h-12 text-white" />
                      </motion.div>
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-teal-500 to-cyan-500 p-2 rounded-lg">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="bg-gradient-to-r from-purple-500 to-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                          {edu.period}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 text-sm">📍 Current</span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <Trophy className="w-5 h-5 text-orange-500" />
                        <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300">
                          {edu.institution}
                        </p>
                      </div>
                      
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4">
                        {edu.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="bg-gradient-to-r from-purple-100 to-orange-100 dark:from-purple-900/30 dark:to-orange-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-xl text-sm font-medium border border-purple-200 dark:border-purple-800"
                          >
                            ✨ {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-2.5 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Professional Certifications
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedCert(cert.certUrl)}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                  
                  <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-5 border border-teal-200 dark:border-teal-900 hover:border-teal-400 dark:hover:border-teal-500 transition-all hover:shadow-xl hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{cert.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Issued by <span className="font-semibold text-teal-600 dark:text-teal-400">{cert.provider}</span>
                        </p>
                        <p className="text-xs text-teal-600 dark:text-teal-400 mt-2 flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" />
                          Click to view certificate
                        </p>
                      </div>
                      <Sparkles className="w-5 h-5 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certificate Modal */}
            {selectedCert && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedCert(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative max-w-5xl w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Certificate Viewer */}
                  <div className="relative w-full h-[80vh] overflow-auto">
                    <iframe
                      src={selectedCert}
                      className="w-full h-full"
                      title="Certificate Viewer"
                    />
                  </div>

                  {/* Download Button */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <a
                      href={selectedCert}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Open in New Tab
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
