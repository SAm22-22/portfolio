import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Linkedin, Github } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "137232fe-5c49-40fc-91f1-d9e241098a62";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        console.error("Web3Forms submission failed:", result.message);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const INFO = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sameer-shaikh-0a71022b2",
      href: personalInfo.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/SAm22-22",
      href: personalInfo.github,
    },
  ];

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[var(--border-color)] text-on-surface text-sm outline-none transition-all duration-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 placeholder:text-on-surface-variant/50 font-sans";

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-primary" />
              <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                Contact
              </span>
            </div>

            <h2
              className="text-[clamp(2.5rem,6vw,4rem)] font-black tracking-tight leading-[1.04] mb-5"
              style={{ letterSpacing: "-0.035em" }}
            >
              Let's build<br />the next{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ff5e1a, #fb923c, #fde68a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                big thing.
              </span>
            </h2>

            <p className="text-base text-on-surface-variant leading-relaxed mb-8">
              Currently open to full-time roles, internships, freelance projects, and collaborations.
              I respond within 24 hours.
            </p>

            {/* Available for */}
            <div className="mb-10">
              <div className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-3">
                Available For
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.availableFor.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-semibold font-mono"
                    style={{ background: "rgba(255,94,26,0.1)", color: "#ff5e1a", border: "1px solid rgba(255,94,26,0.25)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-0 divide-y divide-[var(--border-color)]">
              {INFO.map(({ icon: Icon, label, value, href }) => {
                const El = href ? "a" : "div";
                return (
                  <El
                    key={label}
                    {...(href ? { href, target: href.startsWith("mailto") ? undefined : "_blank", rel: "noopener noreferrer" } : {})}
                    className={`flex items-center gap-4 py-4 transition-all duration-200 group ${href ? "cursor-pointer hover:pl-1" : ""}`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[var(--border-color)] transition-all duration-200 group-hover:border-primary/30"
                      style={{ background: "var(--card-bg)" }}
                    >
                      <Icon className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-on-surface-variant/60 mb-0.5">
                        {label}
                      </div>
                      <div className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
                        {value}
                      </div>
                    </div>
                  </El>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-[var(--border-color)] p-8 md:p-10"
            style={{ background: "var(--card-bg)" }}
          >
            <div className="mb-7">
              <h3 className="font-bold text-lg mb-1">Send a Message</h3>
              <p className="text-sm text-on-surface-variant">I'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[0.6875rem] font-bold uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="cf-name">
                    Full Name
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    style={{ background: "var(--bg-alt, var(--bg-color))" }}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="block text-[0.6875rem] font-bold uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="cf-email">
                    Email Address
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    style={{ background: "var(--bg-alt, var(--bg-color))" }}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[0.6875rem] font-bold uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="cf-subject">
                  Subject
                </label>
                <input
                  id="cf-subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={inputClass}
                  style={{ background: "var(--bg-alt, var(--bg-color))" }}
                />
              </div>

              <div className="mb-6">
                <label className="block text-[0.6875rem] font-bold uppercase tracking-wider text-on-surface-variant mb-2" htmlFor="cf-message">
                  Message
                </label>
                <textarea
                  id="cf-message"
                  rows={5}
                  required
                  placeholder="Tell me about your project or opportunity…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-y min-h-[120px]`}
                  style={{ background: "var(--bg-alt, var(--bg-color))" }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all duration-200 ${
                  status === "sent"
                    ? "bg-green-500 text-white"
                    : status === "error"
                    ? "bg-red-500 text-white"
                    : "bg-primary text-black hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,94,26,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                }`}
              >
                {status === "idle" && <><Send className="w-4 h-4" /> Send Message</>}
                {status === "sending" && (
                  <>
                    <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    Sending…
                  </>
                )}
                {status === "sent" && "✓ Message Sent!"}
                {status === "error" && "✗ Submission Failed"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
