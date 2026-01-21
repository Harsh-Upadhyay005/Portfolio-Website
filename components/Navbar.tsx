"use client";
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Twitter, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Harsh-Upadhyay005", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/harshupadhyay005", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/HarshUpadhyay005", label: "Twitter" },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=uharsh328@gmail.com", label: "Email" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-900/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg" 
          : "bg-slate-900/80 dark:bg-slate-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl sm:text-2xl font-bold text-white dark:text-white hover:text-blue-400 transition-colors"
          >
            Portfolio
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm lg:text-base text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-300" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white dark:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 dark:bg-slate-900/95 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors py-2"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700 dark:border-gray-700">
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
                
                {/* Mobile Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 hover:bg-slate-700/50 dark:hover:bg-slate-700/50 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-slate-300" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
