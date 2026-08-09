"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { TiltCard } from "@/components/ui/tilt-card";

// Update the placeholder images/data below to match your actual hackathon experiences
const hackathons = [
  {
    id: 1,
    title: "India Innovates Hackathon",
    date: "March 2026",
    description:
      "Production-grade, multi-tenant political CRM for government offices. Every citizen complaint — received, tracked, assigned, escalated, resolved. Zero information loss. Full accountability.",
    
    images: [
         "/hackathons/Bharat1.jpeg",
         "/hackathons/Bharat2.jpeg",
         "/hackathons/Bharat3.jpeg",
         "/hackathons/Bharat4.jpeg"
    ],
    role: "Team Work",
    tech: ["Next.js", "TypeScript", "Tailwind", "Express", "PostgreSQL"],
  },
//   {
//     id: 2,
//     title: "PW Rift Hackathon",
//     date: "January 2026",
//     description:
//       "Developed a decentralized identity verification system using smart contracts on the Ethereum blockchain.",
//     images: [
//       "../public/hackathons/PWRift1.jpeg",
//     ],
//     role: "Smart Contract Developer",
//     tech: ["Solidity", "React", "Ethers.js"],
//   },
//   {
//     id: 3,
//     title: "University Annual Hackathon",
//     date: "March 2023",
//     description:
//       "Created a real-time collaborative code editor with video chat integrations for remote student teams.",
//     images: [
//       "../public/hackathons/University1.jpeg",
//       "../public/hackathons/University2.jpeg",
//     ],
//     role: "Frontend Engineer",
//     tech: ["React", "WebRTC", "Socket.io", "Node.js"],
//   },
];

export default function Hackathons() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth the scroll progress so the line draws elegantly
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section id="hackathons" className="py-16 sm:py-24 bg-gray-50 dark:bg-zinc-900 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Hackathon Experiences
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-500 dark:text-gray-400">
            Building innovative solutions under pressure. Here is a timeline of my journey through various hackathons.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative space-y-16 lg:space-y-24">
          {/* Vertical Line Base (Background) */}
          <div className="hidden lg:block absolute left-[50%] transform -translate-x-[50%] w-[2px] h-full bg-gray-200 dark:bg-zinc-800" />
          
          {/* Animated Vertical Line Overlay */}
          <motion.div 
            className="hidden lg:block absolute left-[50%] transform -translate-x-[50%] w-[2px] bg-gradient-to-b from-orange-400 to-orange-600 z-0 origin-top shadow-[0_0_15px_rgba(249,115,22,0.6)]"
            style={{ 
              scaleY: smoothProgress,
              height: '100%',
              top: 0
            }} 
          />

          {hackathons.map((hackathon, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={hackathon.id}
                className={`relative flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 border-[4px] border-white dark:border-zinc-900 z-10 shadow-[0_0_15px_rgba(249,115,22,0.8)]"
                />

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`w-full lg:w-1/2 flex flex-col ${
                    isEven ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
                  } text-center lg:text-left`}
                >
                  <span className="text-sm font-semibold tracking-wide text-orange-500 uppercase mb-1">
                    {hackathon.date}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {hackathon.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
                    Role: {hackathon.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {hackathon.description}
                  </p>
                  
                  {/* Tech Stack Pills */}
                  <div className={`flex flex-wrap gap-2 justify-center ${isEven ? "lg:justify-end" : "lg:justify-start"}`}>
                    {hackathon.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* 3D Tilt Card with Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="w-full lg:w-1/2 flex justify-center"
                >
                  <TiltCard
                    images={hackathon.images}
                    className="aspect-video sm:aspect-[4/3] w-full max-w-lg overflow-hidden group cursor-pointer"
                  >
                    {/* Optional: Add hover inner text/overlay for the image here */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-6">
                      <p className="text-white font-bold text-lg drop-shadow-md">
                        {hackathon.title}
                      </p>
                    </div>
                  </TiltCard>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
