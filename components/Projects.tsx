"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import Gallery3DRing from "./Gallery3DRing";

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
    tags: ["Next.js", "Express", "PostgreSQL", "TypeScript", "Node.js"],
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
  return (
    <section id="projects" className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors relative overflow-hidden">
      {/* Background Accents purely for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1150px] mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-6">
          <div className="max-w-xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 text-orange-500 font-medium mb-2"
            >
              <Code2 size={18} />
              <span className="tracking-wider uppercase text-xs font-bold">Selected Work</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mb-2 tracking-tight">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Projects</span>
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                A collection of full-stack applications and interactive user interfaces.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Gallery 3D Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Gallery3DRing items={projects} />
        </motion.div>
      </div>
    </section>
  );
}
