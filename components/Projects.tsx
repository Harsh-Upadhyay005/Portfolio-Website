"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration, inventory management, and admin dashboard.",
      image: "🛒",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.demo.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team features.",
      image: "📋",
      technologies: ["React", "Firebase", "Material-UI"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.demo.com",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with 3-day forecasts, aqi, and location-based alerts.",
      image: "🌤️",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      github: "https://github.com/Harsh-Upadhyay005/Weather-App",
      live: "https://harsh-upadhyay005.github.io/Weather-App/",
      featured: false,
    },
    {
      title: "Portfolio Generator",
      description: "SaaS tool for developers to create and customize their portfolio websites.",
      image: "🎨",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/project4",
      live: "https://project4.demo.com",
      featured: false,
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard aggregating data from multiple social media platforms.",
      image: "📊",
      technologies: ["Next.js", "D3.js", "Express"],
      github: "https://github.com/yourusername/project5",
      live: "https://project5.demo.com",
      featured: true,
    },
    {
      title: "Simon Says Game",
      description: "An interactive memory game where players repeat increasingly complex sequences.",
      image: "🎮",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/Harsh-Upadhyay005/SimonSays_",
      live: "https://harsh-upadhyay005.github.io/SimonSays_/",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-100 dark:bg-slate-800 py-20 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-12">
            Showcase of my recent work and side projects
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-blue-500 transition-all hover:scale-105 ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Project Image/Icon */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 h-48 flex items-center justify-center text-8xl">
                  {project.image}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-xs border border-slate-300 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
