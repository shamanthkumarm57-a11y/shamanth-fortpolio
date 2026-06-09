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
  { tag: "02", title: "CMS Development", desc: "Building fast, secure, and easy-to-manage webflow and WordPress sites — custom themes, plugins, WooCommerce stores, page builders, and performance tuning for real business results.", accent: "#8FB3A8" },
  { tag: "03", title: "SEO", desc: "Improving search visibility with technical SEO, on-page optimisation, keyword research, site speed fixes, schema markup, and content structure that helps pages rank and convert.", accent: "#B8C88F" },
  { tag: "04", title: "Digital Marketing", desc: "Growing brands online through content strategy, social media, paid campaigns, email funnels, analytics, and conversion-focused landing pages that turn traffic into leads.", accent: "#C8A97E" },
  { tag: "05", title: "Backend Engineering", desc: "Building robust APIs and server-side logic with Node.js, Express, and RESTful architecture. Clean, scalable code that holds up under real-world load.", accent: "#8FB3A8" },
  { tag: "06", title: "Database Design", desc: "Structuring data with purpose — PostgreSQL, MongoDB, and Firebase. Schema design, query optimisation, and data modelling that keeps applications fast and reliable.", accent: "#A89BC8" },
  { tag: "07", title: "UI/UX Sensibility", desc: "Understanding that great software feels as good as it works. Translating design systems into living interfaces — with Figma, Tailwind, and an eye for the details users notice.", accent: "#B8C88F" },
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
  "React", "Next.js", "WordPress", "Webflow",
  "SEO", "Digital Marketing", "Google Analytics", "Google Search Console",
  "Meta Ads", "Content Strategy", "Email Marketing", "WooCommerce",
  "Node.js", "Express", "TypeScript", "Tailwind CSS", "Python", "Django","wordpress",
  "Figma", "PostgreSQL", "MongoDB", "Vercel","webflow",
];

const GITHUB_URL = "https://github.com/shamanthkumarm57-a11y";
const LINKEDIN_URL = "https://www.linkedin.com/in/shamanth-kumar-m-04269724b";
const RESUME_URL = `${import.meta.env.BASE_URL}Shamanth-Resume.pdf`;
const EMAIL = "shamanthm727@gmail.com";

const HERO_FLOATS = [
  { top: "14%", left: "54%", w: 148, h: 96, rot: -10, delay: 0, lines: ["<Portfolio />", "React · Vite"] },
  { top: "8%", left: "72%", w: 128, h: 82, rot: 8, delay: 1.2, lines: ["{ build() }", "Node.js"] },
  { top: "28%", left: "66%", w: 118, h: 74, rot: -4, delay: 2.4, lines: ["npm run dev", "localhost"] },
  { top: "20%", left: "84%", w: 108, h: 68, rot: 12, delay: 0.8, lines: ["git push", "deploy ✓"] },
];

const CONTAINER = { maxWidth: "1100px", margin: "0 auto", width: "100%" };

function Container({ children, style }) {
  return <div style={{ ...CONTAINER, ...style }}>{children}</div>;
}

function Btn({ children, href, onClick, target, rel, light = false, normalCase = false, className = "", style }) {
  const cls = `site-btn${light ? " site-btn--light" : ""}${normalCase ? " site-btn--normal" : ""} ${className}`.trim();
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cls} style={style} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} style={style} onClick={onClick}>
      {children}
    </button>
  );
}

function useHeroParallax(containerRef) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      setOffset({
        x: (e.clientX - rect.left) / rect.width * 28 - 14,
        y: (e.clientY - rect.top) / rect.height * 18 - 9,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [containerRef]);
  return offset;
}

function HeroSketch() {
  return (
    <svg className="hero-sketch" viewBox="0 0 520 360" fill="none" aria-hidden="true">
      <path className="hero-draw" style={{ animationDelay: "0.2s" }} d="M60 280 H460" stroke="rgba(240,237,230,0.18)" strokeWidth="1.2" />
      <path className="hero-draw" style={{ animationDelay: "0.5s" }} d="M120 280 V120 H400 V280" stroke="rgba(240,237,230,0.35)" strokeWidth="1.5" />
      <path className="hero-draw" style={{ animationDelay: "0.8s" }} d="M120 120 H400 L420 140 H400" stroke="rgba(240,237,230,0.35)" strokeWidth="1.5" />
      <path className="hero-draw" style={{ animationDelay: "1.1s" }} d="M150 155 H370 M150 185 H320 M150 215 H350 M150 245 H290" stroke="rgba(200,169,126,0.45)" strokeWidth="1.2" />
      <path className="hero-draw" style={{ animationDelay: "1.4s" }} d="M80 80 C120 40, 180 30, 240 50 C300 70, 360 45, 420 70" stroke="rgba(240,237,230,0.2)" strokeWidth="1" />
      <circle className="hero-draw" style={{ animationDelay: "2s" }} cx="430" cy="95" r="28" stroke="rgba(240,237,230,0.25)" strokeWidth="1.2" />
      <text x="168" y="108" fill="rgba(240,237,230,0.2)" fontSize="11" letterSpacing="4" fontFamily="Inter, sans-serif">WEB DEV</text>
    </svg>
  );
}

function ResumeModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="resume-backdrop" style={s.resumeBackdrop} onClick={onClose}>
      <div className="resume-modal" style={s.resumeModal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Resume">
        <div style={s.resumeModalTop}>
          <span style={s.resumeModalTitle}>Shamanth Kumar M — Resume</span>
          <div style={s.resumeModalActions}>
            <Btn href={RESUME_URL} target="_blank" rel="noreferrer">Download PDF</Btn>
            <Btn onClick={onClose}>Close</Btn>
          </div>
        </div>
        <iframe title="Resume" src={`${RESUME_URL}#toolbar=0&navpanes=0`} style={s.resumeFrame} />
      </div>
    </div>
  );
}

function Reveal({ children, delay = 0, style, className = "", variant = "up" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: isMobile ? 0.06 : 0.12, rootMargin: isMobile ? "0px 0px -16px 0px" : "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal reveal-${variant}${visible ? " revealed" : ""} ${className}`.trim()} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

export default function ShamanthPortfolio() {
  const times = useCityTimes();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [heroReady, setHeroReady] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const heroRef = useRef(null);
  const parallax = useHeroParallax(heroRef);

  const openResume = () => { setMenuOpen(false); setResumeOpen(true); };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setHeroReady(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={s.root}>
      <style>{css}</style>

      <nav className="topNav page-pad" style={{ ...s.nav, borderBottom: scrolled ? "1px solid #1f1f1f" : "1px solid transparent" }}>
        <Container style={s.navInner}>
          <div style={s.navBrand}><span style={s.brandIcon}>S</span></div>
          <div className="cityBlock" style={s.cityBlock}>
            {CITIES.map((c, i) => (
              <span key={c.label} style={s.cityItem}>
                <span style={s.cityLabel}>{c.label}</span>
                <span style={s.cityTime}>{times[i] || "——"}</span>
              </span>
            ))}
          </div>
          <button style={s.menuBtn} onClick={() => setMenuOpen(true)}>Menu</button>
        </Container>
      </nav>

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
          <p style={s.overlayEmail}>{EMAIL}</p>
          <div style={s.btnRow}>
            <Btn href={GITHUB_URL} target="_blank" rel="noreferrer" light>GitHub</Btn>
            <Btn href={LINKEDIN_URL} target="_blank" rel="noreferrer" light>LinkedIn</Btn>
            <Btn onClick={openResume} light>Resume</Btn>
          </div>
          <p style={s.overlayCopy}>© 2024 Shamanth Kumar M</p>
        </div>
      </div>

      <section ref={heroRef} className={`hero page-pad${heroReady ? " hero-ready" : ""}`} style={s.hero}>
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div style={s.heroBg} />
        <div className="hero-grid-anim" style={s.heroGrid} />
        <div className="hero-float-layer" style={{ transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)` }}>
          {HERO_FLOATS.map((card, i) => (
            <div key={i} className="hero-float-card" style={{ top: card.top, left: card.left, width: card.w, height: card.h, "--rot": `${card.rot}deg`, "--float-delay": `${card.delay}s` }}>
              <div className="hero-float-dots"><span /><span /><span /></div>
              {card.lines.map((line) => <p key={line} className="hero-float-line">{line}</p>)}
            </div>
          ))}
        </div>
        <div className="hero-sketch-wrap" style={{ transform: `translate3d(${parallax.x * -0.4}px, calc(-50% + ${parallax.y * -0.3}px), 0)` }}>
          <HeroSketch />
        </div>
        <Container style={s.heroLayout}>
          <div className="hero-inner" style={s.heroInner}>
            <div style={s.heroContent}>
              <p className="hero-enter" style={{ ...s.heroEyebrow, animationDelay: "0.15s" }}>
                <span style={s.eyebrowDot} /> Available for freelance & full-time roles
              </p>
              <h1 style={s.heroTitle}>
                <span className="hero-enter hero-title-line" style={{ animationDelay: "0.3s" }}>Shamanth</span>
                <span className="hero-enter hero-title-line hero-name-wrap" style={{ animationDelay: "0.5s" }}>
                  <span style={s.heroName}>Kumar M</span>
                  <span className="hero-sweep" aria-hidden="true" />
                </span>
              </h1>
              <p className="hero-enter" style={{ ...s.heroRole, animationDelay: "0.7s" }}>Web Developer · SEO · Digital Marketing</p>
              <p className="hero-enter hero-sub" style={{ ...s.heroSub, animationDelay: "0.85s" }}>
                I build fast, beautiful websites with React, WordPress, and Webflow — plus SEO and digital marketing that help brands grow online. Based in Bengaluru, shipping globally.
              </p>
              <div className="hero-enter hero-ctas btn-row" style={{ ...s.heroCtas, animationDelay: "1s" }}>
                <Btn onClick={openResume}>Resume</Btn>
                <Btn href="#contact">Let's Talk</Btn>
              </div>
            </div>
            <div className="hero-meta hero-enter" style={{ ...s.heroMeta, animationDelay: "1.15s" }}>
              <div className="meta-item" style={s.metaItem}><span style={s.metaNum}>2+</span><span style={s.metaLabel}>Years building</span></div>
              <div className="meta-item" style={s.metaItem}><span style={s.metaNum}>20+</span><span style={s.metaLabel}>Projects shipped</span></div>
              <div className="meta-item" style={s.metaItem}><span style={s.metaNum}>∞</span><span style={s.metaLabel}>Problems solved</span></div>
            </div>
          </div>
        </Container>
        <a href="#about" className="hero-scroll-btn" aria-label="Scroll to about"><span className="hero-scroll-ring" /><span className="hero-scroll-chevron">↓</span></a>
      </section>

      <section id="about" className="page-pad section-block" style={s.about}>
        <Container>
          <div className="aboutInner" style={s.aboutInner}>
            <Reveal variant="left" style={s.aboutLeft}>
              <span style={s.sectionTag}>About</span>
              <div style={s.avatarBox}>
                <div style={s.avatar}><span style={s.avatarInitials}>SM</span></div>
                <div style={s.avatarMeta}>
                  <p style={s.avatarName}>Shamanth Kumar M</p>
                  <p style={s.avatarRole}>Web Developer · SEO · Digital Marketing · Bengaluru, IN</p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="right" delay={100} style={s.aboutRight}>
              <h2 style={s.aboutHeading}>I turn ideas into<br /><span style={s.accentText}>digital products</span><br />people love.</h2>
              <div style={s.aboutBody}>
                <p>I'm Shamanth — a full-stack web developer from Bengaluru with a deep curiosity for how the web works and a commitment to making it work better.</p>
                <p>Over the years I've built everything from scrappy side projects to production-grade applications — always with the same drive: understand the problem deeply, design the solution carefully, and execute with precision.</p>
                <p>When I'm not coding, I'm exploring new technologies, contributing to open source, or sketching out the next thing I want to build.</p>
              </div>
              <div className="btn-row" style={s.aboutLinks}>
                <Btn href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</Btn>
                <Btn href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</Btn>
                <Btn onClick={openResume}>Resume</Btn>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="skills" className="page-pad section-block" style={s.skills}>
        <Container>
          <Reveal className="skills-header" style={s.skillsHeader}>
            <span style={s.sectionTag}>Expertise</span>
            <p style={s.skillsSub}>Web development, WordPress, Webflow, SEO, digital marketing, and everything needed to launch and grow online.</p>
          </Reveal>
          <div style={s.skillsList}>
            {SKILLS.map((sk, i) => (
              <Reveal key={sk.tag} delay={i * 80}>
                <div className="skillItem" style={{ ...s.skillItem, borderTopColor: hoveredSkill === sk.tag ? sk.accent : "#222" }} onMouseEnter={() => setHoveredSkill(sk.tag)} onMouseLeave={() => setHoveredSkill(null)}>
                  <div style={s.skillLeft}><span style={{ ...s.skillNum, color: sk.accent }}>{sk.tag}</span><h3 style={s.skillTitle}>{sk.title}</h3></div>
                  <p style={s.skillDesc}>{sk.desc}</p>
                  <span style={{ ...s.skillArrow, color: hoveredSkill === sk.tag ? sk.accent : "#333" }}>→</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} style={s.marqueeWrap}>
            <div className="marquee-track" style={s.marqueeTrack}>
              {[...STACK, ...STACK].map((t, i) => <span key={i} style={s.marqueeTag}>{t}</span>)}
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="projects" className="page-pad section-block" style={s.projects}>
        <Container>
          <Reveal className="projects-header" style={s.projectsHeader}>
            <span style={s.sectionTag}>Selected Work</span>
            <h2 style={s.projectsHeading}>Projects that<br /><span style={s.accentText}>define my craft.</span></h2>
          </Reveal>
          <div style={s.projectList}>
            {PROJECTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <div className="projectRow" style={{ ...s.projectRow, background: hoveredProject === p.id ? "#111" : "transparent", borderTopColor: hoveredProject === p.id ? p.accent : "#1a1a1a" }} onMouseEnter={() => setHoveredProject(p.id)} onMouseLeave={() => setHoveredProject(null)}>
                  <div style={s.projectMeta}><span style={{ ...s.projectNum, color: p.accent }}>{p.num}</span><span style={s.projectYear}>{p.year}</span></div>
                  <div style={s.projectInfo}>
                    <div style={s.projectTitleRow}><h3 style={s.projectTitle}>{p.title}</h3><span style={s.projectTag}>{p.tag}</span></div>
                    <p style={s.projectDesc}>{p.desc}</p>
                    <div style={s.techStack}>{p.tech.map((t) => <span key={t} style={{ ...s.techBadge, borderColor: p.accent + "44" }}>{t}</span>)}</div>
                  </div>
                  <a href={p.link} style={{ ...s.projectArrow, color: hoveredProject === p.id ? p.accent : "#333" }} aria-label={`View ${p.title}`}>↗</a>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="page-pad section-block" style={s.contact}>
        <Container>
          <Reveal variant="fade" style={s.contactInner}>
            <span style={s.sectionTag}>Contact</span>
            <h2 style={s.contactHeading}>Have a project in mind?<br /><span style={s.accentText}>Let's build it.</span></h2>
            <p style={s.contactSub}>I'm open to freelance projects, full-time opportunities, and interesting collaborations. If you have something worth building, I'd love to hear from you.</p>
            <div style={s.contactActions}>
              <Btn href={`mailto:${EMAIL}`} normalCase>{EMAIL}</Btn>
              <div className="btn-row" style={s.contactSocials}>
                <Btn href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</Btn>
                <Btn href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</Btn>
                <Btn onClick={openResume}>Resume</Btn>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <footer className="footer page-pad section-block" style={s.footer}>
        <Container style={s.footerInner}>
          <a href="#" style={s.footerLogoLink}>Shamanth kumar<span style={{ color: "#C8A97E" }}>.</span></a>
          <p style={s.footerName}>Shamanth Kumar M · Web Developer · Bengaluru</p>
          <div style={s.footerRight}>
          
            <p style={s.footerCopy}>© 2024 — Built with React</p>
          </div>
        </Container>
      </footer>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
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
    padding: "20px 0", backdropFilter: "blur(16px)",
    background: "rgba(10,10,10,0.88)", transition: "border-color 0.3s",
  },
  navInner: { display: "flex", alignItems: "center", justifyContent: "space-between" },
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
  overlayEmail: { color: "#0A0A0A", fontSize: "14px", marginBottom: "16px" },
  overlayCopy: { fontSize: "12px", color: "#999", marginTop: "16px" },
  btnRow: { display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" },
  resumeBackdrop: { position: "fixed", inset: 0, zIndex: 300, background: "rgba(0,0,0,0.82)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" },
  resumeModal: { width: "min(920px, 100%)", height: "min(88vh, 900px)", background: "#111", border: "1px solid #2a2a2a", borderRadius: "8px", display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: "0 24px 80px rgba(0,0,0,0.55)" },
  resumeModalTop: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "14px 18px", borderBottom: "1px solid #222", background: "#0d0d0d", flexWrap: "wrap" },
  resumeModalTitle: { fontSize: "13px", letterSpacing: "0.06em", color: "#C8A97E", fontWeight: 600 },
  resumeModalActions: { display: "flex", alignItems: "center", gap: "12px" },
  resumeFrame: { width: "100%", flex: 1, border: "none", background: "#1a1a1a" },
  hero: { minHeight: "100vh", position: "relative", paddingBottom: "80px", overflow: "hidden" },
  heroLayout: { position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", paddingTop: "88px", width: "100%" },
  heroInner: { width: "100%", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "48px", flexWrap: "wrap" },
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
  heroContent: { position: "relative", zIndex: 1, flex: 1 },
  heroEyebrow: {
    fontSize: "11px", letterSpacing: "0.18em", color: "#555",
    textTransform: "uppercase", marginBottom: "24px",
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
    letterSpacing: "-0.04em", margin: "0",
    display: "flex", flexDirection: "column",
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
  heroCtas: { marginBottom: "8px" },
  heroMeta: { display: "flex", flexDirection: "column", gap: "24px", flexShrink: 0, zIndex: 1 },
  metaItem: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px" },
  metaNum: { fontSize: "28px", fontWeight: 700, letterSpacing: "-0.04em", color: "#F0EDE6" },
  metaLabel: { fontSize: "10px", color: "#444", letterSpacing: "0.15em", textTransform: "uppercase" },
  sectionTag: {
    fontSize: "10px", letterSpacing: "0.22em",
    color: "#555", textTransform: "uppercase",
    display: "block", marginBottom: "32px",
  },
  about: { padding: "120px 0", borderTop: "1px solid #1a1a1a" },
  aboutInner: { display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px" },
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
  aboutLinks: {},
  skills: { padding: "120px 0", borderTop: "1px solid #1a1a1a" },
  skillsHeader: {
    display: "flex", justifyContent: "space-between",
    alignItems: "flex-end", marginBottom: "64px", flexWrap: "wrap", gap: "16px",
  },
  skillsSub: { color: "#555", fontSize: "13px", maxWidth: "360px", lineHeight: 1.6, margin: 0 },
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
  projects: { padding: "120px 0", borderTop: "1px solid #1a1a1a" },
  projectsHeader: { marginBottom: "80px" },
  projectsHeading: {
    fontSize: "clamp(40px, 6vw, 72px)",
    fontWeight: 700, letterSpacing: "-0.04em",
    margin: "0", lineHeight: 1.05,
  },
  projectList: { display: "flex", flexDirection: "column" },
  projectRow: {
    display: "grid", gridTemplateColumns: "80px 1fr 40px",
    gap: "40px", padding: "40px 0",
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
  contact: { padding: "160px 0", borderTop: "1px solid #1a1a1a", background: "#080808" },
  contactInner: {},
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
  footer: { padding: "32px 0", borderTop: "1px solid #111" },
  footerInner: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center" },
  footerLogoLink: { fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "#F0EDE6", textDecoration: "none" },
  footerName: { fontSize: "12px", color: "#444", textAlign: "center" },
  footerRight: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "12px" },
  footerBtns: { justifyContent: "flex-end" },
  footerCopy: { fontSize: "12px", color: "#333", textAlign: "right", margin: 0 },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #0A0A0A; }
  .page-pad { padding-left: 48px; padding-right: 48px; }
  .site-btn {
    display: inline-flex; align-items: center; justify-content: center;
    padding: 12px 22px; border: 1px solid #C8A97E; background: transparent;
    color: #C8A97E; font-size: 12px; font-weight: 600; letter-spacing: 0.1em;
    text-transform: uppercase; text-decoration: none; cursor: pointer; font-family: inherit;
    transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
    white-space: nowrap;
  }
  .site-btn:hover { background: #C8A97E; color: #0A0A0A; opacity: 1; }
  .site-btn--light { border-color: #0A0A0A; color: #0A0A0A; }
  .site-btn--light:hover { background: #0A0A0A; color: #F0EDE6; }
  .site-btn--normal { text-transform: none; letter-spacing: 0.02em; font-weight: 500; font-size: 14px; }
  .btn-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
  .reveal { opacity: 0; will-change: opacity, transform; transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1); }
  .reveal-up { transform: translateY(44px); }
  .reveal-left { transform: translateX(-40px); }
  .reveal-right { transform: translateX(40px); }
  .reveal-fade { transform: translateY(24px) scale(0.97); }
  .reveal.revealed { opacity: 1; transform: translate(0,0) scale(1); }
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes pulse-dot { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.6; transform:scale(1.4); } }
  .hero-orb { position:absolute; border-radius:50%; pointer-events:none; filter:blur(60px); opacity:0.35; animation:heroOrbDrift 12s ease-in-out infinite; }
  .hero-orb-a { width:420px; height:420px; top:-80px; right:8%; background:rgba(200,169,126,0.18); }
  .hero-orb-b { width:280px; height:280px; bottom:10%; left:45%; background:rgba(143,179,168,0.12); animation-delay:-4s; }
  @keyframes heroOrbDrift { 0%,100% { transform:translate(0,0); } 50% { transform:translate(-24px,18px); } }
  .hero-grid-anim { animation:heroGridPulse 8s ease-in-out infinite; }
  @keyframes heroGridPulse { 0%,100% { opacity:0.55; } 50% { opacity:1; } }
  .hero-float-layer { position:absolute; inset:0; z-index:0; pointer-events:none; transition:transform 0.35s ease-out; }
  .hero-float-card { position:absolute; border:1px solid rgba(255,255,255,0.08); background:rgba(12,12,12,0.55); backdrop-filter:blur(8px); border-radius:6px; padding:10px 12px; transform:rotate(var(--rot)); animation:heroFloat 7s ease-in-out infinite; animation-delay:var(--float-delay); box-shadow:0 20px 50px rgba(0,0,0,0.35); opacity:0; }
  .hero-ready .hero-float-card { animation-name:heroFloat,heroCardIn; animation-duration:7s,1s; animation-timing-function:ease-in-out,ease; animation-iteration-count:infinite,1; animation-fill-mode:none,forwards; animation-delay:var(--float-delay),calc(var(--float-delay) + 0.4s); }
  @keyframes heroFloat { 0%,100% { transform:rotate(var(--rot)) translateY(0); } 50% { transform:rotate(var(--rot)) translateY(-14px); } }
  @keyframes heroCardIn { from { opacity:0; transform:rotate(var(--rot)) translateY(24px); } to { opacity:1; transform:rotate(var(--rot)) translateY(0); } }
  .hero-float-dots { display:flex; gap:4px; margin-bottom:8px; }
  .hero-float-dots span { width:5px; height:5px; border-radius:50%; background:rgba(255,255,255,0.15); }
  .hero-float-line { margin:0; font-size:10px; line-height:1.5; color:rgba(240,237,230,0.45); font-family:"Courier New",monospace; }
  .hero-sketch-wrap { position:absolute; right:2%; top:50%; width:min(48vw,520px); z-index:0; pointer-events:none; opacity:0.85; transition:transform 0.35s ease-out; }
  .hero-sketch { width:100%; height:auto; display:block; }
  .hero-draw { stroke-dasharray:600; stroke-dashoffset:600; opacity:0; }
  .hero-ready .hero-draw { animation:heroDraw 2.2s ease forwards; }
  @keyframes heroDraw { to { stroke-dashoffset:0; opacity:1; } }
  .hero-enter { opacity:0; transform:translateY(40px); }
  .hero-ready .hero-enter { animation:heroEnter 0.9s cubic-bezier(0.22,1,0.36,1) forwards; }
  @keyframes heroEnter { to { opacity:1; transform:translateY(0); } }
  .hero-title-line { display:block; overflow:hidden; }
  .hero-name-wrap { position:relative; display:inline-block; width:fit-content; }
  .hero-sweep { position:absolute; left:-4%; bottom:12%; width:0; height:18%; background:linear-gradient(105deg,transparent,rgba(200,169,126,0.55),transparent); transform:skewX(-18deg); z-index:-1; }
  .hero-ready .hero-sweep { animation:heroSweep 1.1s cubic-bezier(0.22,1,0.36,1) 1.1s forwards; }
  @keyframes heroSweep { from { width:0; opacity:0; } to { width:108%; opacity:1; } }
  .hero-scroll-btn { position:absolute; bottom:32px; left:50%; transform:translateX(-50%); width:44px; height:44px; border-radius:50%; border:1px solid rgba(200,169,126,0.35); display:flex; align-items:center; justify-content:center; text-decoration:none; color:#C8A97E; z-index:2; opacity:0; }
  .hero-ready .hero-scroll-btn { animation:heroEnter 0.8s ease 1.4s forwards; }
  .hero-scroll-ring { position:absolute; inset:-3px; border-radius:50%; border:1px solid transparent; border-top-color:rgba(200,169,126,0.6); animation:heroRingSpin 2.4s linear infinite; }
  @keyframes heroRingSpin { to { transform:rotate(360deg); } }
  .hero-scroll-chevron { font-size:14px; animation:heroChevronBounce 2s ease-in-out infinite; }
  @keyframes heroChevronBounce { 0%,100% { transform:translateY(0); opacity:0.5; } 50% { transform:translateY(5px); opacity:1; } }
  .resume-backdrop { animation:resumeFadeIn 0.25s ease; }
  .resume-modal { animation:resumeSlideIn 0.35s cubic-bezier(0.22,1,0.36,1); }
  @keyframes resumeFadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes resumeSlideIn { from { opacity:0; transform:translateY(24px) scale(0.98); } to { opacity:1; transform:translateY(0) scale(1); } }
  a:not(.site-btn):hover { opacity:0.85; }
  @media (max-width:1024px) {
    .page-pad { padding-left:24px !important; padding-right:24px !important; }
    .section-block { padding-top:30px !important; padding-bottom:30px !important; }
    .hero { padding-bottom:72px !important; }
    .heroLayout { padding-top:72px !important; min-height:auto !important; }
    .hero-inner { flex-direction:column !important; align-items:flex-start !important; gap:28px !important; }
    .hero-meta { width:100% !important; flex-direction:row !important; justify-content:space-between !important; }
    .hero-meta .meta-item { align-items:flex-start !important; }
    .hero-ctas { width:100% !important; }
    .reveal-left,.reveal-right { transform:translateY(36px); }
    .reveal.revealed.reveal-left,.reveal.revealed.reveal-right { transform:translateY(0); }
  }
  @media (max-width:768px) {
    .page-pad { padding-left:20px !important; padding-right:20px !important; }
    .topNav { padding-top:16px !important; padding-bottom:16px !important; }
    .cityBlock { display:none; }
    .hero { padding-bottom:80px !important; }
    .hero-float-layer { display:none; }
    .hero-sketch-wrap { width:70vw; right:-10%; opacity:0.35; top:18%; transform:translateY(0) !important; }
    .heroLayout { padding-top:64px !important; }
    .hero-sub { margin-bottom:28px !important; }
    .hero-ctas { display:flex !important; flex-wrap:wrap !important; gap:16px 24px !important; }
    .hero-meta { margin-top:8px !important; padding-top:20px !important; border-top:1px solid #1a1a1a; }
    .hero-scroll-btn { bottom:20px !important; }
    .aboutInner { grid-template-columns:1fr !important; gap:24px !important; }
    .skillItem { grid-template-columns:1fr !important; gap:12px !important; padding:24px 0 !important; }
    .projectRow { grid-template-columns:1fr !important; gap:12px !important; padding:24px 0 !important; }
    .footerInner { display:flex !important; flex-direction:column !important; gap:12px !important; text-align:left !important; }
    .footerRight { align-items:flex-start !important; }
    .footerBtns { justify-content:flex-start !important; }
    .resume-backdrop { padding:12px !important; }
    .resume-modal { height:92vh !important; }
    .hero { padding-bottom:80px !important; min-height:70vh !important; }
    .site-btn {
    padding: 10px 18px !important;
    font-size: 11px !important;
  }
}

  }
`;

