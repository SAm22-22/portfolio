import { Github, Linkedin, Code2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-[var(--border-color)] py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copy */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <button
              onClick={() => scrollTo("hero")}
              className="flex items-center gap-2 group focus-visible:outline-none"
              aria-label="Scroll to top"
            >
              <span className="w-7 h-7 bg-primary text-black rounded-md flex items-center justify-center text-[0.6875rem] font-black transition-transform group-hover:rotate-[-5deg]">
                SS
              </span>
              <span className="text-sm font-bold">Sameer Shaikh</span>
            </button>
            <p className="text-xs text-on-surface-variant">
              © {year} Sameer Shaikh. All rights reserved. Engineered for performance.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-on-surface-variant" aria-label="Footer navigation">
            {["hero", "skills", "projects", "education", "experience", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="hover:text-primary transition-colors cursor-pointer capitalize focus-visible:outline-none focus-visible:text-primary"
              >
                {id === "hero" ? "Home" : id}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { href: "https://github.com/SAm22-22", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/sameer-shaikh-0a71022b2", icon: Linkedin, label: "LinkedIn" },
              { href: "https://leetcode.com/u/Sameer541", icon: Code2, label: "LeetCode" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-[var(--border-color)] flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-200"
                style={{ background: "var(--card-bg)" }}
                aria-label={`Sameer Shaikh on ${label}`}
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
