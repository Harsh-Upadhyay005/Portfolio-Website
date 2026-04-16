"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles, Code2, ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [WheelGesturesPlugin()]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors relative overflow-hidden">
      {/* Background Accents purely for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <div className="max-w-2xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 text-orange-500 font-medium mb-4"
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
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                A collection of robust full-stack applications and interactive front-end experiences.
              </p>
            </motion.div>
          </div>

          {/* Carousel Arrows */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 relative z-10 mt-2"
          >
            <button 
              onClick={scrollPrev}
              className="p-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 text-zinc-600 dark:text-zinc-400 shadow-sm hover:text-orange-500 dark:hover:text-orange-500 hover:border-orange-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/50 active:scale-95"
              aria-label="Previous project"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={scrollNext}
              className="p-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/50 text-zinc-600 dark:text-zinc-400 shadow-sm hover:text-orange-500 dark:hover:text-orange-500 hover:border-orange-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/50 active:scale-95"
              aria-label="Next project"
            >
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Carousel Viewport */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-hidden cursor-grab active:cursor-grabbing pb-12 perspective-1000" 
          ref={emblaRef}
        >
          <div className="flex -ml-4 items-stretch pt-4 transform-style-3d">
            {projects.map((project, index) => {
              const isActive = index === selectedIndex;
              const isPrev = index === (selectedIndex - 1 + projects.length) % projects.length;
              const isNext = index === (selectedIndex + 1) % projects.length;

              // Creative Sweeping Effect values
              let rotationY = 0;
              let zIndex = 1;
              let scale = 0.85;
              let opacity = 0.3;

              if (isActive) {
                rotationY = 0;
                zIndex = 10;
                scale = 1;
                opacity = 1;
              } else if (isPrev) {
                rotationY = 15;
                zIndex = 5;
                scale = 0.9;
                opacity = 0.6;
              } else if (isNext) {
                rotationY = -15;
                zIndex = 5;
                scale = 0.9;
                opacity = 0.6;
              }

              return (
                <div 
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_75%] md:flex-[0_0_60%] lg:flex-[0_0_50%] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{
                    opacity,
                    zIndex,
                    transform: `scale(${scale}) rotateY(${rotationY}deg) translateZ(${isActive ? '50px' : '0px'})`,
                    transformOrigin: 'center center',
                  }}
                >
                  <div className={`h-full flex flex-col gap-6 bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800/50 rounded-3xl p-5 shadow-xl transition-all duration-700 ${isActive ? 'shadow-2xl shadow-orange-500/10 ring-1 ring-orange-500/30' : ''}`}>
                    
                    {/* Image Container */}
                    <div className="w-full relative rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 aspect-video group">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          {project.featured && (
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-400 mb-2">
                              <Sparkles size={14} /> Featured
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="w-full flex flex-col flex-grow py-2">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 line-clamp-1">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-md border border-zinc-200/50 dark:border-zinc-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2.5 py-1 text-[10px] font-medium text-zinc-500">+{project.tags.length - 3}</span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 mt-auto">
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noreferrer"
                          className="group relative overflow-hidden flex items-center justify-center gap-2 text-xs font-bold text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 px-4 py-2.5 rounded-lg shadow-lg flex-1 transition-transform hover:-translate-y-0.5"
                        >
                          <span className="relative z-10">Live Site</span>
                          <ArrowUpRight size={14} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                          <div className="absolute inset-0 bg-orange-500 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 dark:bg-orange-500" />
                        </a>
                        
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center justify-center p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all focus:outline-none"
                          aria-label="Source Code"
                        >
                          <Github size={18} />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === selectedIndex 
                  ? "w-8 h-2.5 bg-orange-500" 
                  : "w-2.5 h-2.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
