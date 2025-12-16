import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <Background />
      <Navbar />
      <Hero />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}
