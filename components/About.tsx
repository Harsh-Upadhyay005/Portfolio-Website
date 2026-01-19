"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="min-h-screen bg-gray-100 dark:bg-slate-800 py-20 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="inline-block rounded-2xl bg-gradient-to-br from-blue-500 to-purple-900 p-1">
                <div className="relative w-[500px] h-[500px] rounded-xl overflow-hidden bg-slate-800">
                  <Image
                    src="/profile.png"
                    alt="Profile photo"
                    fill
                    sizes="800px"
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                Hello! I&apos;m a passionate developer with a keen eye for design and a love for creating 
                exceptional digital experiences. With expertise in modern web technologies, I bring 
                ideas to life through clean code and intuitive interfaces.
              </p>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I specialize in building responsive, user-friendly applications that not only look 
                great but also deliver outstanding performance. My approach combines technical 
                excellence with creative problem-solving.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4 border border-slate-300 dark:border-slate-700">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">5+</div>
                  <div className="text-slate-600 dark:text-slate-400">Projects Completed</div>
                </div>
                <div className="bg-white/50 dark:bg-slate-900/50 rounded-lg p-4 border border-slate-300 dark:border-slate-700">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">1+</div>
                  <div className="text-slate-600 dark:text-slate-400">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
