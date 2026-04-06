"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles, Code2, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Portfolio Projects Data
const projects = [
  {
    title: "Real-Time chat & Video-Conferencing Platform",
    description: "A comprehensive real-time Communication through chat & video streaming platform. Engineered with WebRTC for low-latency peer-to-peer connections and Socket.io for instantaneous messaging.",
    tags: ["React", "WebRTC", "Socket.io", "Node.js"],
    github: "https://github.com/Harsh-Upadhyay005/WebMeet",
    live: "https://web-meet-liart.vercel.app/",
    image: "/projects/video-conferencing.png", 
    featured: true,
  },
  {
    title: "BharatSetu: Political CRM for Government Offices",
    description: "Production-grade, multi-tenant political CRM for government offices. Every citizen complaint — received, tracked, assigned, escalated, resolved. Zero information loss. Full accountability.",
    tags: ["Next.js", "Express", "PostgreSQL","TypeScript", "Node.js"],
    github: "https://github.com/Harsh-Upadhyay005/P-CRM-Platform",
    live: "https://p-crm-platform.vercel.app/",
    image: "/projects/BharatSetu.png", 
    featured: true,
  },
  {
    title: "Insightful Weather Dashboard",
    description: "An intuitive meteorological dashboard delivering real-time weather tracking, active AQI status, and interactive 3-day forecasting. Designed with a minimal, data-centric interface.",
    tags: ["React", "CSS3", "OpenWeather API", "Chart.js"],
    github: "https://github.com/Harsh-Upadhyay005/Weather-App",
    live: "https://harsh-upadhyay005.github.io/Weather-App/",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2000&auto=format&fit=crop",
    featured: false,
  },
  {
    title: "Simon Says Memory Matrix",
    description: "A highly interactive, progressive memory game emphasizing pattern recognition. Built with vanilla DOM manipulation and rich audiovisual feedback loops.",
    tags: ["JavaScript", "HTML5", "CSS3", "Logic"],
    github: "https://github.com/Harsh-Upadhyay005/SimonSays_",
    live: "https://harsh-upadhyay005.github.io/SimonSays_/",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    featured: false,
  },
];

export default function Projects() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax effect for project images
    const images = gsap.utils.toArray<HTMLElement>('.project-image-wrapper');
    images.forEach((img, i) => {
      gsap.to(img, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, { scope: container });

  return (
    <section ref={container} id="projects" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-orange-500 font-medium mb-4"
          >
            <Code2 size={20} />
            <span className="tracking-wider uppercase text-sm">Selected Work</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Projects</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              A collection of robust full-stack applications and interactive front-end experiences, built with modern web technologies.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 lg:space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Image Container */}
              <div className="w-full lg:w-3/5 group relative rounded-3xl overflow-hidden shadow-2xl bg-zinc-200 dark:bg-zinc-900 border border-black/5 dark:border-white/5">
                <div className="aspect-[4/3] w-full relative overflow-hidden">
                  <div className="project-image-wrapper absolute inset-0 -top-[20%] h-[140%] w-full">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none mix-blend-overlay" />
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                {project.featured && (
                  <div className="flex items-center gap-2 text-sm font-semibold text-orange-500 mb-4">
                    <Sparkles size={16} /> Showcase Project
                  </div>
                )}
                
                <h3 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                  {project.title}
                </h3>
                
                <div className="bg-white dark:bg-zinc-900/50 p-6 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800/50 mb-8 z-10 lg:-ml-12 lg:mr-0 xl:-ml-16 backdrop-blur-sm relative">
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 lg:gap-6 mt-4">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="group relative overflow-hidden flex items-center gap-2 text-sm font-bold text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 px-6 lg:px-8 py-3.5 lg:py-4 rounded-full shadow-lg"
                  >
                    <span className="relative z-10">View Project</span>
                    <ArrowUpRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <div className="absolute inset-0 bg-orange-500 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 dark:bg-orange-500" />
                  </motion.a>
                  
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-sm text-zinc-600 hover:text-orange-500 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors font-medium"
                  >
                    <Github size={20} className="transition-transform duration-300 group-hover:-rotate-12" /> Source Code
                  </motion.a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
