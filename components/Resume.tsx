"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Download, FileText, Eye } from "lucide-react";

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Replace this with your actual resume file path
  const resumePath = "/resume.pdf";

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

  return (
    <section
      id="resume"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-4"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-xl">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              My Resume
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Download or view my complete professional resume
            </p>
          </div>

          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            {/* Decorative Corner Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 dark:from-blue-600 dark:to-indigo-600 rounded-3xl opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-indigo-400 to-purple-400 dark:from-indigo-600 dark:to-purple-600 rounded-3xl opacity-20 blur-2xl"></div>

            <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-blue-200 dark:border-blue-900 shadow-2xl">
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-t-3xl"></div>

              <div className="flex flex-col items-center text-center">
                {/* Resume Icon Animation */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-8"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-3xl shadow-2xl">
                    <FileText className="w-20 h-20 text-white" />
                  </div>
                </motion.div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Harsh Upadhyay
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                  Full Stack Developer & Data Science Enthusiast
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <motion.button
                    onClick={handleDownload}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <Download className="w-6 h-6 relative z-10" />
                    <span className="relative z-10">Download Resume</span>
                  </motion.button>

                  <motion.button
                    onClick={handleView}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-blue-300 dark:border-blue-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all flex items-center justify-center gap-3"
                  >
                    <Eye className="w-6 h-6" />
                    <span>View Resume</span>
                  </motion.button>
                </div>

                {/* Additional Info */}
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 w-full">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Last updated: January 2026 • PDF Format • 2 pages
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid sm:grid-cols-3 gap-4 mt-8"
          >
            {[
              { title: "Experience", value: "2+ Years", color: "from-blue-500 to-cyan-500" },
              { title: "Projects", value: "15+", color: "from-indigo-500 to-purple-500" },
              { title: "Skills", value: "20+", color: "from-purple-500 to-pink-500" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 text-center"
              >
                <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                  {item.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{item.title}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
