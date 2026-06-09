import { useState, useEffect, useRef } from "react";

const CITIES = [
  { label: "BLR", tz: "Asia/Kolkata" },
  { label: "NYC", tz: "America/New_York" },
  { label: "LDN", tz: "Europe/London" },
];

function useCityTimes() {
  const [times, setTimes] = useState([]);
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimes(
        CITIES.map((c) =>
          now.toLocaleTimeString("en-GB", {
            timeZone: c.tz,
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })
        )
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return times;
}

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { tag: "01", title: "Frontend Development", desc: "Crafting pixel-perfect, responsive interfaces with React, Next.js, and modern CSS. Every interaction is intentional — from micro-animations to layout systems that scale.", accent: "#C8A97E" },
  { tag: "02", title: "Backend Engineering", desc: "Building robust APIs and server-side logic with Node.js, Express, and RESTful architecture. Clean, scalable code that holds up under real-world load.", accent: "#8FB3A8" },
  { tag: "03", title: "Database Design", desc: "Structuring data with purpose — PostgreSQL, MongoDB, and Firebase. Schema design, query optimisation, and data modelling that keeps applications fast and reliable.", accent: "#A89BC8" },
  { tag: "04", title: "UI/UX Sensibility", desc: "Understanding that great software feels as good as it works. Translating design systems into living interfaces — with Figma, Tailwind, and an eye for the details users notice.", accent: "#B8C88F" },
];

const PROJECTS = [
  {
    id: "devflow",
    num: "01",
    title: "DevFlow",
    tag: "Full-Stack App",
    year: "2024",
    desc: "A real-time collaborative code review platform. Developers submit pull requests, reviewers annotate live, and AI summarises changes. Built with React, Node.js, WebSockets, and PostgreSQL.",
    tech: ["React", "Node.js", "WebSockets", "PostgreSQL", "OpenAI API"],
    accent: "#C8A97E",
    link: "#",
  },
  {
    id: "storely",
    num: "02",
    title: "Storely",
    tag: "E-commerce Platform",
    year: "2024",
    desc: "End-to-end e-commerce solution for independent creators — product listings, cart, Stripe payments, and a custom dashboard. Next.js on the frontend, Express + MongoDB on the backend.",
    tech: ["Next.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
    accent: "#8FB3A8",
    link: "#",
  },
  {
    id: "pulseboard",
    num: "03",
    title: "PulseBoard",
    tag: "Analytics Dashboard",
    year: "2023",
    desc: "A SaaS analytics dashboard for small businesses — visualising revenue, user retention, and funnel data in real time. Custom chart components, JWT auth, and role-based access.",
    tech: ["React", "D3.js", "Firebase", "Node.js", "Chart.js"],
    accent: "#A89BC8",
    link: "#",
  },
  {
    id: "moodcast",
    num: "04",
    title: "MoodCast",
    tag: "Mobile Web App",
    year: "2023",
    desc: "A daily mood tracking app with journal prompts and weekly insights. Progressive Web App with offline support, local-first storage, and push notifications.",
    tech: ["React", "IndexedDB", "Service Workers", "PWA", "CSS Animations"],
    accent: "#B8C88F",
    link: "#",
  },
];

const STACK = [
  "React", "Next.js", "Node.js", "Express",
  "TypeScript", "PostgreSQL", "MongoDB", "Firebase",
  "Tailwind CSS", "Figma", "Git", "REST APIs",
  "GraphQL", "Docker", "Vercel", "AWS",
];

export default function ShamanthPortfolio() {
  const times = useCityTimes();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={s.root}>
      <style>{css}</style>

      {/* NAV */}
      <nav className="topNav" style={{ ...s.nav, borderBottom: scrolled ? "1px solid #1f1f1f" : "1px solid transparent" }}>
        <div style={s.navBrand}>
          <span style={s.brandIcon}>S</span>
        </div>

        <div className="cityBlock" style={s.cityBlock}>
          {CITIES.map((c, i) => (
            <span key={c.label} style={s.cityItem}>
              <span style={s.cityLabel}>{c.label}</span>
              <span style={s.cityTime}>{times[i] || "——"}</span>
            </span>
          ))}
        </div>

        <button style={s.menuBtn} onClick={() => setMenuOpen(true)}>Menu</button>
      </nav>

      {/* OVERLAY MENU */}
      <div style={{ ...s.overlay, opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "all" : "none" }}>
        <div style={s.overlayTop}>
          <div style={s.menuTitle}>Menu</div>
          <button style={{ ...s.menuBtn, color: "#0A0A0A" }} onClick={() => setMenuOpen(false)}>Close ✕</button>
        </div>
        <nav style={s.overlayNav}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} style={s.overlayLink} onClick={() => setMenuOpen(false)}>
              <span style={s.overlayTag}>•</span>{l.label}
            </a>
          ))}
        </nav>
        <div style={s.overlayBottom}>
          <a href="mailto:shamanthm727@gamail.com" style={s.overlayContact}>emani shamanthm727@gamail.com</a>
          <p style={s.overlayCopy}>© 2024 Shamanth Kumar M</p>
        </div>
      </div>

      {/* HERO */}
      <section ref={heroRef} className="hero" style={s.hero}>
        <div style={s.heroBg} />
        <div style={s.heroGrid} />
        <div style={s.heroContent}>
          <p style={s.heroEyebrow}>
            <span style={s.eyebrowDot} />
            Available for freelance & full-time roles
          </p>
          <h1 style={s.heroTitle}>
            Shamanth<br />
            <span style={s.heroName}>Kumar M</span>
          </h1>
          <p style={s.heroRole}>Web Developer</p>
          <p style={s.heroSub}>
            I build fast, beautiful, and thoughtful web experiences —
            from polished interfaces to solid backend systems.
            Based in Bengaluru, shipping globally.
          </p>
          <div style={s.heroCtas}>
            <a href="#projects" style={s.ctaPrimary}>View Work</a>
            <a href="#contact" style={s.ctaSecondary}>Let's Talk →</a>
          </div>
        </div>
        <div className="heroMeta" style={s.heroMeta}>
          <div style={s.metaItem}>
            <span style={s.metaNum}>3+</span>
            <span style={s.metaLabel}>Years building</span>
          </div>
          <div style={s.metaItem}>
            <span style={s.metaNum}>20+</span>
            <span style={s.metaLabel}>Projects shipped</span>
          </div>
          <div style={s.metaItem}>
            <span style={s.metaNum}>∞</span>
            <span style={s.metaLabel}>Problems solved</span>
          </div>
        </div>
        <div style={s.scrollIndicator}>
          <span className="scroll-pulse" style={s.scrollLine} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={s.about}>
        <div className="aboutInner" style={s.aboutInner}>
          <div style={s.aboutLeft}>
            <span style={s.sectionTag}>About</span>
            <div style={s.avatarBox}>
              <div style={s.avatar}>
                <span style={s.avatarInitials}>SM</span>
              </div>
              <div style={s.avatarMeta}>
                <p style={s.avatarName}>Shamanth Kumar M</p>
                <p style={s.avatarRole}>Web Developer · Bengaluru, IN</p>
              </div>
            </div>
          </div>
          <div style={s.aboutRight}>
            <h2 style={s.aboutHeading}>
              I turn ideas into<br />
              <span style={s.accentText}>digital products</span><br />
              people love.
            </h2>
            <div style={s.aboutBody}>
              <p>
                I'm Shamanth — a full-stack web developer from Bengaluru with a deep curiosity for how the web works and a commitment to making it work better. I care about clean code, thoughtful UX, and shipping things that actually matter.
              </p>
              <p>
                Over the years I've built everything from scrappy side projects to production-grade applications — always with the same drive: understand the problem deeply, design the solution carefully, and execute with precision.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to open source, or sketching out the next thing I want to build.
              </p>
            </div>
            <div style={s.aboutLinks}>
              <a href="https://github.com" target="_blank" rel="noreferrer" style={s.socialLink}>GitHub ↗</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={s.socialLink}>LinkedIn ↗</a>
              <a href="#" style={s.socialLink}>Resume ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={s.skills}>
        <div style={s.skillsHeader}>
          <span style={s.sectionTag}>Expertise</span>
          <p style={s.skillsSub}>The tools and disciplines I bring to every project.</p>
        </div>
        <div style={s.skillsList}>
          {SKILLS.map((sk) => (
            <div
              key={sk.tag}
              className="skillItem"
              style={{
                ...s.skillItem,
                borderTopColor: hoveredSkill === sk.tag ? sk.accent : "#222",
              }}
              onMouseEnter={() => setHoveredSkill(sk.tag)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div style={s.skillLeft}>
                <span style={{ ...s.skillNum, color: sk.accent }}>{sk.tag}</span>
                <h3 style={s.skillTitle}>{sk.title}</h3>
              </div>
              <p style={s.skillDesc}>{sk.desc}</p>
              <span style={{ ...s.skillArrow, color: hoveredSkill === sk.tag ? sk.accent : "#333" }}>→</span>
            </div>
          ))}
        </div>

        <div style={s.marqueeWrap}>
          <div className="marquee-track" style={s.marqueeTrack}>
            {[...STACK, ...STACK].map((t, i) => (
              <span key={i} style={s.marqueeTag}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={s.projects}>
        <div style={s.projectsHeader}>
          <span style={s.sectionTag}>Selected Work</span>
          <h2 style={s.projectsHeading}>Projects that<br /><span style={s.accentText}>define my craft.</span></h2>
        </div>

        <div style={s.projectList}>
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className="projectRow"
              style={{
                ...s.projectRow,
                background: hoveredProject === p.id ? "#111" : "transparent",
                borderTopColor: hoveredProject === p.id ? p.accent : "#1a1a1a",
              }}
              onMouseEnter={() => setHoveredProject(p.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div style={s.projectMeta}>
                <span style={{ ...s.projectNum, color: p.accent }}>{p.num}</span>
                <span style={s.projectYear}>{p.year}</span>
              </div>
              <div style={s.projectInfo}>
                <div style={s.projectTitleRow}>
                  <h3 style={s.projectTitle}>{p.title}</h3>
                  <span style={s.projectTag}>{p.tag}</span>
                </div>
                <p style={s.projectDesc}>{p.desc}</p>
                <div style={s.techStack}>
                  {p.tech.map((t) => (
                    <span key={t} style={{ ...s.techBadge, borderColor: p.accent + "44" }}>{t}</span>
                  ))}
                </div>
              </div>
              <a
                href={p.link}
                style={{ ...s.projectArrow, color: hoveredProject === p.id ? p.accent : "#333" }}
                aria-label={`View ${p.title}`}
              >
                ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={s.contact}>
        <div className="contactInner" style={s.contactInner}>
          <span style={s.sectionTag}>Contact</span>
          <h2 style={s.contactHeading}>
            Have a project in mind?<br />
            <span style={s.accentText}>Let's build it.</span>
          </h2>
          <p style={s.contactSub}>
            I'm open to freelance projects, full-time opportunities, and interesting collaborations.
            If you have something worth building, I'd love to hear from you.
          </p>
          <div style={s.contactActions}>
            <a href="mailto:shamanthm727@gamail.com" style={s.emailLink}>
              emani shamanthm727@gamail.com
            </a>
            <div style={s.contactSocials}>
              <a href="https://github.com" target="_blank" rel="noreferrer" style={s.socialPill}>GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={s.socialPill}>LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" style={s.socialPill}>Twitter</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" style={s.footer}>
        <span style={s.footerLogo}>SK<span style={{ color: "#C8A97E" }}>.</span></span>
        <p style={s.footerName}>Shamanth Kumar M · Web Developer · Bengaluru</p>
        <p style={s.footerCopy}>© 2024 — Built with React</p>
      </footer>
    </div>
  );
}

const s = {
  root: {
    background: "#0A0A0A",
    color: "#F0EDE6",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  nav: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "20px 48px",
    backdropFilter: "blur(16px)",
    background: "rgba(10,10,10,0.88)",
    transition: "border-color 0.3s",
  },
  logo: {
    color: "#F0EDE6", textDecoration: "none",
    fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em",
  },
  logoDot: { color: "#C8A97E" },
  navBrand: { display: "flex", alignItems: "center", gap: "14px" },
  brandIcon: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "#C8A97E",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0A0A0A",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.12em",
  },
  cityBlock: { display: "flex", gap: "28px", alignItems: "center" },
  cityItem: { display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" },
  cityLabel: { fontSize: "9px", letterSpacing: "0.15em", color: "#444", textTransform: "uppercase" },
  cityTime: { fontSize: "11px", fontVariantNumeric: "tabular-nums", color: "#666", fontWeight: 300 },
  menuBtn: {
    background: "none", border: "none", color: "#F0EDE6",
    fontSize: "13px", letterSpacing: "0.1em", cursor: "pointer",
    padding: 0, fontFamily: "inherit",
  },
  overlay: {
    position: "fixed", inset: 0, zIndex: 200,
    background: "#F0EDE6",
    display: "flex", flexDirection: "column",
    padding: "20px 48px 48px",
    transition: "opacity 0.4s ease",
  },
  overlayTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "64px" },
  overlayNav: { display: "flex", flexDirection: "column", gap: "4px", flex: 1 },
  overlayLink: {
    color: "#0A0A0A", textDecoration: "none",
    fontSize: "clamp(32px, 6vw, 60px)",
    fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.15,
    display: "flex", alignItems: "center", gap: "16px",
  },
  overlayTag: { fontSize: "13px", color: "#999", fontWeight: 400 },
  overlayBottom: { marginTop: "40px" },
  overlayContact: { display: "block", color: "#0A0A0A", textDecoration: "none", fontSize: "15px", marginBottom: "8px" },
  overlayCopy: { fontSize: "12px", color: "#999" },
  hero: {
    minHeight: "100vh",
    display: "flex", alignItems: "flex-end",
    position: "relative",
    padding: "0 48px 80px",
    overflow: "hidden",
  },
  heroBg: {
    position: "absolute", inset: 0,
    background: "radial-gradient(ellipse 70% 60% at 70% 30%, rgba(200,169,126,0.09) 0%, transparent 55%)",
    pointerEvents: "none",
  },
  heroGrid: {
    position: "absolute", inset: 0,
    backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
    backgroundSize: "80px 80px",
    pointerEvents: "none",
  },
  heroContent: { position: "relative", zIndex: 1, paddingTop: "140px", flex: 1 },
  heroEyebrow: {
    fontSize: "11px", letterSpacing: "0.18em", color: "#555",
    textTransform: "uppercase", marginBottom: "40px",
    display: "flex", alignItems: "center", gap: "10px",
  },
  eyebrowDot: {
    width: "6px", height: "6px", borderRadius: "50%",
    background: "#4CAF50", display: "inline-block",
    boxShadow: "0 0 8px rgba(76,175,80,0.6)",
    animation: "pulse-dot 2s ease-in-out infinite",
  },
  heroTitle: {
    fontSize: "clamp(56px, 10vw, 120px)",
    fontWeight: 700, lineHeight: 0.95,
    letterSpacing: "-0.04em",
    margin: "0 0 0",
  },
  heroName: { color: "#C8A97E" },
  heroRole: {
    fontSize: "clamp(14px, 2vw, 18px)",
    color: "#555", letterSpacing: "0.2em",
    textTransform: "uppercase", fontWeight: 300,
    margin: "24px 0 24px",
  },
  heroSub: {
    fontSize: "clamp(15px, 1.8vw, 18px)",
    color: "#888", lineHeight: 1.7, fontWeight: 300,
    maxWidth: "480px", marginBottom: "48px",
  },
  heroCtas: { display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" },
  ctaPrimary: {
    background: "#C8A97E", color: "#0A0A0A",
    padding: "15px 36px", textDecoration: "none",
    fontSize: "13px", fontWeight: 700,
    letterSpacing: "0.08em",
  },
  ctaSecondary: {
    color: "#888", textDecoration: "none",
    fontSize: "14px", letterSpacing: "0.05em",
    borderBottom: "1px solid #333", paddingBottom: "2px",
  },
  heroMeta: {
    position: "absolute", bottom: "80px", right: "48px",
    display: "flex", flexDirection: "column", gap: "24px",
    zIndex: 1,
  },
  metaItem: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px" },
  metaNum: { fontSize: "28px", fontWeight: 700, letterSpacing: "-0.04em", color: "#F0EDE6" },
  metaLabel: { fontSize: "10px", color: "#444", letterSpacing: "0.15em", textTransform: "uppercase" },
  scrollIndicator: {
    position: "absolute", bottom: "32px", left: "50%",
    transform: "translateX(-50%)",
  },
  scrollLine: {
    display: "block", width: "1px", height: "48px",
    background: "linear-gradient(to bottom, #C8A97E55, transparent)",
  },
  sectionTag: {
    fontSize: "10px", letterSpacing: "0.22em",
    color: "#555", textTransform: "uppercase",
    display: "block", marginBottom: "32px",
  },
  about: { padding: "120px 48px", borderTop: "1px solid #1a1a1a" },
  aboutInner: {
    maxWidth: "1100px", margin: "0 auto",
    display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px",
  },
  aboutLeft: {},
  avatar: {
    width: "80px", height: "80px", borderRadius: "50%",
    background: "linear-gradient(135deg, #C8A97E, #8FB3A8)",
    display: "flex", alignItems: "center", justifyContent: "center",
    marginBottom: "16px",
  },
  avatarInitials: { fontSize: "24px", fontWeight: 700, color: "#0A0A0A" },
  avatarBox: { display: "flex", alignItems: "center", gap: "16px" },
  avatarMeta: {},
  avatarName: { fontSize: "14px", fontWeight: 600, marginBottom: "4px", color: "#F0EDE6" },
  avatarRole: { fontSize: "12px", color: "#666" },
  aboutRight: {},
  aboutHeading: {
    fontSize: "clamp(32px, 4.5vw, 56px)",
    fontWeight: 700, letterSpacing: "-0.03em",
    margin: "0 0 36px", lineHeight: 1.1,
  },
  accentText: { color: "#C8A97E" },
  aboutBody: {
    display: "flex", flexDirection: "column", gap: "20px",
    fontSize: "16px", lineHeight: 1.75, color: "#888", fontWeight: 300,
    marginBottom: "36px",
  },
  aboutLinks: { display: "flex", gap: "24px" },
  socialLink: {
    color: "#C8A97E", textDecoration: "none",
    fontSize: "13px", letterSpacing: "0.05em",
    borderBottom: "1px solid #C8A97E44", paddingBottom: "2px",
  },
  skills: {
    padding: "120px 48px", borderTop: "1px solid #1a1a1a",
    maxWidth: "1200px", margin: "0 auto",
  },
  skillsHeader: {
    display: "flex", justifyContent: "space-between",
    alignItems: "flex-end", marginBottom: "64px", flexWrap: "wrap", gap: "16px",
  },
  skillsSub: { color: "#555", fontSize: "13px", maxWidth: "260px", lineHeight: 1.6, margin: 0 },
  skillsList: { display: "flex", flexDirection: "column" },
  skillItem: {
    display: "grid", gridTemplateColumns: "260px 1fr 32px",
    gap: "48px", padding: "36px 0", alignItems: "start",
    borderTop: "1px solid", transition: "border-color 0.3s",
    borderBottom: "1px solid #1a1a1a", cursor: "default",
  },
  skillLeft: { display: "flex", flexDirection: "column", gap: "8px" },
  skillNum: { fontSize: "11px", letterSpacing: "0.15em", fontWeight: 500 },
  skillTitle: { fontSize: "20px", fontWeight: 500, margin: 0, letterSpacing: "-0.01em" },
  skillDesc: { color: "#777", fontSize: "14px", lineHeight: 1.75, fontWeight: 300, margin: 0 },
  skillArrow: { fontSize: "20px", transition: "color 0.3s", justifySelf: "end", marginTop: "4px" },
  marqueeWrap: { marginTop: "64px", overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" },
  marqueeTrack: { display: "flex", gap: "12px", animation: "marquee 30s linear infinite", width: "max-content" },
  marqueeTag: {
    padding: "8px 18px", border: "1px solid #222",
    color: "#555", fontSize: "12px", letterSpacing: "0.1em",
    whiteSpace: "nowrap", fontWeight: 400,
  },
  projects: {
    padding: "120px 48px", borderTop: "1px solid #1a1a1a",
    maxWidth: "1200px", margin: "0 auto",
  },
  projectsHeader: { marginBottom: "80px" },
  projectsHeading: {
    fontSize: "clamp(40px, 6vw, 72px)",
    fontWeight: 700, letterSpacing: "-0.04em",
    margin: "0", lineHeight: 1.05,
  },
  projectList: { display: "flex", flexDirection: "column" },
  projectRow: {
    display: "grid", gridTemplateColumns: "80px 1fr 40px",
    gap: "40px", padding: "40px 24px",
    borderTop: "1px solid", borderBottom: "1px solid #1a1a1a",
    transition: "background 0.3s, border-color 0.3s", cursor: "default",
    borderRadius: "2px",
  },
  projectMeta: { display: "flex", flexDirection: "column", gap: "8px", paddingTop: "4px" },
  projectNum: { fontSize: "12px", letterSpacing: "0.12em", fontWeight: 600 },
  projectYear: { fontSize: "11px", color: "#444", letterSpacing: "0.08em" },
  projectInfo: { display: "flex", flexDirection: "column", gap: "12px" },
  projectTitleRow: { display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" },
  projectTitle: { fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 600, margin: 0, letterSpacing: "-0.02em" },
  projectTag: {
    fontSize: "10px", letterSpacing: "0.15em", color: "#555",
    background: "#1a1a1a", padding: "4px 10px", textTransform: "uppercase",
  },
  projectDesc: { color: "#777", fontSize: "14px", lineHeight: 1.75, fontWeight: 300, margin: 0, maxWidth: "600px" },
  techStack: { display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" },
  techBadge: {
    fontSize: "11px", border: "1px solid", padding: "4px 12px",
    color: "#888", letterSpacing: "0.05em",
  },
  projectArrow: {
    fontSize: "24px", textDecoration: "none",
    transition: "color 0.3s", justifySelf: "end",
    alignSelf: "center",
  },
  contact: {
    padding: "160px 48px", borderTop: "1px solid #1a1a1a",
    background: "#080808",
  },
  contactInner: { maxWidth: "700px", margin: "0 auto" },
  contactHeading: {
    fontSize: "clamp(40px, 6vw, 72px)",
    fontWeight: 700, letterSpacing: "-0.04em",
    margin: "0 0 24px", lineHeight: 1.05,
  },
  contactSub: {
    color: "#777", fontSize: "16px", lineHeight: 1.7,
    fontWeight: 300, marginBottom: "56px", maxWidth: "520px",
  },
  contactActions: { display: "flex", flexDirection: "column", gap: "32px" },
  emailLink: {
    color: "#C8A97E", textDecoration: "none",
    fontSize: "clamp(16px, 2.5vw, 24px)", fontWeight: 500,
    letterSpacing: "-0.01em",
    borderBottom: "1px solid #C8A97E55", paddingBottom: "4px",
    alignSelf: "flex-start",
  },
  contactSocials: { display: "flex", gap: "16px" },
  socialPill: {
    border: "1px solid #222", color: "#888",
    padding: "10px 20px", textDecoration: "none",
    fontSize: "12px", letterSpacing: "0.1em",
    transition: "border-color 0.2s, color 0.2s",
  },
  footer: {
    padding: "32px 48px", borderTop: "1px solid #111",
    display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
    alignItems: "center",
  },
  footerLogo: { fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em" },
  footerName: { fontSize: "12px", color: "#444", textAlign: "center" },
  footerCopy: { fontSize: "12px", color: "#333", textAlign: "right" },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #0A0A0A; }

  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.4); }
  }
  .scroll-pulse {
    animation: scrollFade 2s ease-in-out infinite;
  }
  @keyframes scrollFade {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.8; }
  }
  a:hover { opacity: 0.8; }

  @media (max-width: 1024px) {
    section[id] { padding-left: 20px !important; padding-right: 20px !important; }
    .hero { padding: 100px 20px 60px !important; }
  }

  @media (max-width: 768px) {
    nav { padding: 16px 20px !important; flex-wrap: wrap; gap: 14px; }
    .cityBlock { display: none; }
    .heroMeta { position: static !important; flex-direction: row !important; justify-content: space-between !important; width: 100% !important; margin-top: 28px !important; }
    .aboutInner { display: grid !important; grid-template-columns: 1fr !important; gap: 32px !important; }
    .skillItem { grid-template-columns: 1fr !important; gap: 16px !important; }
    .projectRow { grid-template-columns: 1fr !important; gap: 16px !important; padding: 28px 16px !important; }
    .footer { display: flex !important; flex-direction: column !important; gap: 16px !important; text-align: left !important; }
    .contactInner { max-width: 100% !important; }
  }
`;
