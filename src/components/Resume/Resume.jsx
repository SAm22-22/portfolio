import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Printer, CheckCircle2 } from "lucide-react";

export default function Resume() {
  const [downloadState, setDownloadState] = useState("idle"); // idle | downloading | finished

  const handleDownload = () => {
    setDownloadState("downloading");
    setTimeout(() => {
      setDownloadState("finished");
      setTimeout(() => setDownloadState("idle"), 3000);
    }, 1800);
  };

  return (
    <section id="resume" className="py-20 lg:py-28 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-6 h-px bg-primary" />
            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-on-surface-variant">
              Credentials
            </span>
            <span className="w-6 h-px bg-primary" />
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight">
            Curriculum{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff5e1a, #fb923c, #fde68a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Vitae
            </span>
          </h2>
        </motion.div>

        {/* CV Display */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full max-w-[480px] bg-surface-container border border-[var(--border-color)] rounded-2xl overflow-hidden relative shadow-2xl shadow-black/20 group aspect-[1/1.414]"
        >
          <img
            src="/assets/sameer-shaikh-resume.jpg"
            alt="Sameer Shaikh CV Preview"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
          
          {/* Hover overlay button */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <a
              href="/assets/sameer-shaikh-resume.pdf"
              download="Sameer_Shaikh_Resume.pdf"
              onClick={handleDownload}
              className="bg-primary text-black p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center cursor-pointer"
              aria-label="Download CV"
            >
              <Download className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <a
            href="/assets/sameer-shaikh-resume.pdf"
            download="Sameer_Shaikh_Resume.pdf"
            onClick={handleDownload}
            className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-xl font-bold text-sm hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,94,26,0.4)] transition-all duration-200 cursor-pointer"
          >
            {downloadState === "idle" && (
              <>
                <Download className="w-4 h-4" /> Download Resume (PDF)
              </>
            )}
            {downloadState === "downloading" && (
              <>
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Downloading...
              </>
            )}
            {downloadState === "finished" && (
              <>
                <CheckCircle2 className="w-4 h-4 text-black" /> CV Downloaded!
              </>
            )}
          </a>

          <button
            onClick={() => {
              const printWin = window.open("/assets/sameer-shaikh-resume.pdf", "_blank");
              if (printWin) {
                printWin.focus();
              }
            }}
            className="inline-flex items-center gap-2 bg-surface-container border border-[var(--border-color)] text-on-surface px-8 py-4 rounded-xl font-bold text-sm hover:-translate-y-0.5 hover:border-primary/30 transition-all duration-200 cursor-pointer"
          >
            <Printer className="w-4 h-4" /> Print / View CV
          </button>
        </motion.div>
      </div>
    </section>
  );
}
