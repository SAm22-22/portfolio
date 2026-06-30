import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Code2, Download } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

// Typed text hook
function useTyped(words, speed = 90, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const delay = deleting
      ? 45
      : charIdx === word.length
      ? pause
      : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < word.length) {
        setText(word.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (deleting && charIdx > 0) {
        setText(word.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else if (!deleting && charIdx === word.length) {
        setDeleting(true);
      } else if (deleting && charIdx === 0) {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
}

// Animated counter
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

const TYPED_WORDS = ["Full Stack Developer", "MERN Stack Engineer", "Problem Solver", "BCA Student"];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 14 } },
};

export default function Hero() {
  const { personalInfo, achievements, experience } = portfolioData;
  const typedText = useTyped(TYPED_WORDS);
  const [imgError, setImgError] = useState(false);

  const projectsBuilt = achievements.find(a => a.label.toLowerCase().includes("projects"))?.numericValue || 6;
  const leetcodeCount = achievements.find(a => a.label.toLowerCase().includes("leetcode"))?.numericValue || 30;
  const cgpaVal = parseFloat(personalInfo.cgpa) || 8.74;
  const internDuration = parseFloat(experience[0]?.duration) || 4;

  const STATS_ITEMS = [
    { count: projectsBuilt, suffix: "+", label: "Projects Built", decimals: 0 },
    { count: leetcodeCount, suffix: "+", label: "LeetCode Problems", decimals: 0 },
    { count: cgpaVal, suffix: "", label: "CGPA", decimals: 2 },
    { count: internDuration, suffix: "mo", label: "Internship", decimals: 0 },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,94,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,94,26,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-20 items-center">
          {/* Left */}
          <motion.div variants={stagger} initial="hidden" animate="visible">
            {/* Availability pill */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/6 text-primary text-xs font-semibold mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {personalInfo.availability}
            </motion.div>

            {/* Giant headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2.75rem,8vw,5.5rem)] font-black leading-[1.02] tracking-[-0.035em] mb-6"
            >
              Engineering{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ff5e1a, #fb923c, #fde68a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Scalable
              </span>{" "}
              Digital Solutions.
            </motion.h1>

            {/* Typed sub */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-on-surface-variant leading-relaxed max-w-xl mb-10"
            >
              Hi, I'm <strong className="text-on-surface font-semibold">{personalInfo.name}</strong> —{" "}
              <span className="text-primary font-semibold">{typedText}</span>
              <span className="border-r-2 border-primary ml-0.5 animate-[blink_1s_step-end_infinite]" aria-hidden />
              . Building high-performance MERN Stack applications, RESTful APIs, and AI-integrated systems from Mumbai.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-8 pb-10 mb-10 border-b border-[var(--border-color)]"
            >
              {STATS_ITEMS.map(({ count, suffix, label, decimals }) => (
                <div key={label}>
                  <div className="text-[1.75rem] font-black tracking-tight text-primary leading-none mb-1 font-mono">
                    <Counter target={count} suffix={suffix} decimals={decimals} />
                  </div>
                  <div className="text-[0.6875rem] font-semibold text-on-surface-variant uppercase tracking-widest">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Actions */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-xl font-bold text-sm hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,94,26,0.4)] transition-all duration-200 cursor-pointer"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="/assets/sameer-shaikh-resume.pdf"
                download="Sameer_Shaikh_Resume.pdf"
                className="inline-flex items-center gap-2 bg-surface-container border border-[var(--border-color)] text-on-surface px-6 py-3 rounded-xl font-bold text-sm hover:-translate-y-0.5 hover:border-primary/30 transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-surface-container border border-[var(--border-color)] text-on-surface px-6 py-3 rounded-xl font-bold text-sm hover:-translate-y-0.5 hover:border-primary/30 transition-all duration-200 cursor-pointer"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              {[
                { href: personalInfo.github, icon: Github, label: "GitHub" },
                { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: personalInfo.leetcode, icon: Code2, label: "LeetCode" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary text-sm font-medium transition-colors"
                  aria-label={`Sameer Shaikh on ${label}`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Profile */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            {/* Top badge */}
            <div
              className="absolute top-4 -right-4 z-10 flex items-center gap-2 px-3 py-2 rounded-xl border border-[var(--border-color)] backdrop-blur-sm"
              style={{ background: "var(--card-bg)" }}
              aria-hidden="true"
            >
              <span className="text-lg">🎓</span>
              <div>
                <div className="text-[0.6rem] font-bold uppercase tracking-widest text-on-surface-variant">CGPA</div>
                <div className="text-base font-black text-primary font-mono">8.74</div>
              </div>
            </div>

            {/* Photo frame */}
            <div
              className="rounded-2xl overflow-hidden border border-[var(--border-color)] aspect-[4/5] relative"
              style={{ background: "var(--card-bg)" }}
            >
              {!imgError ? (
                <img
                  src="/assets/images/profile.png"
                  alt="Sameer Shaikh — Full Stack Developer based in Mumbai"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  loading="eager"
                  decoding="async"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-4xl">
                    👨‍💻
                  </div>
                  <p className="font-bold text-lg">Sameer Shaikh</p>
                  <p className="text-sm text-on-surface-variant">Full Stack Developer</p>
                </div>
              )}
              {/* Bottom fade */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                style={{ background: "linear-gradient(to top, var(--bg-color), transparent)" }}
              />
            </div>

            {/* Bottom badge */}
            <div
              className="absolute -bottom-4 left-6 right-6 flex items-center justify-between px-4 py-3 rounded-xl border border-[var(--border-color)] backdrop-blur-sm"
              style={{ background: "var(--card-bg)" }}
              aria-hidden="true"
            >
              <div>
                <div className="text-[0.6rem] font-bold uppercase tracking-widest text-on-surface-variant">Status</div>
                <div className="text-sm font-bold text-on-surface">Available for Hire</div>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.2)]" />
            </div>

            {/* Glow */}
            <div
              className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(255,94,26,0.12), transparent 70%)" }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>

      <style>{`@keyframes blink{50%{opacity:0}}`}</style>
    </section>
  );
}
