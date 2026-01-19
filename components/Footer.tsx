"use client";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Harsh-Upadhyay005", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/harshupadhyay005", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/HarshUpadhyay005", label: "Twitter" },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=uharsh328@gmail.com", label: "Email" },
  ];

  return (
    <footer id="contact" className="bg-white dark:bg-slate-950 border-t border-slate-300 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Portfolio</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Building digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Education", "Experience", "Projects"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Get In Touch</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&to=uharsh328@gmail.com"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8 pb-8 border-b border-slate-300 dark:border-slate-800">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:scale-110 transform"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-slate-600 dark:text-slate-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Harsh Upadhyay
          </p>
          <p className="mt-2">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
