"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

type ProjectCategory = "All" | "Web Apps" | "Games" | "Tools" | "Analytics";

// Projects Data
const projects = [
  {
    title: "Video-Conferencing & Chat Application",
    description: "Real-time video conferencing platform with HD streaming, screen sharing, and instant messaging. Features include virtual backgrounds, recording, and seamless collaboration tools.",
    image: "📹",
    screenshot: "/projects/video-conferencing.png",
    technologies: ["React", "WebRTC", "Socket.io", "TailwindCSS"],
    github: "https://github.com/Harsh-Upadhyay005/WebMeet",
    live: "https://web-meet-liart.vercel.app/",
    gradient: "from-orange-600 to-amber-600",
    bgGradient: "from-orange-500/10 to-amber-500/10",
    category: "Web Apps" as ProjectCategory,
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with 3-day forecasts, AQI monitoring, and location-based alerts. Built for accurate, split-second reporting.",
    image: "🌤️",
    screenshot: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
    github: "https://github.com/Harsh-Upadhyay005/Weather-App",
    live: "https://harsh-upadhyay005.github.io/Weather-App/",
    gradient: "from-zinc-600 to-amber-600",
    bgGradient: "from-zinc-500/10 to-amber-500/10",
    category: "Web Apps" as ProjectCategory,
  },
  {
    title: "Simon Says Game",
    description: "An interactive memory game where players repeat increasingly complex sequences with engaging visuals and sound effects.",
    image: "🎮",
    screenshot: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Harsh-Upadhyay005/SimonSays_",
    live: "https://harsh-upadhyay005.github.io/SimonSays_/",
    gradient: "from-orange-600 to-orange-600",
    bgGradient: "from-orange-500/10 to-orange-500/10",
    category: "Games" as ProjectCategory,
  },
];

const Card = ({ project, i, progress, range, targetScale }: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 pb-[10vh]">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 35}px)` }} 
        className="flex flex-col relative w-full max-w-6xl h-[550px] sm:h-[600px] rounded-[40px] origin-top bg-zinc-900/30 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-600/40 via-zinc-900 to-zinc-900"></div>
        
        <div className="relative z-10 flex flex-col-reverse lg:flex-row h-full gap-8 lg:gap-16">
          
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl sm:text-5xl">{project.image}</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">{project.title}</h3>
              </div>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {project.technologies.map((tech: string, i: number) => (
                  <span key={i} className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white/5 backdrop-blur-md text-zinc-300 rounded-full border border-white/10 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a href={project.live} target="_blank" rel="noreferrer" className="panel-btn flex items-center justify-center gap-2 flex-1 md:flex-none px-6 py-3.5 bg-orange-500/80 hover:bg-orange-500 backdrop-blur-md text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] border border-orange-400/50 hover:scale-105">
                Live Preview <ExternalLink className="w-4 h-4" />
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="panel-btn flex items-center justify-center gap-2 flex-1 md:flex-none px-6 py-3.5 bg-white/5 hover:bg-white/10 backdrop-blur-md text-zinc-100 border border-white/10 rounded-full font-bold transition-all hover:scale-105">
                Github <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-7/12 h-64 lg:h-full relative rounded-3xl overflow-hidden img-panel group cursor-none">
            <motion.div style={{ scale: imageScale }} className="w-full h-full origin-bottom">
              <Image
                src={project.screenshot}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  // GSAP Custom Interactive Cursor
  const cursorRef = useRef(null);
  const cursorTextRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const cursor = cursorRef.current;
      const text = cursorTextRef.current;
      
      const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3", left: "-50%", top: "-50%" });
      const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3", left: "-50%", top: "-50%" });

      window.addEventListener("mousemove", (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
      });

      // Interactive hover states for Buttons
      document.querySelectorAll(".panel-btn").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(cursor, { scale: 0.5, backgroundColor: "rgba(249, 115, 22, 1)", mixBlendMode: "normal", duration: 0.3 });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(cursor, { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.2)", mixBlendMode: "difference", duration: 0.3 });
        });
      });
      
      // Interactive hover states for Project Images
      document.querySelectorAll(".img-panel").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(cursor, { scale: 3.5, backgroundColor: "rgba(249, 115, 22, 0.9)", mixBlendMode: "normal", duration: 0.4 });
          if(text) (text as HTMLElement).innerText = "VIEW";
          gsap.to(text, { opacity: 1, scale: 0.4, duration: 0.2 });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(cursor, { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.2)", mixBlendMode: "difference", duration: 0.4 });
          gsap.to(text, { opacity: 0, scale: 1, duration: 0.2 });
        });
      });

    }, container);
    return () => ctx.revert();
  });

  return (
    <section ref={container} id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 lg:mb-[20vh] bg-transparent">
      
      {/* Custom Global Cursor */}
      <div 
        ref={cursorRef} 
        className="hidden lg:flex fixed top-0 left-0 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full pointer-events-none z-[100] mix-blend-difference items-center justify-center font-bold text-white tracking-widest"
      >
        <span ref={cursorTextRef} className="opacity-0 text-[8px] pointer-events-none drop-shadow-md"></span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-semibold tracking-widest text-zinc-200 uppercase">Featured Work</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tighter text-zinc-100">
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600">Pursuits</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg sm:text-xl font-medium">
            Dive into a selection of my latest projects where robust engineering meets thoughtful design. 
            Scroll to explore the stack.
          </p>
        </motion.div>

        <div className="relative mt-[10vh] max-w-5xl mx-auto">
          {projects.map((project, i) => {
            const targetScale = 1 - ( (projects.length - i) * 0.05);
            return (
              <Card 
                key={i} 
                i={i} 
                project={project} 
                progress={scrollYProgress} 
                range={[i * (1/projects.length), 1]} 
                targetScale={targetScale} 
              />
            )
          })}
        </div>
      </div>
    </section>
  );
}
