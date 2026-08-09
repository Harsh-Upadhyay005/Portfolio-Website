"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUpRight, MapPin, Send, Sparkles } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Harsh-Upadhyay005", label: "GitHub", color: "hover:text-white hover:bg-zinc-800" },
    { icon: Linkedin, href: "https://linkedin.com/in/harshupadhyay005", label: "LinkedIn", color: "hover:text-white hover:bg-yellow-600" },
    { icon: Twitter, href: "https://twitter.com/HarshUpadhyay005", label: "Twitter", color: "hover:text-white hover:bg-sky-500" },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=uharsh328@gmail.com", label: "Email", color: "hover:text-white hover:bg-red-500" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Resume", href: "#resume" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <footer id="contact" className="relative bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-yellow-500/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        {/* Top CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center py-16 sm:py-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full mb-6 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-zinc-200">Open for opportunities</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-linear-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Let&apos;s Build Something
            </span>
            <br />
            <span className="bg-linear-to-r from-yellow-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto mb-8 text-sm sm:text-base">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
          <motion.a
            href="https://mail.google.com/mail/?view=cm&to=uharsh328@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-linear-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl shadow-yellow-500/25 transition-all"
          >
            <Send className="w-5 h-5" />
            Get In Touch
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent" />

        {/* Footer Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 py-12"
        >
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3 bg-linear-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Harsh Upadhyay
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Full Stack Developer & Data Science enthusiast building digital experiences that make a difference.
            </p>
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-yellow-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-zinc-400 transition-all shadow-lg shadow-black/20 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-zinc-500 text-xs mt-4">
              uharsh328@gmail.com
            </p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent" />
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-500 text-sm flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse" /> by Harsh Upadhyay
          </p>
          <p className="text-zinc-600 text-xs">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
