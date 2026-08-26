"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  GraduationCap,
  Lightbulb,
  Rocket,
  Code2,
  MapPin,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  Zap,
  ShieldCheck,
  Cpu,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Flame,
  Globe2,
  Terminal
} from "lucide-react";
import { GradientShimmerText } from "./ui/shimmer-text";

export default function About() {
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState<string>("");

  // Live India Time (IST)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("uharsh328@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const highlights = [
    {
      icon: Zap,
      title: "Performance & Scale",
      description: "Optimized bundle sizes, lightning-fast rendering, and sub-second load times.",
      color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Clean Architecture",
      description: "Type-safe APIs, maintainable component patterns, and resilient state management.",
      color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    },
    {
      icon: Cpu,
      title: "Real-Time & AI",
      description: "WebSockets, WebRTC peer-to-peer pipelines, and intelligent data-driven solutions.",
      color: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "15+", detail: "Full-stack & UI experiments" },
    { label: "Hackathons", value: "4+", detail: "Fast-paced building sprints" },
    { label: "Core Tech Stack", value: "10+", detail: "Modern web & data tools" },
    { label: "Clean Code Mindset", value: "100%", detail: "Reliability & maintainability" },
  ];

  const interestTags = [
    "Full-Stack Engineering",
    "System Design",
    "Real-Time WebRTC",
    "Data Science & AI",
    "Interactive UI/UX",
    "Open Source",
    "Cloud & DevOps",
    "Hackathons",
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-gradient-to-b from-zinc-50 via-orange-50/30 to-zinc-50 dark:from-zinc-950 dark:via-zinc-900/60 dark:to-zinc-950 transition-colors relative overflow-hidden contain-paint"
    >
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-[140px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-[140px] pointer-events-none transform-gpu" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[160px] pointer-events-none transform-gpu" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs sm:text-sm font-semibold mb-3 shadow-xs">
            <User className="w-4 h-4" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Turning ambitious ideas into robust, high-performance web applications with{" "}
            <GradientShimmerText gradientFrom="#f97316" gradientTo="#eab308" speed={3}>
              clean code and modern architecture
            </GradientShimmerText>
            .
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* 1. Main Bio & Story Card (8 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 flex flex-col justify-between rounded-3xl bg-white/80 dark:bg-zinc-900/85 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/90 p-6 sm:p-8 md:p-10 shadow-xl dark:shadow-2xl relative overflow-hidden group hover:border-orange-500/40 transition-all duration-300 transform-gpu"
          >
            {/* Ambient inner card glow */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-orange-500/15 via-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-xs uppercase font-bold tracking-widest text-orange-600 dark:text-orange-400">
                  Engineering &amp; Passion
                </span>
              </div>

              {/* Main Headline */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white leading-tight mb-5 tracking-tight">
                I am a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">
                  Full-Stack Developer
                </span>{" "}
                crafting seamless web experiences from database to pixels.
              </h3>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-zinc-600 dark:text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                <p>
                  Specializing in{" "}
                  <strong className="font-semibold text-zinc-900 dark:text-white">
                    TypeScript, React, Next.js, Node.js, Express, and Python
                  </strong>
                  , I bridge the gap between intuitive visual design and scalable backend engineering.
                </p>
                <p>
                  Whether it&apos;s building real-time video conferencing platforms with{" "}
                  <span className="font-medium text-orange-600 dark:text-orange-400">WebRTC &amp; WebSockets</span>, 
                  engineering multi-tenant CRM systems with robust PostgreSQL databases, or training machine learning models, 
                  I focus on writing clean, modular, and reliable code.
                </p>
              </div>
            </div>

            {/* Bottom Value Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-6 mt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 relative z-10">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700/70 text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 shadow-xs hover:border-orange-400 dark:hover:border-orange-500/50 transition-colors">
                <div className="p-1 rounded-full bg-orange-500/20 text-orange-500">
                  <GraduationCap size={14} />
                </div>
                <span>Continuous Learner</span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700/70 text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 shadow-xs hover:border-orange-400 dark:hover:border-orange-500/50 transition-colors">
                <div className="p-1 rounded-full bg-amber-500/20 text-amber-500">
                  <Lightbulb size={14} />
                </div>
                <span>Problem Solver</span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700/70 text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 shadow-xs hover:border-orange-400 dark:hover:border-orange-500/50 transition-colors">
                <div className="p-1 rounded-full bg-orange-500/20 text-orange-500">
                  <Rocket size={14} />
                </div>
                <span>Rapid Prototyping</span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700/70 text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 shadow-xs hover:border-orange-400 dark:hover:border-orange-500/50 transition-colors">
                <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-500">
                  <Code2 size={14} />
                </div>
                <span>Clean Architecture</span>
              </div>
            </div>
          </motion.div>

          {/* 2. "AT A GLANCE" Quick Facts & Live Status Card (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col justify-between rounded-3xl bg-white/80 dark:bg-zinc-900/85 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/90 p-6 sm:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden group hover:border-orange-500/40 transition-all duration-300 transform-gpu"
          >
            {/* Ambient corner glow */}
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
                <h3 className="text-xs uppercase font-bold tracking-widest text-zinc-500 dark:text-zinc-400">
                  AT A GLANCE
                </h3>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Active
                </div>
              </div>

              {/* Status Items List */}
              <div className="space-y-4">
                
                {/* Row 1: ROLE */}
                <div className="flex items-center gap-3.5 p-2 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/20 text-orange-600 dark:text-orange-400 shrink-0">
                    <Code2 size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500 dark:text-zinc-400">
                      ROLE
                    </span>
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">
                      Full-Stack Developer
                    </span>
                  </div>
                </div>

                {/* Row 2: EDUCATION */}
                <div className="flex items-center gap-3.5 p-2 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500 dark:text-zinc-400">
                      EDUCATION
                    </span>
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">
                      B.Tech, CSE Data Science
                    </span>
                    <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                      RKGIT · 2024–2028
                    </span>
                  </div>
                </div>

                {/* Row 3: BASED IN */}
                <div className="flex items-center gap-3.5 p-2 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/20 text-orange-600 dark:text-orange-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="flex-1">
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500 dark:text-zinc-400">
                      LOCATION
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-zinc-900 dark:text-white">
                        India 🇮🇳
                      </span>
                      {localTime && (
                        <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                          <Clock size={11} className="text-orange-500" />
                          <span>{localTime}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Row 4: STATUS */}
                <div className="flex items-center gap-3.5 p-2 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-zinc-500 dark:text-zinc-400">
                      STATUS
                    </span>
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">
                      Open to Opportunities
                    </span>
                    <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                      Internships, Roles &amp; Projects
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Micro Terminal line at bottom */}
            <div className="mt-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 relative z-10">
              <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/60 px-3 py-2 rounded-xl">
                <Terminal size={13} className="text-orange-500 shrink-0" />
                <span className="truncate">git commit -m &quot;building the future&quot;</span>
              </div>
            </div>
          </motion.div>

          {/* 3. Numerical Stats & Impact Cards (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 rounded-3xl bg-white/80 dark:bg-zinc-900/85 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/90 p-6 sm:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden group hover:border-orange-500/40 transition-all duration-300 transform-gpu flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500">
                  <Flame size={18} />
                </div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-zinc-500 dark:text-zinc-400">
                  METRICS &amp; IMPACT
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/70 dark:border-zinc-700/60 hover:border-orange-400/60 transition-colors"
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-zinc-900 dark:text-white mb-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                      {stat.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
              Driven by curiosity, consistent iteration, and practical execution.
            </p>
          </motion.div>

          {/* 4. Engineering Pillars & Highlights (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 rounded-3xl bg-white/80 dark:bg-zinc-900/85 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/90 p-6 sm:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden group hover:border-orange-500/40 transition-all duration-300 transform-gpu flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                  <Layers size={18} />
                </div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-zinc-500 dark:text-zinc-400">
                  CORE PILLARS
                </h3>
              </div>

              <div className="space-y-3.5">
                {highlights.map((item, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/70 dark:border-zinc-700/60 hover:border-orange-400/60 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className={`p-1.5 rounded-lg border ${item.color}`}>
                        <item.icon size={15} />
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-8">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 5. Interests & Focus Matrix (4 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-4 rounded-3xl bg-white/80 dark:bg-zinc-900/85 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800/90 p-6 sm:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden group hover:border-orange-500/40 transition-all duration-300 transform-gpu flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500">
                  <Globe2 size={18} />
                </div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-zinc-500 dark:text-zinc-400">
                  AREAS OF FOCUS
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {interestTags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold border border-zinc-200/80 dark:border-zinc-700/80 hover:border-orange-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
              <span>Always open to new tech</span>
              <Sparkles size={14} className="text-amber-500" />
            </div>
          </motion.div>

          {/* 6. Collaboration & Connect Banner (12 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-12 rounded-3xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-600/10 dark:from-orange-500/10 dark:via-zinc-900/90 dark:to-amber-500/10 backdrop-blur-xl border border-orange-300/60 dark:border-orange-500/30 p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group"
          >
            <div className="relative z-10 max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-700 dark:text-orange-300 text-xs font-bold mb-2">
                <Sparkles size={13} />
                <span>LET&apos;S COLLABORATE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                Have a project or opportunity in mind?
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                I am actively seeking software engineering internships, developer roles, and exciting freelance collaborations.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 relative z-10 w-full md:w-auto">
              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs sm:text-sm font-bold border border-zinc-200 dark:border-zinc-700 shadow-md hover:border-orange-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-750 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="text-orange-500" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              {/* Direct Mail Button */}
              <a
                href="https://mail.google.com/mail/?view=cm&to=uharsh328@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Mail size={16} />
                <span>Send a Message</span>
                <ExternalLink size={14} className="opacity-70" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
