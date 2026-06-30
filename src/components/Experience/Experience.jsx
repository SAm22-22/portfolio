import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;
  const exp = experience[0];

  return (
    <section id="experience" className="py-24 md:py-32">
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
              Experience
            </span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight">
            Professional{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff5e1a, #fb923c, #fde68a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Experience.
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
            className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle at top left, rgba(255,94,26,0.06), transparent 70%)",
              transform: "translate(-30%, -30%)",
            }}
            aria-hidden="true"
          />

          {/* Header */}
          <div className="flex items-start gap-5 mb-8 flex-wrap">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: "rgba(255,94,26,0.1)", border: "1px solid rgba(255,94,26,0.25)" }}
              aria-hidden="true"
            >
              💼
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-1">{exp.role}</h3>
              <div className="text-primary font-semibold text-base mb-1">{exp.company}</div>
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="px-2.5 py-0.5 rounded-md text-xs font-bold"
                  style={{ background: "rgba(255,94,26,0.1)", color: "#ff5e1a", border: "1px solid rgba(255,94,26,0.25)" }}
                >
                  {exp.duration}
                </span>
                <span className="text-on-surface-variant text-xs">· {exp.location}</span>
              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-4">
            Key Responsibilities
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {exp.responsibilities.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-[var(--border-color)] transition-all duration-200 hover:border-primary/25"
                style={{ background: "var(--bg-alt, var(--bg-color))" }}
              >
                <div
                  className="w-5 h-5 rounded-md flex items-center justify-center text-[0.625rem] font-bold text-primary flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(255,94,26,0.1)", border: "1px solid rgba(255,94,26,0.25)" }}
                  aria-hidden="true"
                >
                  ✓
                </div>
                <div>
                  <strong className="text-sm font-semibold text-on-surface block mb-0.5">{item.title}</strong>
                  <span className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
