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
  { tag: "01", title: "Frontend Development", desc: "Building responsive, performant interfaces with HTML5, CSS3, JavaScript, React.js, Next.js, and reusable component systems.", accent: "#C8A97E" },
  { tag: "02", title: "Backend & APIs", desc: "Crafting RESTful APIs and server-side logic with Node.js, PHP, Python, and FastAPI for scalable web applications.", accent: "#8FB3A8" },
  { tag: "03", title: "CMS & Platforms", desc: "Implementing WordPress, Webflow, HubSpot CMS, Shopify, and headless content workflows for flexible publishing experiences.", accent: "#B8C88F" },
  { tag: "04", title: "Database Design", desc: "Designing and optimising MongoDB, MySQL, and SQL schemas for fast, reliable data access and reporting.", accent: "#A89BC8" },
  { tag: "05", title: "SEO & Performance", desc: "Improving search visibility through technical SEO, speed optimisation, accessibility, and mobile-first best practices.", accent: "#C8A97E" },
  { tag: "06", title: "Tools & Deployment", desc: "Shipping clean code with Git, GitHub, AWS, and modern workflows to keep production deployments stable and maintainable.", accent: "#8FB3A8" },
  { tag: "07", title: "Responsive Design", desc: "Delivering polished experiences across devices with mobile-first layouts, accessibility, and cross-browser consistency.", accent: "#B8C88F" },
];

const PROJECTS = [
  {
    id: "covalent",
    num: "01",
    title: "Covalent",
    tag: "WordPress Development",
    year: "2025",
    desc: "Custom WordPress sites built with HTML, CSS, PHP, JavaScript, and MySQL. Delivered responsive themes and performance-focused web experiences.",
    tech: ["WordPress", "PHP", "MySQL", "HTML5", "CSS3"],
    accent: "#C8A97E",
    link: "#",
  },
  {
    id: "studiox",
    num: "02",
    title: "StudioX",
    tag: "React & Next.js",
    year: "2025",
    desc: "Frontend applications using React.js and Next.js with reusable UI components and fast, modern architecture.",
    tech: ["React.js", "Next.js", "JavaScript", "CSS3", "Responsive Design"],
    accent: "#8FB3A8",
    link: "#",
  },
  {
    id: "datakrew",
    num: "03",
    title: "Datakrew",
    tag: "Full-stack App",
    year: "2025",
    desc: "Full-stack web solutions powered by React.js, Next.js, and REST APIs for scalable product experiences.",
    tech: ["React.js", "Next.js", "REST APIs", "Node.js", "SQL"],
    accent: "#A89BC8",
    link: "#",
  },
  {
    id: "datafoundry",
    num: "04",
    title: "DataFoundry AI",
    tag: "CMS & Marketing",
    year: "2024",
    desc: "Content-driven sites integrated with Webflow, HubSpot CMS, and SEO strategy to support digital marketing goals.",
    tech: ["Webflow", "HubSpot CMS", "SEO", "HTML5", "CSS3"],
    accent: "#B8C88F",
    link: "#",
  },
];

const STACK = [
  "HTML5", "CSS3", "JavaScript", "jQuery", "React.js", "Next.js", "Node.js", "PHP", "Python", "FastAPI", "REST APIs", "WordPress", "Webflow", "HubSpot CMS", "Shopify", "MongoDB", "MySQL", "SQL", "Git", "GitHub", "AWS", "SEO", "Responsive Design", "UI/UX", "Performance Optimization"
];
const GITHUB_URL = "https://github.com/shamanthkumarm57-a11y";
const LINKEDIN_URL = "https://www.linkedin.com/in/shamanth-kumar-m-04269724b";
const RESUME_URL = `${import.meta.env.BASE_URL || "/"}Shamanth-Resume.pdf`;
const EMAIL = "shamanthm727@gmail.com";

const HERO_FLOATS = [
  { top: "14%", left: "54%", w: 148, h: 96, rot: -10, delay: 0, lines: ["<Portfolio />", "React · Vite"] },
  { top: "8%", left: "72%", w: 128, h: 82, rot: 8, delay: 1.2, lines: ["{ build() }", "Node.js"] },
  { top: "28%", left: "66%", w: 118, h: 74, rot: -4, delay: 2.4, lines: ["sham dev", "localhost"] },
  { top: "20%", left: "84%", w: 108, h: 68, rot: 12, delay: 0.8, lines: ["git push", "deploy ✓"] },
];

const CONTAINER = { maxWidth: "1100px", margin: "0 auto", width: "100%" };

function Container({ children, style, className = "" }) {
  return <div className={className} style={{ ...CONTAINER, ...style }}>{children}</div>;
}

function Btn({ children, href, onClick, target, rel, download, light = false, normalCase = false, className = "", style }) {
  const cls = `site-btn${light ? " site-btn--light" : ""}${normalCase ? " site-btn--normal" : ""} ${className}`.trim();
  if (href) {
    return (
      <a href={href} target={target} rel={rel} download={download} className={cls} style={style} onClick={onClick}>
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
  
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_URL;
    link.download = "Shamanth-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  if (!open) return null;
  return (
    <div className="resume-backdrop" style={s.resumeBackdrop} onClick={onClose}>
      <div className="resume-modal" style={s.resumeModal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Resume">
        <div style={s.resumeModalTop}>
          <span style={s.resumeModalTitle}>Shamanth Kumar M — Resume</span>
          <div style={s.resumeModalActions}>
            <Btn onClick={handleDownload}>Download PDF</Btn>
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
        <Container style={s.navInner} className="topNav-inner">
          <div style={s.navBrand}><span style={s.brandIcon}>S</span></div>
          <div className="cityBlock" style={s.cityBlock}>
            {CITIES.map((c, i) => (
              <span key={c.label} style={s.cityItem}>
                <span style={s.cityLabel}>{c.label}</span>
                <span style={s.cityTime}>{times[i] || "——"}</span>
              </span>
            ))}
          </div>
          <button style={s.menuBtn} className="menu-toggle-btn" onClick={() => setMenuOpen(true)}>Menu</button>
        </Container>
      </nav>

      <div className="menu-overlay-block" style={{ ...s.overlay, opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "all" : "none" }}>
        <div style={s.overlayTop} className="overlay-header">
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
        <div style={s.overlayBottom} className="overlay-footer">
          <p style={s.overlayEmail}>{EMAIL}</p>
          <div style={s.btnRow} className="overlay-btn-row">
            <Btn href={GITHUB_URL} target="_blank" rel="noreferrer" light>GitHub</Btn>
            <Btn href={LINKEDIN_URL} target="_blank" rel="noreferrer" light>LinkedIn</Btn>
            <Btn onClick={openResume} light>Resume</Btn>
          </div>
          <p style={s.overlayCopy}>© 2026 Shamanth Kumar M</p>
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
        <Container style={s.heroLayout} className="hero-layout-wrapper">
          <div className="heroInner-row" style={s.heroInner}>
            <div className="hero-content" style={s.heroContent}>
              <p className="hero-enter hero-eyebrow" style={{ ...s.heroEyebrow, animationDelay: "0.15s" }}>
                <span style={s.eyebrowDot} /> Available for freelance & full-time roles
              </p>
              <h1 style={s.heroTitle} className="hero-main-heading">
                <span className="hero-enter hero-title-line" style={{ animationDelay: "0.3s" }}>Shamanth</span>
                <span className="hero-enter hero-title-line hero-name-wrap" style={{ animationDelay: "0.5s" }}>
                  <span style={s.heroName}>Kumar M</span>
                  <span className="hero-sweep" aria-hidden="true" />
                </span>
              </h1>
              <p className="hero-enter" style={{ ...s.heroRole, animationDelay: "0.7s" }}>Web Developer · React · WordPress · SEO</p>
              <p className="hero-enter hero-sub" style={{ ...s.heroSub, animationDelay: "0.85s" }}>
                I build fast, responsive websites and web apps with React, WordPress, Webflow, and SEO-first architecture. Based in Bengaluru, India.
              </p>
              <div className="hero-enter hero-ctas btn-row" style={{ ...s.heroCtas, animationDelay: "1s" }}>
                <Btn onClick={openResume}>Resume</Btn>
                <Btn href="#contact">Let's Talk</Btn>
              </div>
            </div>
            <div className="hero-meta hero-enter" style={s.heroMeta}>
              <div className="meta-item" style={s.metaItem}>
                <span style={s.metaNum}>2+</span>
                <span style={s.metaLabel}>Years building</span>
              </div>
              <div className="meta-item" style={s.metaItem}>
                <span style={s.metaNum}>20+</span>
                <span style={s.metaLabel}>Projects shipped</span>
              </div>
              <div className="meta-item" style={s.metaItem}>
                <span style={s.metaNum}>∞</span>
                <span style={s.metaLabel}>Problems solved</span>
              </div>
            </div>
          </div>
        </Container>
        <a href="#about" className="hero-scroll-btn" aria-label="Scroll to about"><span className="hero-scroll-ring" /><span className="hero-scroll-chevron">↓</span></a>
      </section>

      <section id="about" className="page-pad section-block" style={s.about}>
        <Container>
          <div className="aboutInner">
            <Reveal variant="left" className="about-left" style={s.aboutLeft}>
              <span style={s.sectionTag}>About</span>
              <div className="avatar-box" style={s.avatarBox}>
                <div style={s.avatar}><span style={s.avatarInitials}>SM</span></div>
                <div style={s.avatarMeta}>
                  <p style={s.avatarName}>Shamanth Kumar M</p>
                  <p style={s.avatarRole}>Web Developer · React · WordPress · SEO · Bengaluru, India</p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="right" delay={100} className="about-right" style={s.aboutRight}>
              <h2 style={s.aboutHeading} className="about-main-heading">I turn ideas into<br /><span style={s.accentText}>digital products</span><br />people love.</h2>
              <div className="about-body" style={s.aboutBody}>
                <p>Motivated and results-driven web developer with expertise in React.js, Next.js, WordPress, and frontend development.</p>
                <p>Skilled in responsive UI/UX design, SEO optimisation, and performance enhancement, I build clean, scalable web experiences for modern brands.</p>
                <p>I work with teams on agile workflows, live production sites, and CMS-driven marketing projects that deliver measurable results.</p>
              </div>
              <div className="btn-row about-links" style={s.aboutLinks}>
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
            <p style={s.skillsSub}>Frontend, backend, CMS, SEO and responsive development for modern web experiences.</p>
          </Reveal>
          <div className="skillsList-wrapper" style={s.skillsList}>
            {SKILLS.map((sk, i) => (
              <Reveal key={sk.tag} delay={i * 80}>
                <div className="skillItem" style={{ ...s.skillItem, borderTopColor: hoveredSkill === sk.tag ? sk.accent : "#222" }} onMouseEnter={() => setHoveredSkill(sk.tag)} onMouseLeave={() => setHoveredSkill(null)}>
                  <div className="skill-left" style={s.skillLeft}><span style={{ ...s.skillNum, color: sk.accent }}>{sk.tag}</span><h3 style={s.skillTitle}>{sk.title}</h3></div>
                  <p className="skill-desc" style={s.skillDesc}>{sk.desc}</p>
                  <span className="skill-arrow" style={{ ...s.skillArrow, color: hoveredSkill === sk.tag ? sk.accent : "#333" }}>→</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} style={s.marqueeWrap} className="skills-marquee-wrap">
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
            <h2 style={s.projectsHeading} className="projects-main-heading">Projects that<br /><span style={s.accentText}>define my craft.</span></h2>
          </Reveal>
          <div className="projectList-wrapper" style={s.projectList}>
            {PROJECTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <div className="projectRow" style={{ ...s.projectRow, background: hoveredProject === p.id ? "#111" : "transparent", borderTopColor: hoveredProject === p.id ? p.accent : "#1a1a1a" }} onMouseEnter={() => setHoveredProject(p.id)} onMouseLeave={() => setHoveredProject(null)}>
                  <div className="project-meta" style={s.projectMeta}><span style={{ ...s.projectNum, color: p.accent }}>{p.num}</span><span style={s.projectYear}>{p.year}</span></div>
                  <div className="project-info" style={s.projectInfo}>
                    <div className="project-title-row" style={s.projectTitleRow}><h3 style={s.projectTitle}>{p.title}</h3><span style={s.projectTag}>{p.tag}</span></div>
                    <p style={s.projectDesc}>{p.desc}</p>
                    <div className="tech-stack" style={s.techStack}>{p.tech.map((t) => <span key={t} style={{ ...s.techBadge, borderColor: p.accent + "44" }}>{t}</span>)}</div>
                  </div>
                  <a href={p.link} className="project-arrow" style={{ ...s.projectArrow, color: hoveredProject === p.id ? p.accent : "#333" }} aria-label={`View ${p.title}`}>↗</a>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="page-pad section-block" style={s.contact}>
        <Container>
          <Reveal variant="fade" className="contact-inner" style={s.contactInner}>
            <span style={s.sectionTag}>Contact</span>
            <h2 style={s.contactHeading} className="contact-main-heading">Have a project in mind?<br /><span style={s.accentText}>Let's build it.</span></h2>
            <p style={s.contactSub}>I'm open to freelance projects, full-time opportunities, and interesting collaborations. If you have something worth building, I'd love to hear from you.</p>
            <div className="contact-actions" style={s.contactActions}>
              <Btn href={`mailto:${EMAIL}`} normalCase>{EMAIL}</Btn>
              <div className="btn-row contact-socials" style={s.contactSocials}>
                <Btn href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</Btn>
                <Btn href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</Btn>
                <Btn onClick={openResume}>Resume</Btn>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <footer className="footer page-pad section-block" style={s.footer}>
        <Container style={s.footerInnerWrap}>
          <div className="footer-inner">
            <a href="#" style={s.footerLogoLink}>Shamanth kumar<span style={{ color: "#C8A97E" }}>.</span></a>
            <p style={s.footerName}> Web Developer · Bengaluru, India</p>
            <div className="footer-right" style={s.footerRight}>
              <p style={s.footerCopy}>© 2026 — Built with React</p>
            </div>
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
  heroMeta: { display: "flex", flexDirection: "row", justifyContent: "center", gap: "42px", flexWrap: "wrap", textAlign: "center", flexShrink: 0, zIndex: 1 },
  metaItem: { display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", minWidth: "120px", maxWidth: "160px", textAlign: "center" },
  metaNum: { fontSize: "28px", fontWeight: 700, letterSpacing: "-0.04em", color: "#F0EDE6" },
  metaLabel: { fontSize: "10px", color: "#888", letterSpacing: "0.15em", textTransform: "uppercase" },
  sectionTag: {
    fontSize: "10px", letterSpacing: "0.22em",
    color: "#555", textTransform: "uppercase",
    display: "block", marginBottom: "32px",
  },
  about: { padding: "120px 0", borderTop: "1px solid #1a1a1a" },
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
    transition: "color: 0.3s", justifySelf: "end",
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
    fontWeight: 300, margin: "0 0 56px", maxWidth: "520px",
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
  footerLogoLink: { fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "#F0EDE6", textDecoration: "none" },
  footerName: { fontSize: "12px", color: "#444" },
  footerRight: { display: "flex", flexDirection: "column", gap: "12px" },
  footerBtns: { justifyContent: "flex-end" },
  footerCopy: { fontSize: "12px", color: "#333", margin: 0 },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #0A0A0A; }
  .page-pad { padding-left: clamp(20px, 4.5vw, 48px); padding-right: clamp(20px, 4.5vw, 48px); }
  
  /* Layout Architecture Definitions */
  .aboutInner { display: grid; grid-template-columns: 1fr 2fr; gap: 80px; }
  .skillItem { display: grid; grid-template-columns: 260px 1fr 32px; }
  .projectRow { display: grid; grid-template-columns: 80px 1fr 40px; }
  .footer-inner { display: grid; grid-template-columns: 1fr 1fr 1fr; align-items: center; }

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
  .hero-scroll-btn { position:absolute; bottom:32px; left:50%; transform:translateX(-50%); width:54px; height:54px; border-radius:50%; border:1px solid rgba(200,169,126,0.35); display:flex; align-items:center; justify-content:center; text-decoration:none; color:#C8A97E; z-index:2; opacity:0; background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); box-shadow: 0 16px 40px rgba(0,0,0,0.2); }
  .hero-ready .hero-scroll-btn { animation:heroEnter 0.8s ease 1.4s forwards; }
  .hero-scroll-ring { position:absolute; inset:-4px; border-radius:50%; border:1px solid transparent; border-top-color:rgba(200,169,126,0.7); animation:heroRingSpin 2.4s linear infinite; }
  @keyframes heroRingSpin { to { transform:rotate(360deg); } }
  .hero-scroll-chevron { font-size:16px; animation:heroChevronBounce 2s ease-in-out infinite; }
  @keyframes heroChevronBounce { 0%,100% { transform:translateY(0); opacity:0.5; } 50% { transform:translateY(5px); opacity:1; } }
  .resume-backdrop { animation:resumeFadeIn 0.25s ease; }
  .resume-modal { animation:resumeSlideIn 0.35s cubic-bezier(0.22,1,0.36,1); }
  @keyframes resumeFadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes resumeSlideIn { from { opacity:0; transform:translateY(24px) scale(0.98); } to { opacity:1; transform:translateY(0) scale(1); } }
  a:not(.site-btn):hover { opacity:0.85; }

  /* ---------- Desktop Optimization Viewport Layer ---------- */
  @media (min-width:1400px) {
    .page-pad { padding-left:64px !important; padding-right:64px !important; }
  }

  /* ---------- Tablet Media Adjustments ---------- */
  @media (max-width:1024px) {
    .section-block { padding-top:64px !important; padding-bottom:64px !important; }
    .hero { padding-bottom:72px !important; }
    .hero-layout-wrapper { padding-top:72px !important; min-height:auto !important; }
    .heroInner-row { flex-direction:column !important; align-items:flex-start !important; gap:28px !important; }
    .hero-meta { width:100% !important; display:grid !important; grid-template-columns:repeat(3, minmax(0, 1fr)) !important; gap:16px !important; justify-items:flex-start !important; border-left: none !important; padding-left: 0 !important; }
    .hero-meta .meta-item { align-items:flex-start !important; text-align:left !important; }
    .hero-ctas { width:100% !important; }
    .reveal-left,.reveal-right { transform:translateY(36px); }
    .reveal.revealed.reveal-left,.reveal.revealed.reveal-right { transform:translateY(0); }
    .aboutInner { gap:56px !important; grid-template-columns: 1fr 2fr !important; }
    .skillItem { grid-template-columns:200px 1fr 28px !important; gap:32px !important; }
    .projectRow { gap:28px !important; }
  }

  /* ---------- Mobile Correct Positioning Overhaul ---------- */
  @media (max-width:768px) {
    .topNav { padding-top:16px !important; padding-bottom:16px !important; }
    .topNav-inner { display: flex !important; justify-content: space-between !important; align-items: center !important; width: 100% !important; }
    .cityBlock { display:none !important; }
    
    /* Strict 10px mobile padding */
    .page-pad { padding-left: 10px !important; padding-right: 10px !important; }
    .section-block { padding-top:56px !important; padding-bottom:56px !important; }
    
    .menu-overlay-block { padding: 24px !important; justify-content: space-between !important; }
    .overlay-header { margin-bottom: 32px !important; }
    .overlay-footer { margin-top: 32px !important; }
    .overlay-btn-row { gap: 8px !important; }

    /* Centered Hero Responsive Corrections */
    .hero { padding-bottom:64px !important; display: flex !important; align-items: center !important; }
    .hero-float-layer { display:none !important; }
    .hero-sketch-wrap { width:70vw !important; right:-10% !important; opacity:0.15 !important; top:18% !important; transform:translateY(0) !important; }
    .hero-layout-wrapper { padding-top:88px !important; height: auto !important; min-height: auto !important; }
    
    /* Left-align specific overrides */
    .heroInner-row { align-items:flex-start !important; text-align:left !important; gap:32px !important; flex-direction: column !important; }
    .hero-content { display:flex !important; flex-direction:column !important; align-items:flex-start !important; width:100% !important; }
    .hero-eyebrow { justify-content:flex-start !important; }
    .hero-title-line, .hero-name-wrap { align-self:flex-start !important; }
    .hero-main-heading { font-size: clamp(40px, 8.5vw, 68px) !important; line-height: 1.05 !important; text-align: left !important; }
    .hero-sub { margin-bottom:32px !important; max-width:440px !important; margin-left: 0 !important; margin-right: auto !important; }
    .hero-ctas { justify-content:flex-start !important; gap:14px 18px !important; width: 100% !important; flex-direction: row !important; flex-wrap: wrap !important; }
    .hero-meta { margin-top:8px !important; padding-top:24px !important; border-top:1px solid #1a1a1a !important; gap:16px !important; width:100% !important; display:grid !important; grid-template-columns:repeat(3, minmax(100px, 1fr)) !important; border-left: none !important; padding-left: 0 !important; justify-items: center !important; }
    .hero-meta .meta-item { align-items: center !important; text-align:center !important; }

    /* About Responsive Corrections */
    .aboutInner { grid-template-columns:1fr !important; gap:48px !important; text-align:left !important; }
    .about-left, .about-right { display:flex !important; flex-direction:column !important; align-items:flex-start !important; width:100% !important; text-align: left !important; }
    .avatar-box { flex-direction:row !important; text-align:left !important; gap:16px !important; }
    .about-main-heading { text-align: left !important; }
    .about-body { align-items:flex-start !important; text-align:left !important; max-width:480px !important; }
    
    /* Left align buttons here to fix the disjointed layout in the screenshot */
    .about-links { justify-content:flex-start !important; width: 100% !important; flex-direction: row !important; flex-wrap: wrap !important; gap: 12px !important; }

    /* Skills Responsive Corrections */
    .skills-header { flex-direction:column !important; align-items:flex-start !important; text-align:left !important; gap:14px !important; margin-bottom:48px !important; }
    .skillsList-wrapper { border-top: 1px solid #222 !important; }
    .skillItem { grid-template-columns:1fr !important; gap:14px !important; padding:28px 0 !important; text-align:left !important; }
    .skill-left { align-items:flex-start !important; }
    .skill-desc { max-width:480px !important; margin:0 !important; }
    .skill-arrow { display:none !important; }
    .skills-marquee-wrap { margin-top: 40px !important; }

    /* Projects Responsive Corrections */
    .projects-header { text-align:left !important; margin-bottom: 48px !important; }
    .projects-main-heading { text-align: left !important; }
    .projectList-wrapper { border-top: 1px solid #1a1a1a !important; }
    .projectRow { grid-template-columns:1fr !important; gap:16px !important; padding:28px 0 !important; text-align:left !important; }
    .project-meta { flex-direction:row !important; justify-content:flex-start !important; gap:16px !important; align-items: center !important; }
    .project-info { align-items:flex-start !important; width: 100% !important; text-align: left !important; }
    .project-title-row { justify-content:flex-start !important; flex-direction: row !important; gap: 12px !important; align-items: center !important; }
    .tech-stack { justify-content:flex-start !important; }
    .project-arrow { display:none !important; }

    /* Contact Responsive Corrections */
    .contact-inner { display:flex !important; flex-direction:column !important; align-items:flex-start !important; text-align:left !important; }
    .contact-main-heading { text-align: left !important; }
    .contact-actions { align-items:flex-start !important; width: 100% !important; }
    
    /* Left align buttons here to fix the disjointed layout in the screenshot */
    .contact-socials { justify-content:flex-start !important; width: 100% !important; flex-direction: row !important; flex-wrap: wrap !important; gap: 12px !important; }

    /* Footer Responsive Corrections */
    .footer-inner { display:flex !important; flex-direction:row !important; justify-content: space-between !important; align-items:center !important; flex-wrap: wrap !important; gap:14px !important; text-align:left !important; }
    .footer-right { align-items:flex-end !important; }

    .resume-backdrop { padding:12px !important; }
    .resume-modal { height:92vh !important; }
    .hero-layout-wrapper { padding-bottom:40px !important; }
    .site-btn { padding:10px 18px !important; font-size:11px !important; }
  }

  /* ---------- Tiny Smartphone Screen Bounds ---------- */
  @media (max-width:480px) {
    .section-block { padding-top:44px !important; padding-bottom:44px !important; }
    
    /* Strict 10px mobile padding */
    .page-pad { padding-left: 10px !important; padding-right: 10px !important; }
    
    /* Ensure Hero Meta stats sit next to each other horizontally */
    .hero-meta { justify-content: center !important; gap: 24px !important; }
    .hero-meta .meta-item { flex: none !important; }
    
    /* 3 Buttons aligned left to match email button and scaled down to fit */
    .hero-ctas { justify-content: flex-start !important; gap: 8px !important; }
    .hero-ctas .site-btn { padding: 8px 12px !important; font-size: 10px !important; flex: none !important; }
    
    .about-links { justify-content: flex-start !important; gap: 8px !important; }
    .about-links .site-btn { padding: 8px 12px !important; font-size: 10px !important; flex: none !important; }
    
    .contact-socials { justify-content: flex-start !important; gap: 8px !important; }
    .contact-socials .site-btn { padding: 8px 12px !important; font-size: 10px !important; flex: none !important; }
    
    /* Ensure footer aligns properly side by side */
    .footer-inner { flex-direction:column !important; justify-content: center !important; align-items: center !important; text-align: center !important;}
    
    .techStack, .tech-stack { gap:6px !important; }
  }
`;