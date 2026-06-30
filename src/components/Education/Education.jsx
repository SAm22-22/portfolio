import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-primary" />
            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-on-surface-variant">
              Education
            </span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight">
            Academic{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff5e1a, #fb923c, #fde68a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Foundation.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl border border-[var(--border-color)] p-10 md:p-14 overflow-hidden transition-all duration-300 hover:border-primary/25 hover:shadow-[0_0_40px_rgba(255,94,26,0.08)]"
          style={{ background: "var(--card-bg)" }}
        >
          {/* Decorative glow */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle at top right, rgba(255,94,26,0.07), transparent 70%)",
              transform: "translate(30%, -30%)",
            }}
            aria-hidden="true"
          />

          {/* Header */}
          <div className="flex items-start justify-between gap-4 flex-wrap mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.1em] text-primary mb-2">
                {education.degree}
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-1">{education.shortDegree} — Full-Time Degree</h3>
              <p className="text-on-surface-variant text-sm">{education.institution} · {education.location}</p>
            </div>
            <span
              className="px-3.5 py-1.5 rounded-lg text-sm font-bold flex-shrink-0"
              style={{ background: "rgba(255,94,26,0.1)", color: "#ff5e1a", border: "1px solid rgba(255,94,26,0.25)" }}
            >
              {education.duration}
            </span>
          </div>

          {/* CGPA */}
          <div
            className="inline-flex items-center gap-4 px-5 py-4 rounded-xl mb-8 border border-[var(--border-color)]"
            style={{ background: "var(--bg-alt, var(--bg-color))" }}
          >
            <span className="text-2xl" aria-hidden="true">⭐</span>
            <div>
              <div className="text-[0.6875rem] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                Cumulative CGPA (Sem I–V)
              </div>
              <div className="text-3xl font-black text-primary font-mono tracking-tight">{education.cgpa}</div>
            </div>
            <div className="w-px h-10 border-l border-[var(--border-color)]" />
            <div>
              <div className="text-[0.6875rem] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                Expected Graduation
              </div>
              <div className="text-xl font-black text-on-surface font-mono">2026</div>
            </div>
          </div>

          {/* Coursework */}
          <div>
            <div className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-4">
              Relevant Coursework
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {education.coursework.map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] text-sm text-on-surface-variant font-medium"
                  style={{ background: "var(--bg-alt, var(--bg-color))" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                  {course}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
