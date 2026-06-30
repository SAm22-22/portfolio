import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

function ProjectLink({ href, children, primary }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold border transition-all duration-200 hover:-translate-y-0.5 ${
        primary
          ? "bg-primary text-black border-transparent hover:shadow-[0_4px_16px_rgba(255,94,26,0.35)]"
          : "border-[var(--border-color)] text-on-surface-variant hover:border-primary/30 hover:text-on-surface"
      }`}
      style={primary ? {} : { background: "var(--bg-alt, var(--bg-color))" }}
    >
      {children}
    </a>
  );
}

function FeaturedProject({ project, reverse }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-2xl border border-[var(--border-color)] overflow-hidden transition-all duration-400 hover:border-primary/25 hover:shadow-[0_0_40px_rgba(255,94,26,0.08)] group"
      style={{ background: "var(--card-bg)" }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Mockup */}
        <div className={`relative overflow-hidden aspect-[16/10] ${reverse ? "lg:order-2" : "lg:order-1"}`}>
          {!imgError ? (
            <img
              src={project.mockup}
              alt={`${project.title} — ${project.subtitle}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
              onError={(e) => { setImgError(true); e.target.src = project.fallbackImg; }}
            />
          ) : (
            <img
              src={project.fallbackImg}
              alt={`${project.title} — ${project.subtitle}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
          )}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(135deg, rgba(255,94,26,0.05), transparent)" }}
          />
        </div>

        {/* Info */}
        <div className={`p-8 lg:p-10 flex flex-col justify-center ${reverse ? "lg:order-1" : "lg:order-2"}`}>
          <div className="text-[0.6875rem] font-bold tracking-[0.1em] text-primary font-mono mb-3">
            Project {project.num} / {project.title}
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-md text-[0.6875rem] font-semibold font-mono"
                style={{ background: "rgba(255,94,26,0.1)", color: "#ff5e1a", border: "1px solid rgba(255,94,26,0.25)" }}
              >
                {t}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
            {project.title} — {project.subtitle}
          </h3>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-5">{project.description}</p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-on-surface-variant">
                <span className="text-primary font-bold text-xs mt-0.5 flex-shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>

          {/* Links */}
          <div className="flex flex-wrap gap-2 pt-5 border-t border-[var(--border-color)]">
            <ProjectLink href={project.demo} primary>
              <ArrowUpRight className="w-3.5 h-3.5" /> Live Demo
            </ProjectLink>
            <ProjectLink href={project.github}>
              <Github className="w-3.5 h-3.5" /> Source Code
            </ProjectLink>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function OtherProjectCard({ project, i }) {
  return (
    <motion.article
      custom={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="relative p-7 rounded-2xl border border-[var(--border-color)] flex flex-col transition-all duration-300 hover:border-primary/25 hover:shadow-[0_0_40px_rgba(255,94,26,0.08)] overflow-hidden group"
      style={{ background: "var(--card-bg)" }}
    >
      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, rgba(255,94,26,0.08), transparent 70%)" }}
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded-md text-[0.6875rem] font-semibold font-mono"
            style={{ background: "rgba(255,94,26,0.1)", color: "#ff5e1a", border: "1px solid rgba(255,94,26,0.25)" }}
          >
            {t}
          </span>
        ))}
      </div>

      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
      <p className="text-sm text-on-surface-variant leading-relaxed flex-1 mb-5">{project.description}</p>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors"
        aria-label={`${project.title} on GitHub`}
      >
        <Github className="w-3.5 h-3.5" /> Code
      </a>
    </motion.article>
  );
}

export default function FeaturedProjects() {
  const { projects, otherProjects } = portfolioData;

  return (
    <section id="projects">
      {/* Featured */}
      <div className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-end justify-between flex-wrap gap-4 mb-16"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-primary" />
                <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                  Case Studies
                </span>
              </div>
              <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight">
                Featured{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #ff5e1a, #fb923c, #fde68a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Projects.
                </span>
              </h2>
            </div>
            <a
              href="https://github.com/SAm22-22"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors"
            >
              Explore Archive <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <FeaturedProject key={project.id} project={project} reverse={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </div>

      {/* Other Projects */}
      <div className="pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-primary" />
              <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                Other Projects
              </span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight">More Work</h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, i) => (
              <OtherProjectCard key={project.title} project={project} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
