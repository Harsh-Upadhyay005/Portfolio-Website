"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  Sparkles,
  ExternalLink,
  X,
  Calendar,
  MapPin,
  Building2,
  Trophy,
  Code,
} from "lucide-react";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { FaCertificate } from "react-icons/fa";
import Image from "next/image";

const education = [
  {
    institution: "Raj Kumar Goel Institute of Technology",
    degree: "Bachelor of Computer Science and Engineering in Data Science",
    period: "2024 - 2028",
    location: "Ghaziabad, Uttar Pradesh",
    description:
      "Specialized in Data Science and Web Development with focus on modern technologies and practical applications.",
    achievements: ["Best Project Award", "Tech Club Member"],
    collegeLogo: "/college-logo.png",
    collegeImage: "/college-building.jpg",
    color: "from-orange-500 to-amber-500",
    status: "Currently Pursuing",
  },
];

const certifications = [
  {
    name: "Python for AI & Development",
    provider: "Coursera",
    icon: SiCoursera,
    iconColor: "#0056D2",
    certUrl: "/certificates/Coursera 1NCRBJK437M7 Certificate.pdf",
    issueDate: "2025",
  },
  {
    name: "Data Structures & Algorithms",
    provider: "Apna College",
    icon: FaCertificate,
    iconColor: "#F59E0B",
    certUrl: "/certificates/DSA Certificate-sigma-50-672b17223c33c36b830d9022.pdf",
    issueDate: "2025",
  },
  {
    name: "Complete Web Development Bootcamp",
    provider: "Apna College",
    icon: Code,
    iconColor: "#10B981",
    certUrl: "certificates/web-development.pdf",
    issueDate: "2026",
  },
  {
    name: "Python for Data Science",
    provider: "Udemy",
    icon: SiUdemy,
    iconColor: "#A435F0",
    certUrl: "",
    issueDate: "2026",
  },
];

export default function Education() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section
      id="education"
      className="min-h-screen bg-linear-to-br from-orange-50 via-orange-50 to-zinc-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors relative overflow-hidden contain-paint"
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-400/15 dark:bg-orange-500/10 rounded-full blur-2xl pointer-events-none transform-gpu" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-400/15 dark:bg-amber-500/10 rounded-full blur-2xl pointer-events-none transform-gpu" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-orange-600 to-amber-500 p-2.5 rounded-2xl shadow-lg shadow-orange-500/20">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4 tracking-tight">
            Education &amp; Certifications
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
            My academic journey and professional achievements
          </p>
        </motion.div>

        {/* Education Card */}
        <div className="mb-10 sm:mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative group max-w-5xl mx-auto"
            >
              {/* Main Card */}
              <div className="relative bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-3xl overflow-hidden border border-orange-200/80 dark:border-orange-900/60 shadow-xl transition-all duration-300 transform-gpu">
                {/* Top Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${edu.color}`} />

                <div className="grid lg:grid-cols-5 gap-5 p-5 sm:p-6">
                  {/* Left Side - College Image & Logo */}
                  <div className="lg:col-span-2 space-y-3">
                    <div className="relative rounded-2xl overflow-hidden shadow-md group/img aspect-video bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Building2 className="w-20 h-20 text-orange-300 dark:text-orange-700" />
                      </div>
                      <Image
                        src={edu.collegeImage}
                        alt={edu.institution}
                        fill
                        className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Status Badge */}
                      <div className="absolute top-3 right-3">
                        <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-md">
                          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          {edu.status}
                        </div>
                      </div>

                      {/* College Logo */}
                      <div className="absolute top-3 left-3">
                        <div className="bg-white dark:bg-zinc-800 p-2 rounded-xl shadow-md border border-white dark:border-zinc-700">
                          <Image src={edu.collegeLogo} alt="Logo" width={40} height={40} className="rounded-lg" />
                        </div>
                      </div>

                      {/* Quick Stats Bar */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-zinc-800/95 backdrop-blur-sm p-2.5 border-t border-orange-200 dark:border-orange-800">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-orange-500" />
                            <span className="font-semibold text-orange-700 dark:text-orange-300">{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-orange-500" />
                            <span className="text-zinc-600 dark:text-zinc-400 line-clamp-1">{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievement Badges */}
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-700 dark:text-amber-300 px-3 py-1.5 rounded-lg text-xs font-semibold border border-amber-200 dark:border-amber-800"
                        >
                          <Trophy className="w-3.5 h-3.5" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Details */}
                  <div className="lg:col-span-3 space-y-4">
                    {/* Institution Name */}
                    <div className="flex items-start gap-3 mb-2">
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2.5 rounded-xl shadow-md shrink-0">
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white leading-tight">
                          {edu.institution}
                        </h3>
                      </div>
                    </div>

                    {/* Degree */}
                    <div className="relative bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-3.5 border border-orange-200 dark:border-orange-800">
                      <div className="flex items-start gap-2">
                        <GraduationCap className="w-4.5 h-4.5 text-orange-600 dark:text-orange-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 mb-1">
                            BACHELOR&apos;S DEGREE
                          </p>
                          <p className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white leading-snug">
                            {edu.degree}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-3.5 border border-zinc-200 dark:border-zinc-700">
                      <div className="flex items-start gap-2">
                        <BookOpen className="w-4.5 h-4.5 text-orange-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 mb-1">SPECIALIZATION</p>
                          <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Additional Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-gradient-to-br from-yellow-50 to-zinc-50 dark:from-yellow-900/20 dark:to-zinc-900/20 rounded-xl p-3.5 border border-yellow-200 dark:border-yellow-800">
                        <p className="text-xs font-semibold text-yellow-600 dark:text-yellow-400 mb-1">FOCUS AREAS</p>
                        <div className="flex flex-wrap gap-1.5">
                          <span className="text-xs bg-yellow-200 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded-md font-medium">
                            Data Science
                          </span>
                          <span className="text-xs bg-zinc-200 dark:bg-zinc-900/50 text-zinc-800 dark:text-zinc-300 px-2 py-1 rounded-md font-medium">
                            Web Dev
                          </span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-zinc-50 to-amber-50 dark:from-zinc-900/20 dark:to-amber-900/20 rounded-xl p-3.5 border border-zinc-200 dark:border-zinc-800">
                        <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-1">ACHIEVEMENTS</p>
                        <div className="flex items-center gap-2">
                          <Award className="w-4.5 h-4.5 text-amber-500" />
                          <span className="text-sm font-bold text-zinc-900 dark:text-white">
                            {edu.achievements.length}+ Awards
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-xl shadow-sm">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
              Professional Certifications
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                onClick={() => cert.certUrl && setSelectedCert(cert.certUrl)}
                className={`group relative bg-white dark:bg-zinc-800 rounded-2xl p-4 sm:p-5 border-2 border-zinc-200 dark:border-zinc-700 hover:border-orange-400 dark:hover:border-orange-400/80 shadow-md hover:shadow-xl transition-all duration-200 transform-gpu ${
                  cert.certUrl ? "cursor-pointer hover:-translate-y-1" : "cursor-default"
                }`}
              >
                <div className="relative z-10">
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="p-2.5 rounded-xl shadow-sm transition-transform duration-200 group-hover:scale-105"
                      style={{ backgroundColor: `${cert.iconColor}15` }}
                    >
                      <cert.icon className="w-7 h-7" style={{ color: cert.iconColor }} />
                    </div>

                    {cert.certUrl ? (
                      <div className="p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 group-hover:bg-orange-50 dark:group-hover:bg-orange-950/40 transition-colors">
                        <ExternalLink className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-orange-500" />
                      </div>
                    ) : (
                      <span className="text-[11px] bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded-full font-semibold">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Certificate Name */}
                  <h4 className="font-bold text-base text-zinc-900 dark:text-white mb-2 leading-snug group-hover:text-orange-500 transition-colors">
                    {cert.name}
                  </h4>

                  {/* Provider & Date */}
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      by <span className="font-bold" style={{ color: cert.iconColor }}>{cert.provider}</span>
                    </p>
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <Calendar className="w-3 h-3" />
                      {cert.issueDate}
                    </div>
                  </div>

                  {/* Action Indicator */}
                  {cert.certUrl && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-500 pt-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Click to view certificate</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Certificate Modal */}
          {selectedCert && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCert(null)}
            >
              <div
                className="relative max-w-5xl w-full bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors cursor-pointer"
                  aria-label="Close certificate viewer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative w-full h-[80vh] overflow-auto">
                  <iframe src={selectedCert} className="w-full h-full" title="Certificate Viewer" />
                </div>

                <div className="absolute bottom-4 right-4 flex gap-2">
                  <a
                    href={selectedCert}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-colors text-sm shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in New Tab
                  </a>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
