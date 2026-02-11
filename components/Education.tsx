"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { GraduationCap, Award, BookOpen, Sparkles, ExternalLink, X, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const education = [
    {
      institution: "Raj Kumar Goel Institute of Technology",
      degree: "Bachelor of Computer Science and Engineering in Data Science",
      period: "2024 - 2028",
      year: "2025",
      description: "Specialized in Data Science and Web Development",
      achievements: ["Best Project Award"],
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
      status: "Currently Pursuing"
    },
  ];

  const certifications = [
    { 
      name: "Coursera Certificate", 
      provider: "Coursera", 
      icon: "🎓",
      certUrl: "/certificates/Coursera 1NCRBJK437M7 Certificate.pdf"
    },
    
    { 
      name: "DSA Certificate", 
      provider: "Apna College", 
      icon: "🎓", // You can use any emoji
      certUrl: "/certificates/DSA Certificate-sigma-50-672b17223c33c36b830d9022.pdf"
    },
    { 
      name: "Web Development Certificate", 
      provider: "Apna College", 
      icon: "🎓", // You can use any emoji
      certUrl: "/certificates/Comming soon"
    },
    { 
      name: "Python Certificate", 
      provider: "Udemy", 
      icon: "🎓", // You can use any emoji
      certUrl: "/certificates/Comming soon"
    },

    // Add more certificates below by copying the format above:
    // { 
    //   name: "Certificate Name", 
    //   provider: "Provider Name", 
    //   icon: "🏆", // You can use any emoji
    //   certUrl: "/certificates/your-certificate-file.pdf"
    // },
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

          {/* Education Timeline */}
          <div className="mb-12 sm:mb-16 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-orange-500 to-teal-500 transform md:-translate-x-1/2">
              {/* Animated Pulse */}
              <motion.div
                animate={{ 
                  y: [0, 1000],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-0 left-1/2 w-1 h-20 bg-gradient-to-b from-transparent via-white to-transparent -translate-x-1/2"
              />
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                className={`relative flex items-center mb-12 md:mb-20 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 200 }}
                    className="relative"
                  >
                    {/* Pulsing Ring */}
                    {/* <motion.div
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"
                    />
                    
                    {/* Icon Container */}
                    {/* <div className={`relative bg-gradient-to-br ${edu.color} p-4 rounded-full shadow-2xl border-4 border-white dark:border-slate-900`}>
                      <edu.icon className="w-6 h-6 text-white" />
                    </div> */}
                    
                    {/* Floating Badge */}
                    {/* <motion.div
                      animate={{ 
                        y: [-2, 2, -2],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -top-2 -right-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full p-1.5 border-2 border-white dark:border-slate-900 shadow-lg"
                    >
                      <Star className="w-3 h-3 text-white" />
                    </motion.div> */}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                    className="relative group"
                  >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-orange-600 to-teal-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    
                    {/* Card */}
                    <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-3xl p-6 border border-purple-200 dark:border-purple-900 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                      {/* Top Accent Bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${edu.color} rounded-t-3xl`}></div>
                      
                      {/* Year Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className={`bg-gradient-to-r ${edu.color} p-2 rounded-lg`}
                        >
                          <Calendar className="w-4 h-4 text-white" />
                        </motion.div>
                        <span className="bg-gradient-to-r from-purple-500 to-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold">
                          {edu.period}
                        </span>
                        <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-semibold">
                          {edu.status}
                        </span>
                      </div>
                      
                      {/* Institute */}
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-orange-600 transition-all">
                        <div className="flex items-start gap-2 mb-3">
                        <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <p className="text-base font-semibold dark:text-slate-100">
                          {edu.institution}</p>
                        </div>
                      </h3>
                      
                      {/* Degree Title */}
                      <div className="flex items-start gap-2 mb-3">
                          {edu.degree}
                        
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                      
                      {/* Achievements with Animation */}
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            tran
                        sition={{ delay: 0.8 + index * 0.2 + i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="bg-gradient-to-r from-purple-100 to-orange-100 dark:from-purple-900/40 dark:to-orange-900/40 text-purple-700 dark:text-purple-300 px-3 py-1.5 rounded-lg text-xs font-medium border border-purple-200 dark:border-purple-800 cursor-default"
                          >
                            ✨ {achievement}
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* Corner Decoration */}
                      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 dark:from-orange-600 dark:to-red-600 rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity"></div>
                    </div>
                  </motion.div>
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
