import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";

// Lazy load components below the fold
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div></div>
});
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div></div>
});
const Education = dynamic(() => import("@/components/Education"), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div></div>
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div></div>
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="py-8"></div>
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div></div>}>
        <About />
        <Skills />
        <Education />
        <Projects />
        <Footer />
      </Suspense>
      <Analytics />
    </main>
  );
}
