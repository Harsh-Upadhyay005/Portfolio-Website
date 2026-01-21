"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github, Rocket, Star, Code2, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance.",
      image: "🛒",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.demo.com",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team features.",
      image: "📋",
      technologies: ["React", "Firebase", "Material-UI"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.demo.com",
      gradient: "from-orange-600 to-yellow-600",
      bgGradient: "from-orange-500/10 to-yellow-500/10",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with 3-day forecasts, aqi, and location-based alerts.",
      image: "🌤️",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      github: "https://github.com/Harsh-Upadhyay005/Weather-App",
      live: "https://harsh-upadhyay005.github.io/Weather-App/",
      gradient: "from-teal-600 to-emerald-600",
      bgGradient: "from-teal-500/10 to-emerald-500/10",
      featured: false,
    },
    {
      title: "Portfolio Generator",
      description: "SaaS tool for developers to create and customize their portfolio websites.",
      image: "🎨",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/project4",
      live: "https://project4.demo.com",
      gradient: "from-violet-600 to-fuchsia-600",
      bgGradient: "from-violet-500/10 to-fuchsia-500/10",
      featured: false,
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard aggregating data from multiple social media platforms.",
      image: "📊",
      technologies: ["Next.js", "D3.js", "Express"],
      github: "https://github.com/yourusername/project5",
      live: "https://project5.demo.com",
      gradient: "from-emerald-600 to-lime-600",
      bgGradient: "from-emerald-500/10 to-lime-500/10",
      featured: false,
    },
    {
      title: "Simon Says Game",
      description: "An interactive memory game where players repeat increasingly complex sequences.",
      image: "🎮",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/Harsh-Upadhyay005/SimonSays_",
      live: "https://harsh-upadhyay005.github.io/SimonSays_/",
      gradient: "from-rose-600 to-orange-600",
      bgGradient: "from-rose-500/10 to-orange-500/10",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-full blur-3xl opacity-20"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-gradient-to-br from-orange-400 to-yellow-400 dark:from-orange-600 dark:to-yellow-600 rounded-full blur-3xl opacity-20"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-600 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gradient-to-r from-purple-600 to-orange-600 p-4 rounded-3xl">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              My Creative Work
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore my collection of projects that showcase innovation, creativity, and technical excellence
          </p>
        </motion.div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`group relative ${project.featured ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              {/* Card Container */}
              <div className="relative h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800">
                
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Top Section with Icon */}
                <div className="relative p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4">
                    {/* Icon Circle */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`relative bg-gradient-to-br ${project.gradient} p-4 rounded-2xl shadow-lg`}
                    >
                      <span className="text-4xl">{project.image}</span>
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-md opacity-50`}></div>
                    </motion.div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                        className="flex items-center gap-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
                      >
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>Featured</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className={`text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="group/tech relative overflow-hidden bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all"
                      >
                        <span className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover/tech:opacity-10 transition-opacity`}></span>
                        <span className="relative">{tech}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn relative overflow-hidden bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-5 py-3 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg"
                    >
                      <span className="relative flex items-center justify-center gap-2">
                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                        <span className="text-sm">View Code</span>
                      </span>
                    </a>
                    
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 group/btn relative overflow-hidden bg-gradient-to-r ${project.gradient} text-white px-5 py-3 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-xl`}
                    >
                      <span className="relative flex items-center justify-center gap-2">
                        <span className="text-sm">Live Demo</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </span>
                    </a>
                  </div>
                </div>

                {/* Bottom Decorative Gradient Line */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Projects", value: "6+", gradient: "from-purple-600 to-pink-600" },
            { label: "Technologies", value: "15+", gradient: "from-orange-600 to-yellow-600" },
            { label: "Live Sites", value: "100%", gradient: "from-teal-600 to-emerald-600" },
            { label: "Open Source", value: "Active", gradient: "from-violet-600 to-fuchsia-600" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
