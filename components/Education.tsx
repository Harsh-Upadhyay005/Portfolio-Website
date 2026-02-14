"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { GraduationCap, Award, BookOpen, Sparkles, ExternalLink, X, Calendar, MapPin, Building2, Trophy, Code } from "lucide-react";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { FaCertificate } from "react-icons/fa";
import Image from "next/image"; 
import { Certificate } from "crypto";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const education = [
    {
      institution: "Raj Kumar Goel Institute of Technology",
      degree: "Bachelor of Computer Science and Engineering in Data Science",
      period: "2024 - 2028",
      location: "Ghaziabad, Uttar Pradesh",
      description: "Specialized in Data Science and Web Development with focus on modern technologies and practical applications.",
      achievements: ["Best Project Award" , "Tech Club Member"],
      collegeLogo: "/college-logo.png", 
      collegeImage: "/college-building.jpg",
      color: "from-purple-500 to-pink-500",
      status: "Currently Pursuing"
    },
  ];

  const certifications = [
    { 
      name: "Python for AI & Development", 
      provider: "Coursera", 
      icon: SiCoursera,
      iconColor: "#0056D2",
      certUrl: "/certificates/Coursera 1NCRBJK437M7 Certificate.pdf",
      issueDate: "2025"
    },
    { 
      name: "Data Structures & Algorithms", 
      provider: "Apna College", 
      icon: FaCertificate,
      iconColor: "#F59E0B",
      certUrl: "/certificates/DSA Certificate-sigma-50-672b17223c33c36b830d9022.pdf",
      issueDate: "2025"
    },
    { 
      name: "Complete Web Development Bootcamp", 
      provider: "Apna College", 
      icon: Code,
      iconColor: "#10B981",
      certUrl: "",
      issueDate: "2026"
    },
    { 
      name: "Python for Data Science", 
      provider: "Udemy", 
      icon: SiUdemy,
      iconColor: "#A435F0",
      certUrl: "",
      issueDate: "2026"
    },
  ];

  return (
    <section id="education" className="min-h-screen bg-linear-to-br from-orange-50 via-purple-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-3xl" />
      
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
              <div className="bg-linear-to-r from-purple-600 to-orange-600 p-3 rounded-2xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-purple-600 via-orange-600 to-teal-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              {"Education & Certifications".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
                  animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
                  transition={{ 
                    delay: 0.3 + index * 0.025,
                    duration: 0.4
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>
            <motion.p 
              className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.0 }}
            > 
              {["My", "academic", "journey", "and", "professional", "achievements"].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 1.1 + index * 0.08,
                    duration: 0.3
                  }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </div>

          {/* Education Cards */}
          <div className="mb-12 sm:mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative group max-w-6xl mx-auto"
              >
                {/* Animated Background Glow */}
                <div className="absolute -inset-1 bg-linear-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
                
                {/* Main Card with Grid Layout */}
                <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-200 dark:border-purple-900 shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-300">
                  
                  {/* Top Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-linear-to-r ${edu.color}`} />
                  
                  <div className="grid lg:grid-cols-5 gap-6 p-6 sm:p-8">
                    {/* Left Side - College Image & Logo */}
                    <div className="lg:col-span-2 space-y-4">
                      {/* College Building Image */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="relative rounded-2xl overflow-hidden shadow-xl group/img"
                      >
                        <div className="aspect-video bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 relative">
                          {/* Placeholder for college image */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Building2 className="w-24 h-24 text-purple-300 dark:text-purple-700" />
                          </div>
                          {/* When user adds image, it will be displayed here */}
                          <Image 
                            src={edu.collegeImage} 
                            alt={edu.institution}
                            fill
                            className="object-cover group-hover/img:scale-110 transition-transform duration-500"
                          />
                          
                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                          
                          {/* Status Badge on Image */}
                          <div className="absolute top-3 right-3">
                            <motion.div
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="bg-linear-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg"
                            >
                              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                              {edu.status}
                            </motion.div>
                          </div>

                          {/* College Logo Overlay - Top Right */}
                          <div className="absolute top-3 left-3">
                            <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl shadow-2xl border-2 border-white dark:border-slate-700">
                              <Image src={edu.collegeLogo} alt="Logo" width={48} height={48} className="rounded-lg" />
                              {/* Using GraduationCap icon as placeholder until you add your college logo */}
                              {/* <GraduationCap className="w-10 h-10 text-purple-600 dark:text-purple-400" /> */}
                            </div>
                          </div>
                        </div>

                        {/* Quick Stats Bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-3 border-t border-purple-200 dark:border-purple-800">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-purple-500" />
                              <span className="font-semibold text-purple-700 dark:text-purple-300">{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-orange-500" />
                              <span className="text-slate-600 dark:text-slate-400 line-clamp-1">{edu.location}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Achievement Badges */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="flex flex-wrap gap-2"
                      >
                        {edu.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="flex items-center gap-1.5 bg-linear-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-700 dark:text-amber-300 px-3 py-1.5 rounded-lg text-xs font-semibold border border-amber-200 dark:border-amber-800"
                          >
                            <Trophy className="w-3.5 h-3.5" />
                            {achievement}
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Right Side - Details */}
                    <div className="lg:col-span-3 space-y-5">
                      {/* Institution Name */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <div className="flex items-start gap-3 mb-2">
                          <div className="bg-linear-to-br from-purple-500 to-pink-500 p-3 rounded-xl shadow-lg">
                            <Building2 className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                              {edu.institution}
                            </h3>
                          </div>
                        </div>
                      </motion.div>

                      {/* Degree with Shine Effect */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="relative group/degree"
                      >
                        <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-lg opacity-0 group-hover/degree:opacity-100 transition-opacity" />
                        <div className="relative bg-linear-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
                          <div className="flex items-start gap-2">
                            <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-1">BACHELOR&apos;S DEGREE</p>
                              <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                                {edu.degree}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Description */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700"
                      >
                        <div className="flex items-start gap-2">
                          <BookOpen className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 mb-1">SPECIALIZATION</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                              {edu.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Additional Info Grid */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="grid grid-cols-2 gap-3"
                      >
                        <div className="bg-linear-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">FOCUS AREAS</p>
                          <div className="flex flex-wrap gap-1.5">
                            <span className="text-xs bg-blue-200 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-md font-medium">Data Science</span>
                            <span className="text-xs bg-cyan-200 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 px-2 py-1 rounded-md font-medium">Web Dev</span>
                          </div>
                        </div>
                        
                        <div className="bg-linear-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-xl p-4 border border-teal-200 dark:border-teal-800">
                          <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 mb-1">ACHIEVEMENTS</p>
                          <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-amber-500" />
                            <span className="text-sm font-bold text-slate-900 dark:text-white">{edu.achievements.length}+ Awards</span>
                          </div>
                        </div>
                      </motion.div>
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
              <div className="bg-linear-to-r from-teal-500 to-cyan-500 p-2.5 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Professional Certifications
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className={`group relative ${cert.certUrl ? 'cursor-pointer' : 'cursor-default'}`}
                  onClick={() => cert.certUrl && setSelectedCert(cert.certUrl)}
                >
                  {/* Animated Glow */}
                  <div 
                    className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"
                    style={{ backgroundColor: `${cert.iconColor}40` }}
                  />
                  
                  {/* Card */}
                  <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-5 border-2 border-slate-200 dark:border-slate-700 group-hover:border-transparent shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header with Icon */}
                      <div className="flex items-start justify-between mb-4">
                        <div 
                          className="p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: `${cert.iconColor}20` }}
                        >
                          <cert.icon 
                            className="w-8 h-8"
                            style={{ color: cert.iconColor }}
                          />
                        </div>
                        
                        {cert.certUrl ? (
                          <motion.div
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/50 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400" />
                          </motion.div>
                        ) : (
                          <span className="text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-1 rounded-full font-semibold">
                            Coming Soon
                          </span>
                        )}
                      </div>

                      {/* Certificate Name */}
                      <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text transition-all" style={{ backgroundImage: cert.certUrl ? `linear-gradient(to right, ${cert.iconColor}, ${cert.iconColor}dd)` : undefined }}>
                        {cert.name}
                      </h4>

                      {/* Provider & Date */}
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          by <span className="font-bold" style={{ color: cert.iconColor }}>{cert.provider}</span>
                        </p>
                        <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-500">
                          <Calendar className="w-3 h-3" />
                          {cert.issueDate}
                        </div>
                      </div>

                      {/* Action Indicator */}
                      {cert.certUrl && (
                        <div className="flex items-center gap-2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: cert.iconColor }}>
                          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                          Click to view certificate
                        </div>
                      )}
                    </div>

                    {/* Badge for verified */}
                    {cert.certUrl && (
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-linear-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Verified
                        </div>
                      </div>
                    )}
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
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="relative w-full h-[80vh] overflow-auto">
                    <iframe
                      src={selectedCert}
                      className="w-full h-full"
                      title="Certificate Viewer"
                    />
                  </div>

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
