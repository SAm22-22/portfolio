import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";

function Counter({ target, suffix = "", decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1200;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setCount(parseFloat((ease * target).toFixed(decimals)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const { achievements, achievementBadges, certificates } = portfolioData;

  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Achievements ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-primary" />
            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-on-surface-variant">
              Achievements
            </span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight">
            By The{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff5e1a, #fb923c, #fde68a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Numbers.
            </span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl border border-[var(--border-color)] text-center transition-all duration-300 hover:border-primary/25 hover:shadow-[0_0_40px_rgba(255,94,26,0.08)]"
              style={{ background: "var(--card-bg)" }}
            >
              <div className="text-[2.5rem] font-black tracking-tight text-primary font-mono mb-1 leading-none">
                <Counter target={a.numericValue} suffix={a.suffix} decimals={a.value.includes(".") ? 2 : 0} />
              </div>
              <div className="text-xs font-semibold text-on-surface-variant">{a.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Badge pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-20">
          {achievementBadges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-3 px-5 py-4 rounded-xl border border-[var(--border-color)] text-sm font-medium text-on-surface-variant"
              style={{ background: "var(--card-bg)" }}
            >
              <span className="text-base" aria-hidden="true">{b.icon}</span>
              {b.label}
            </motion.div>
          ))}
        </div>

        {/* ── Certificates ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-primary" />
            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-on-surface-variant">
              Certificates
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
              Credentials.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="flex items-start gap-5 p-7 rounded-2xl border border-[var(--border-color)] transition-all duration-300 hover:border-primary/25 hover:shadow-[0_0_40px_rgba(255,94,26,0.08)]"
              style={{ background: "var(--card-bg)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "rgba(255,94,26,0.1)", border: "1px solid rgba(255,94,26,0.25)" }}
                aria-hidden="true"
              >
                {cert.icon}
              </div>
              <div>
                <div className="font-bold text-base mb-1">{cert.name}</div>
                <div className="text-primary font-semibold text-sm mb-1">{cert.issuer}</div>
                <div className="text-xs text-on-surface-variant font-mono mb-3">Issued {cert.date}</div>
                <p className="text-xs text-on-surface-variant leading-relaxed">{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
