import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import Achievements from "../../components/Achievements/Achievements";
import Contact from "../../components/Contact/Contact";

export default function Home() {
  useEffect(() => {
    if (window.__scrollToSection) {
      const targetId = window.__scrollToSection;
      window.__scrollToSection = null;
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
      }, 100);
    }
  }, []);
  return (
    <div className="relative">
      {/* Hero */}
      <div style={{ background: "var(--bg-color)" }}>
        <Hero />
      </div>

      {/* About */}
      <div style={{ background: "var(--bg-alt, var(--bg-color))", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <About />
      </div>

      {/* Skills */}
      <div style={{ background: "var(--bg-color)" }}>
        <Skills />
      </div>

      {/* Projects (Featured + Other) */}
      <div style={{ background: "var(--bg-alt, var(--bg-color))", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <FeaturedProjects />
      </div>

      {/* Education — standalone full-width */}
      <div style={{ background: "var(--bg-color)" }}>
        <Education />
      </div>

      {/* Experience — standalone full-width */}
      <div style={{ background: "var(--bg-alt, var(--bg-color))", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <Experience />
      </div>

      {/* Achievements + Certificates */}
      <div style={{ background: "var(--bg-color)" }}>
        <Achievements />
      </div>

      {/* Contact */}
      <div style={{ background: "var(--bg-color)", borderTop: "1px solid var(--border-color)" }}>
        <Contact />
      </div>
    </div>
  );
}
