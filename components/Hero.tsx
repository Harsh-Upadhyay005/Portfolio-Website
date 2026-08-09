"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import gsap from "gsap";
import { Github, Linkedin, Twitter, Mail, Zap } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shapesContainerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Harsh-Upadhyay005", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/harshupadhyay005", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/HarshUpadhyay005", label: "Twitter" },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=uharsh328@gmail.com", label: "Email" },
  ];

  // Advanced GSAP animations for the shapes & background environment
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Organic float animation for structural background shapes
      gsap.to(".gsap-shape", {
        y: "random(-40, 40)",
        x: "random(-40, 40)",
        rotation: "random(-90, 90)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random"
        }
      });

      // 2. Parallax mouse effect for the shapes container layer
      const handleMouseMove = (e: MouseEvent) => {
        if (!shapesContainerRef.current) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 60;
        const y = (e.clientY / window.innerHeight - 0.5) * 60;
        
        gsap.to(shapesContainerRef.current, {
          x: x,
          y: y,
          duration: 1.5,
          ease: "power2.out"
        });
      };

      // 3. Staggered reveal for headline words
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll(".word");
        gsap.fromTo(words, 
          { y: 50, opacity: 0, rotateX: -45 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)", delay: 0.5 }
        );
      }

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[#fafafa] dark:bg-[#0c0c0c] flex flex-col items-center justify-center transition-colors font-sans selection:bg-orange-500/30"
    >
      {/* --- GSAP Animated Abstract Background Elements --- */}
      <div 
        ref={shapesContainerRef} 
        className="absolute inset-0 z-0 pointer-events-none opacity-80 dark:opacity-50"
      >
        {/* Soft Ambient Glows */}
        <div className="gsap-shape absolute top-1/4 left-[10%] w-[22vh] h-[22vh] sm:w-[30vh] sm:h-[30vh] bg-orange-500/10 rounded-full blur-[100px]" />
        <div className="gsap-shape absolute bottom-1/4 right-[6%] w-[28vh] h-[28vh] sm:w-[40vh] sm:h-[40vh] bg-zinc-400/20 dark:bg-zinc-600/20 rounded-full blur-[100px]" />
        <div className="gsap-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36vh] h-[36vh] sm:w-[50vh] sm:h-[50vh] bg-orange-600/5 rounded-full blur-[120px]" />
        
        {/* Floating Geometric Wireframes */}
        <div className="gsap-shape absolute top-[20%] right-[25%] hidden sm:block w-24 h-24 border border-zinc-300 dark:border-zinc-700 rounded-2xl rotate-12 backdrop-blur-sm" />
        <div className="gsap-shape absolute bottom-[25%] left-[20%] hidden sm:block w-32 h-32 border border-orange-500/30 rounded-full backdrop-blur-sm" />
        <div className="gsap-shape absolute top-[60%] right-[12%] w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 rounded-lg shadow-xl rotate-[35deg]" />
        <div className="gsap-shape absolute top-[30%] left-[8%] w-6 h-6 sm:w-8 sm:h-8 bg-orange-500/40 rounded-full" />
      </div>

      {/* Subtle Noise / Grain Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* --- Main Content Container (Framer Motion) --- */}
      <motion.div 
        style={{ y: yOffset, opacity }}
        className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center text-center mt-12 sm:mt-0"
      >
        
        {/* Creative Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group relative inline-flex items-center gap-2 px-4 py-2 mb-8 sm:mb-10 rounded-full bg-black/5 dark:bg-zinc-900/30 border border-black/10 dark:border-white/10 backdrop-blur-xl shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-black/10 dark:hover:bg-zinc-800/40 transition-colors max-w-full"
        >
          
        </motion.div>

        {/* Dynamic Interactive Avatar */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative mb-6 sm:mb-8 cursor-pointer"
        >
          {/* Animated Glow Ring */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-zinc-300 via-orange-400 to-zinc-500 dark:from-zinc-600 dark:via-orange-600 dark:to-zinc-800 rounded-full opacity-60 blur-lg animate-pulse" />
          
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-[4px] border-white dark:border-zinc-950 bg-zinc-100 dark:bg-zinc-900 overflow-hidden shadow-2xl">
            <Image
              src="/frontface.png"
              alt="Harsh Upadhyay"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 128px, 160px"
              priority
            />
          </div>
          
          {/* Floating Element beside avatar */}
          <motion.div 
            animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 -right-4 bg-white/80 dark:bg-zinc-900/30 backdrop-blur-xl p-2 rounded-xl shadow-lg border border-black/10 dark:border-white/10 text-orange-500"
          >
            
          </motion.div>
        </motion.div>

        {/* GSAP Staggered Headline */}
        <h1 
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 tracking-tight leading-[0.95] text-zinc-900 dark:text-zinc-100 antialiased"
          style={{ perspective: "1000px" }}
        >
          <span className="word inline-block mr-2 sm:mr-4">Hey,</span> 
          <span className="word inline-block mr-2 sm:mr-4">I&apos;m</span> 
          <span className="word inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-zinc-500 dark:from-orange-500 dark:via-orange-600 dark:to-zinc-500">Harsh</span>
        </h1>

        {/* Typewriter Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-base sm:text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-400 h-8 sm:h-10 mb-8 max-w-2xl"
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer', 2000,
              'Interactive Designer', 2000,
              'Data Science Enthusiast', 2000,
              'Problem Solver', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block border-b-2 border-orange-500/30 pb-0.5"
          />
        </motion.div>

        {/* Call To Action Buttons (Framer Motion) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, type: "spring" }}
          className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 w-full sm:w-auto max-w-md sm:max-w-none"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="group relative flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-2xl font-bold shadow-xl shadow-zinc-900/20 dark:shadow-zinc-100/10 overflow-hidden"
          >
            <span className="relative z-10">Explore My Work</span>
            <Zap className="relative z-10 w-4 h-4 group-hover:text-orange-400 dark:group-hover:text-orange-600 transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-950 dark:from-zinc-200 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-black/5 dark:bg-zinc-900/40 backdrop-blur-xl border border-black/10 dark:border-white/10 text-zinc-800 dark:text-zinc-200 rounded-2xl font-bold hover:border-orange-500 hover:text-orange-500 dark:hover:border-orange-500 dark:hover:text-orange-400 transition-colors shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.1)] text-center"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links Dock */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 p-2 bg-white/80 dark:bg-zinc-900/30 backdrop-blur-xl rounded-2xl border border-black/10 dark:border-white/10 shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-w-xs sm:max-w-none"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 text-zinc-600 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-500/10 dark:hover:bg-orange-500/20 rounded-xl transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

      </motion.div>

      {/* Unobtrusive Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToAbout}
        className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex-col items-center gap-2 group cursor-pointer"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold group-hover:text-orange-500 transition-colors relative top-2">
          Scroll
        </span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[2px] h-8 bg-gradient-to-b from-zinc-400 dark:from-zinc-600 to-transparent group-hover:from-orange-500 rounded-full"
        />
      </motion.button>
    </section>
  );
}
