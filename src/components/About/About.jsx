import { motion } from "framer-motion";
import { Github, Linkedin, Code2 } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-primary" />
              <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                Narrative
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-10"
            >
              From Curiosity to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ff5e1a, #fb923c, #fde68a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Engineering Excellence.
              </span>
            </motion.h2>

            {/* Social links */}
            <motion.div variants={fadeUp} custom={2} className="flex flex-col gap-3">
              {[
                { href: personalInfo.github, icon: Github, label: "github.com/SAm22-22" },
                { href: personalInfo.linkedin, icon: Linkedin, label: "linkedin.com/in/sameer-shaikh-0a71022b2" },
                { href: personalInfo.leetcode, icon: Code2, label: "LeetCode — 30+ Problems" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-[var(--border-color)] text-on-surface-variant hover:text-on-surface hover:border-primary/30 text-sm font-medium transition-all w-fit"
                  style={{ background: "var(--card-bg)" }}
                >
                  <Icon className="w-4 h-4 text-primary" />
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-5"
          >
            {[
              <>
                My journey in software engineering started with a simple question:{" "}
                <strong className="text-on-surface font-semibold">"How does this work?"</strong> That curiosity led me
                to master the MERN stack, dive deep into AI integrations, and explore the intricacies of
                high-performance backend systems.
              </>,
              <>
                Today, I build products that aren't just functional but are{" "}
                <strong className="text-on-surface font-semibold">engineered with precision</strong>. Whether it's
                optimizing a React render cycle, architecting a scalable Node.js API, or integrating Google Gemini AI
                into a production app — I strive for technical excellence at every layer.
              </>,
              <>
                Pursuing my{" "}
                <strong className="text-on-surface font-semibold">BCA at Tilak Maharashtra Vidyapeeth</strong> (CGPA
                8.74), I complement my academics with real-world projects, open-source contributions, and an internship
                that gave me production-grade experience in web QA and digital media.
              </>,
            ].map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                custom={i}
                className="text-base text-on-surface-variant leading-relaxed"
              >
                {para}
              </motion.p>
            ))}

            {/* Tags */}
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-2 pt-4">
              {["MERN Stack", "REST APIs", "JWT Auth", "Gemini AI", "MongoDB", "PostgreSQL", "React.js", "Next.js"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-semibold font-mono"
                    style={{ background: "rgba(255,94,26,0.1)", color: "#ff5e1a", border: "1px solid rgba(255,94,26,0.25)" }}
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
