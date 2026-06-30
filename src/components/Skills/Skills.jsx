import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Skills() {
  const { skills, learningItems } = portfolioData;
  const skillCards = Object.values(skills);

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
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
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight">
            Tools I Build{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff5e1a, #fb923c, #fde68a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Production
            </span>{" "}
            With.
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillCards.map((skill, i) => (
            <motion.div
              key={skill.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="relative p-6 rounded-2xl border overflow-hidden transition-all duration-300 cursor-default group"
              style={{
                background: "var(--card-bg)",
                borderColor: skill.isDashed ? "rgba(255,94,26,0.25)" : "var(--border-color)",
                borderStyle: skill.isDashed ? "dashed" : "solid",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "rgba(255,94,26,0.04)" }}
              />

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ background: "rgba(255,94,26,0.1)", border: "1px solid rgba(255,94,26,0.2)" }}
              >
                {skill.icon}
              </div>

              {/* Category label */}
              <div className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-primary mb-1">
                {skill.label}
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold mb-3 text-on-surface">
                {skill.isDashed ? "In Progress" : skill.label === "Frontend" ? "Client Engineering"
                  : skill.label === "Backend" ? "Server Engineering"
                  : skill.label === "Database" ? "Data Layer"
                  : skill.label === "Languages" ? "Core Languages"
                  : skill.label === "Tools & DevOps" ? "Ecosystem"
                  : skill.label === "AI Integration" ? "Intelligent Systems"
                  : skill.label === "Core CS" ? "Foundations"
                  : "Learning"}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 relative z-10">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded-md text-[0.6875rem] font-semibold font-mono leading-tight"
                    style={{
                      background: "var(--bg-alt, var(--bg-color))",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border-color)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden border-t border-b border-[var(--border-color)] py-5"
        >
          <div
            className="flex gap-12 w-max"
            style={{ animation: "marquee 20s linear infinite" }}
            aria-label="Currently learning"
          >
            {[...learningItems, ...learningItems].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2.5 text-sm font-medium text-on-surface-variant whitespace-nowrap flex-shrink-0"
              >
                <span className="text-primary text-xs">→</span>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
