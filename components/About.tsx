"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { Code2, Rocket, Heart, Sparkles, Award, Target } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const highlights = [
    { icon: Code2, label: "Clean Code", color: "from-purple-500 to-pink-500" },
    { icon: Rocket, label: "Fast Delivery", color: "from-orange-500 to-red-500" },
    { icon: Heart, label: "Passionate", color: "from-teal-500 to-cyan-500" },
    { icon: Target, label: "Goal-Oriented", color: "from-violet-500 to-purple-500" },
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/30 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-300/20 dark:bg-teal-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-4"
            >
              <div className="bg-gradient-to-r from-purple-600 to-orange-600 p-3 rounded-2xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-orange-600 to-teal-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              About Me
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Crafting digital experiences with passion and precision
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Creative Photo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative mx-auto lg:mx-0 w-full max-w-[500px]"
            >
              <div className="relative">
                {/* Animated Gradient Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-orange-500 via-purple-500 via-teal-500 to-pink-500 p-1 opacity-75"
                >
                  <div className="w-full h-full bg-transparent rounded-[3rem]"></div>
                </motion.div>

                {/* Decorative Corner Elements */}
                <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-60 blur-xl"></div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl opacity-60 blur-xl"></div>
                <div className="absolute top-1/2 -right-6 w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full opacity-60 blur-2xl"></div>
                
                {/* Main Photo Container with Clip Path */}
                <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl p-2">
                  {/* Inner Border Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-orange-500/20 to-teal-500/20 rounded-[2.5rem]"></div>
                  
                  {/* Photo with modern frame */}
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-[2rem] overflow-hidden">
                    <Image
                      src="/profile.png"
                      alt="Harsh Upadhyay - Full Stack Developer"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                      loading="lazy"
                      className="object-cover"
                      priority={false}
                    />
                    
                    {/* Gradient Overlay on bottom */}
                    <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  {/* Modern Name Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-orange-500 rounded-xl blur opacity-75"></div>
                          <div className="relative bg-gradient-to-br from-purple-500 to-orange-500 p-2.5 rounded-xl">
                            <Award className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-white text-lg">Harsh Upadhyay</div>
                          <div className="text-xs text-white/80 font-medium">Full Stack Developer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
            </motion.div>
            
                

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Introduction */}
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-200 dark:border-purple-900 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-3xl">👋</span> Hello There!
                </h3>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  I&apos;m a passionate <span className="font-semibold text-purple-600 dark:text-purple-400">Full Stack Developer</span> with 
                  a keen eye for design and a love for creating exceptional digital experiences. I transform ideas into 
                  reality through <span className="font-semibold text-orange-600 dark:text-orange-400">clean code</span> and 
                  <span className="font-semibold text-teal-600 dark:text-teal-400"> intuitive interfaces</span>.
                </p>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Currently pursuing my <span className="font-semibold">Bachelor&apos;s in Computer Science and Engineering 
                  in Data Science</span>, I specialize in building responsive, user-friendly applications that deliver 
                  outstanding performance and delightful user experiences.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform cursor-pointer group"
                  >
                    <div className={`bg-gradient-to-br ${item.color} p-2.5 rounded-lg inline-block mb-2 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-semibold text-sm text-slate-900 dark:text-white">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 text-center text-white shadow-lg"
                >
                  <div className="text-2xl sm:text-3xl font-bold mb-1">5+</div>
                  <div className="text-xs sm:text-sm opacity-90">Projects</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-4 text-center text-white shadow-lg"
                >
                  <div className="text-2xl sm:text-3xl font-bold mb-1">1+</div>
                  <div className="text-xs sm:text-sm opacity-90">Years Exp</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl p-4 text-center text-white shadow-lg"
                >
                  <div className="text-2xl sm:text-3xl font-bold mb-1">18+</div>
                  <div className="text-xs sm:text-sm opacity-90">Tech Stack</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
