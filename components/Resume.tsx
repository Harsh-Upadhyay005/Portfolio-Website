"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Download, FileText, Eye, Briefcase, Award, Code, GraduationCap, Sparkles, ExternalLink } from "lucide-react";

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  // Replace this with your actual resume file path
  const resumePath = "/Resume-final(2) (1).pdf";

  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Harsh_Upadhyay_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // Open resume in new tab
    window.open(resumePath, "_blank");
  };

  const highlights = [
    {
      icon: Briefcase,
      title: "Fresher",
      value: "0 Years",
      description: "Real-world projects",
      color: "from-yellow-500 to-zinc-500",
      bgColor: "from-yellow-500/10 to-zinc-500/10"
    },
    {
      icon: Code,
      title: "Projects",
      value: "5+",
      description: "Completed works",
      color: "from-orange-500 to-orange-500",
      bgColor: "from-orange-500/10 to-orange-500/10"
    },
    {
      icon: Award,
      title: "Skills",
      value: "20+",
      description: "Technologies mastered",
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-500/10 to-amber-500/10"
    },
    {
      icon: GraduationCap,
      title: "Education",
      value: "B.Tech",
      description: "Computer Science",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-500/10 to-orange-500/10"
    }
  ];

  return (
    <section
      id="resume"
      ref={ref}
      className="bg-gradient-to-br from-zinc-50 via-yellow-50 to-orange-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.08),transparent_35%)]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 dark:from-yellow-400/10 dark:to-orange-400/10 px-4 py-2 rounded-full mb-4 border border-yellow-200 dark:border-yellow-800"
            >
              <Sparkles className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
              <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">Professional Resume</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-zinc-900 via-yellow-900 to-zinc-900 dark:from-white dark:via-yellow-200 dark:to-white bg-clip-text text-transparent">
                Download My
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-orange-600 bg-clip-text text-transparent">
                Complete Resume
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
              Get a comprehensive overview of my skills, experience, and achievements
            </p>
          </div>

          {/* Main Resume Card with Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative mb-8"
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-orange-600 to-orange-600 rounded-2xl blur-lg opacity-0"
              animate={{ opacity: isHovered ? 0.3 : 0 }}
              transition={{ duration: 0.5 }}
            />

            <div className="relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 shadow-xl">
              {/* Header Section with Gradient */}
              <div className="relative bg-gradient-to-r from-yellow-600 via-orange-600 to-orange-600 p-6 sm:p-8">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px]" />
                
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-5">
                  {/* Left Side - Icon and Info */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: isHovered ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                      className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl shadow-lg"
                    >
                      <FileText className="w-10 h-10 text-white" />
                    </motion.div>
                    <div className="text-white text-center md:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">
                        Harsh Upadhyay
                      </h3>
                      <p className="text-yellow-100 text-xs sm:text-sm">
                        Full Stack Developer & Data Science Enthusiast
                      </p>
                    </div>
                  </div>

                  {/* Right Side - Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      onClick={handleView}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-5 py-2.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 border border-white/30"
                    >
                      <Eye className="w-5 h-5" />
                      <span>Preview</span>
                      <ExternalLink className="w-4 h-4 opacity-70" />
                    </motion.button>

                    <motion.button
                      onClick={handleDownload}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group bg-white text-yellow-600 px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5 group-hover:animate-bounce" />
                      <span>Download PDF</span>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Content Section - Stats */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {highlights.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="relative group"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity`} />
                        <div className="relative bg-white dark:bg-zinc-800 rounded-2xl p-4 border border-zinc-200 dark:border-zinc-700 text-center hover:border-yellow-300 dark:hover:border-yellow-700 transition-colors">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                            className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} mb-3`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </motion.div>
                          <div className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                            {item.value}
                          </div>
                          <div className="text-[11px] font-semibold text-zinc-900 dark:text-white mb-1">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                            {item.description}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom Info */}
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      Last updated: <span className="font-semibold text-zinc-900 dark:text-white">July 2025</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                    <FileText className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                    <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">PDF Format • 2 Pages</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
