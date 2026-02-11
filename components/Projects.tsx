"use client";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Github, Rocket, Star, Code2, ArrowUpRight, Sparkles, Layers, Gamepad2, Palette, BarChart3, ExternalLink, Eye, Play } from "lucide-react";
import Image from "next/image";

type ProjectCategory = "All" | "Web Apps" | "Games" | "Tools" | "Analytics";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories: { name: ProjectCategory; icon: typeof Rocket; color: string }[] = [
    { name: "All", icon: Layers, color: "from-purple-600 to-pink-600" },
    { name: "Web Apps", icon: Code2, color: "from-blue-600 to-cyan-600" },
    { name: "Games", icon: Gamepad2, color: "from-green-600 to-emerald-600" },
    { name: "Tools", icon: Palette, color: "from-orange-600 to-yellow-600" },
    { name: "Analytics", icon: BarChart3, color: "from-violet-600 to-fuchsia-600" },
  ];

  const projects = [
    {
      title: "Video-Conferencing & Chat Application",
      description: "Real-time video conferencing platform with HD streaming, screen sharing, and instant messaging. Features include virtual backgrounds, recording, and seamless collaboration tools.",
      image: "📹",
      screenshot: "/projects/video-conferencing.png",
      technologies: ["React", "WebRTC", "Socket.io", "Tailwind-CSS"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.demo.com",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      featured: true,
      category: "Web Apps" as ProjectCategory,
      size: "large",
    },
    // {
    //   title: "Task Management App",
    //   description: "Collaborative project management tool with real-time updates and team features.",
    //   image: "📋",
    //   screenshot: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    //   technologies: ["React", "Firebase", "Material-UI"],
    //   github: "https://github.com/yourusername/project2",
    //   live: "https://project2.demo.com",
    //   gradient: "from-orange-600 to-yellow-600",
    //   bgGradient: "from-orange-500/10 to-yellow-500/10",
    //   featured: false,
    //   category: "Tools" as ProjectCategory,
    //   size: "medium",
    // },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with 3-day forecasts, aqi, and location-based alerts.",
      image: "🌤️",
      screenshot: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      github: "https://github.com/Harsh-Upadhyay005/Weather-App",
      live: "https://harsh-upadhyay005.github.io/Weather-App/",
      gradient: "from-teal-600 to-emerald-600",
      bgGradient: "from-teal-500/10 to-emerald-500/10",
      featured: false,
      category: "Web Apps" as ProjectCategory,
      size: "medium",
    },
    // {
    //   title: "Portfolio Generator",
    //   description: "SaaS tool for developers to create and customize their portfolio websites.",
    //   image: "🎨",
    //   screenshot: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    //   technologies: ["React", "Node.js", "MongoDB"],
    //   github: "https://github.com/yourusername/project4",
    //   live: "https://project4.demo.com",
    //   gradient: "from-violet-600 to-fuchsia-600",
    //   bgGradient: "from-violet-500/10 to-fuchsia-500/10",
    //   featured: false,
    //   category: "Tools" as ProjectCategory,
    //   size: "medium",
    // },
    
    {
      title: "Simon Says Game",
      description: "An interactive memory game where players repeat increasingly complex sequences.",
      image: "🎮",
      screenshot: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/Harsh-Upadhyay005/SimonSays_",
      live: "https://harsh-upadhyay005.github.io/SimonSays_/",
      gradient: "from-rose-600 to-orange-600",
      bgGradient: "from-rose-500/10 to-orange-500/10",
      featured: false,
      category: "Games" as ProjectCategory,
      size: "medium",
    },
    {
      title: "More Projects Coming Soon......",
      // description: "Analytics dashboard aggregating data from multiple social media platforms.",
      // image: "📊",
      screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      technologies: ["Next.js", "D3.js", "Express"],
      github: "https://github.com/yourusername/project5",
      live: "https://project5.demo.com",
      gradient: "from-emerald-600 to-lime-600",
      bgGradient: "from-emerald-500/10 to-lime-500/10",
      featured: false,
      category: "Analytics" as ProjectCategory,
      size: "medium",
    },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Handle mouse move for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (hoveredIndex !== index) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Floating Gradient Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-400/10 dark:to-pink-400/10 px-4 py-2 rounded-full mb-6 border border-purple-200 dark:border-purple-800"
          >
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Featured Projects</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
              Crafted with
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Passion & Code
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Interactive showcases of my work — hover, click, and explore each project
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.name;
            return (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative px-4 sm:px-6 py-2.5 rounded-2xl font-medium text-sm transition-all duration-300
                  ${isActive 
                    ? 'text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 backdrop-blur-sm'
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid - New Bento Style */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => {
              const isHovered = hoveredIndex === index;
              const isSelected = selectedProject === index;

              return (
                <motion.div
                  key={`${activeCategory}-${project.title}`}
                  layout
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                  }}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onClick={() => setSelectedProject(isSelected ? null : index)}
                  className={`
                    group relative cursor-pointer
                    ${project.featured ? 'md:col-span-2 lg:col-span-3' : ''}
                  `}
                  style={{ 
                    transition: 'transform 0.1s ease-out',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Main Card */}
                  <div 
                    className={`
                      relative h-full min-h-[400px] ${project.featured ? 'lg:min-h-[450px]' : ''}
                      bg-white dark:bg-slate-900 rounded-3xl overflow-hidden 
                      shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50
                      border border-slate-200/50 dark:border-slate-800/50
                      transition-all duration-500
                      ${isHovered ? 'shadow-2xl shadow-purple-500/20 dark:shadow-purple-500/10' : ''}
                    `}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Browser Window Frame */}
                    <div className="relative">
                      {/* Browser Top Bar */}
                      <div className={`
                        absolute top-0 left-0 right-0 z-20 px-4 py-3 
                        bg-gradient-to-b from-slate-100/95 to-slate-100/80 dark:from-slate-800/95 dark:to-slate-800/80
                        backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50
                        flex items-center gap-3
                      `}>
                        {/* Traffic Lights */}
                        <div className="flex items-center gap-1.5">
                          <motion.div 
                            whileHover={{ scale: 1.3 }}
                            className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer"
                          />
                          <motion.div 
                            whileHover={{ scale: 1.3 }}
                            className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer"
                          />
                          <motion.div 
                            whileHover={{ scale: 1.3 }}
                            className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer"
                          />
                        </div>
                        
                        {/* URL Bar */}
                        <div className="flex-1 flex items-center gap-2 bg-white/60 dark:bg-slate-900/60 rounded-lg px-3 py-1.5 max-w-xs">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`} />
                          <span className="text-xs text-slate-500 dark:text-slate-400 truncate font-mono">
                            {project.live.replace('https://web-meet-liart.vercel.app/', '')}
                          </span>
                        </div>

                        {/* Featured Badge */}
                        {project.featured && (
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex items-center gap-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold"
                          >
                            <Star className="w-3 h-3 fill-current" />
                            <span>Featured</span>
                          </motion.div>
                        )}
                      </div>

                      {/* Screenshot Container */}
                      <div className={`relative ${project.featured ? 'h-64 lg:h-72' : 'h-52'} overflow-hidden`}>
                        <motion.div
                          className="absolute inset-0 pt-12"
                          animate={isHovered ? { scale: 1.05, y: -10 } : { scale: 1, y: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                          <Image
                            src={project.screenshot}
                            alt={`${project.title} preview`}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </motion.div>
                        
                        {/* Overlay on hover */}
                        <motion.div 
                          className="absolute inset-0 pt-12 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isHovered ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Quick Action Buttons on Hover */}
                        <motion.div 
                          className="absolute inset-0 pt-12 flex items-center justify-center gap-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.a
                            href={"https://web-meet-liart.vercel.app/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-slate-900 dark:text-white px-5 py-3 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
                          >
                            <Play className="w-4 h-4" fill="currentColor" />
                            <span>Live Demo</span>
                          </motion.a>
                          <motion.a
                            href={"https://github.com/Harsh-Upadhyay005/WebMeet"}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center justify-center w-12 h-12 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all"
                          >
                            <Github className="w-5 h-5 text-slate-900 dark:text-white" />
                          </motion.a>
                        </motion.div>

                        {/* Category Tag */}
                        <motion.div 
                          className={`absolute top-16 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white shadow-lg`}
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                        >
                          {project.category}
                        </motion.div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`relative p-6 ${project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start' : ''}`}>
                      {/* Left Column - Emoji Icon and Title */}
                      <div className="relative">
                        {/* Emoji Icon */}
                        <motion.div 
                          className={`absolute -top-8 left-0 w-16 h-16 flex items-center justify-center bg-gradient-to-br ${project.gradient} rounded-2xl shadow-lg text-3xl`}
                          animate={isHovered ? { y: -5, rotate: [0, -5, 5, 0] } : { y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {project.image}
                        </motion.div>

                        {/* Title & Description */}
                        <div className={`pt-6 ${project.featured ? 'lg:pt-0' : ''}`}>
                          <motion.h3 
                            className={`${project.featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-bold text-slate-900 dark:text-white mb-2`}
                            animate={isHovered ? { x: 5 } : { x: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {project.title}
                          </motion.h3>
                          <p className={`text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 ${project.featured ? 'line-clamp-3' : 'line-clamp-2'}`}>
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Right Column - Tech Stack & Actions */}
                      <div>
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.slice(0, project.featured ? 6 : 4).map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 + i * 0.05 }}
                              className={`
                                px-3 py-1.5 text-xs font-medium rounded-lg
                                bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300
                                border border-slate-200 dark:border-slate-700
                                hover:border-purple-300 dark:hover:border-purple-700
                                transition-colors cursor-default
                              `}
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {project.technologies.length > (project.featured ? 6 : 4) && (
                            <span className="px-3 py-1.5 text-xs font-medium text-slate-400">
                              +{project.technologies.length - (project.featured ? 6 : 4)} more
                            </span>
                          )}
                        </div>

                        {/* Bottom Action Bar */}
                        <motion.div 
                          className="flex items-center justify-between"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                            <Eye className="w-4 h-4" />
                            <span>Click to explore</span>
                          </div>
                          <motion.div 
                            className={`w-8 h-8 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center`}
                            animate={isHovered ? { scale: 1.2, rotate: 45 } : { scale: 1, rotate: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowUpRight className="w-4 h-4 text-white" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Gradient Border Effect */}
                    <motion.div 
                      className={`absolute inset-0 rounded-3xl pointer-events-none`}
                      style={{
                        background: `linear-gradient(135deg, transparent 0%, transparent 100%)`,
                        padding: '2px',
                      }}
                      animate={isHovered ? { 
                        background: `linear-gradient(135deg, ${project.gradient.includes('purple') ? '#9333ea' : project.gradient.includes('orange') ? '#ea580c' : project.gradient.includes('teal') ? '#14b8a6' : project.gradient.includes('violet') ? '#8b5cf6' : project.gradient.includes('emerald') ? '#10b981' : '#f43f5e'} 0%, transparent 50%)` 
                      } : {}}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Glow Effect */}
                  <motion.div 
                    className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 -z-10`}
                    animate={{ opacity: isHovered ? 0.3 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Project Count Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-full px-6 py-3 shadow-lg">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${categories.find(c => c.name === activeCategory)?.color || 'from-purple-600 to-pink-600'} animate-pulse`} />
            <span className="text-slate-600 dark:text-slate-400 text-sm">
              Showing <span className="font-bold text-slate-900 dark:text-white">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Project Modal/Expanded View */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={filteredProjects[selectedProject].screenshot}
                  alt={filteredProjects[selectedProject].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${filteredProjects[selectedProject].gradient} text-white mb-3`}>
                        {filteredProjects[selectedProject].category}
                      </span>
                      <h3 className="text-3xl font-bold text-white mb-2">{filteredProjects[selectedProject].title}</h3>
                      <p className="text-white/80 max-w-lg">{filteredProjects[selectedProject].description}</p>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={filteredProjects[selectedProject].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-xl transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                      <a
                        href={filteredProjects[selectedProject].live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 bg-gradient-to-r ${filteredProjects[selectedProject].gradient} text-white px-4 py-2 rounded-xl transition-colors`}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              {/* Modal Content */}
              <div className="p-8">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {filteredProjects[selectedProject].technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r ${filteredProjects[selectedProject].gradient} bg-opacity-10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
