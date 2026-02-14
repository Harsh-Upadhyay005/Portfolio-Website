"use client";
import { Boxes } from "@/components/ui/background-boxes";
import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Harsh-Upadhyay005", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/harshupadhyay005", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/HarshUpadhyay005", label: "Twitter" },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=uharsh328@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white dark:bg-slate-900 flex flex-col items-center justify-center transition-colors">
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 text-center px-4 sm:px-6"
      >
        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
          className="mb-6 sm:mb-8"
        >
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 rounded-full bg-linear-to-r from-blue-600 via-purple-600 to-pink-600"
            />
            <div className="absolute inset-0 rounded-full bg-white dark:bg-slate-900 m-[3px]" />
            <Image
              src="/profile.png"
              alt="Harsh Upadhyay"
              fill
              className="rounded-full object-cover relative z-10 p-1"
              priority
              sizes="144px"
            />
            <div className="absolute bottom-1 right-1 z-20 w-5 h-5 bg-green-500 rounded-full border-[3px] border-white dark:border-slate-900">
              <div className="w-full h-full rounded-full bg-green-500 animate-ping opacity-75" />
            </div>
          </div>
        </motion.div>

        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-blue-200 dark:border-blue-800"
        >
          <span className="text-lg">👋</span> Hey there, welcome!
        </motion.div>

        {/* Name with character reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-3 sm:mb-4"
        >
          <span className="bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
            {"Harsh Upadhyay".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.3 + index * 0.05,
                  duration: 0.3
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Enhanced Typing Role with TypeAnimation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5 font-medium h-8 sm:h-9"
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Tech Enthusiast',
              2000,
              'Data Science Student',
              2000,
              'UI/UX Explorer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            repeat={Infinity}
            cursor={true}
            style={{ display: 'inline-block' }}
          />
        </motion.div>

        {/* Description with word-by-word reveal */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto px-4 leading-relaxed"
        >
          {[
            "Passionate", "about", "creating", "beautiful,", "performant", "web", "experiences.",
            "I", "turn", "ideas", "into", "elegant,", "responsive", "applications."
          ].map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                delay: 0.8 + index * 0.08,
                duration: 0.4
              }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4 mb-8"
        >
          <button
            onClick={scrollToAbout}
            className="group px-7 sm:px-8 py-3 text-sm sm:text-base bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
          >
            View My Work
            <ArrowDown className="inline-block w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <a
            href="#contact"
            className="px-7 sm:px-8 py-3 text-sm sm:text-base bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-semibold border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        aria-label="Scroll to about section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Scroll Down</span>
          <ArrowDown className="w-5 h-5 text-slate-400 dark:text-slate-500 animate-bounce" />
        </div>
      </motion.button>
    </section>
  );
}
