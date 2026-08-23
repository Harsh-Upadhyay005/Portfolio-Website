import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroLoader from "@/components/IntroLoader";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Hackathons from "@/components/Hackathons";
import Projects from "@/components/Projects";
import Signature from "@/components/Signature";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-900 transition-colors">
      <IntroLoader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Hackathons />
      <Projects />
      <Signature />
      <Footer />
      <Analytics />
    </main>
  );
}
