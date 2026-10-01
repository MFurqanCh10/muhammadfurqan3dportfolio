import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Scene } from './components/Scene'
import { SectionIntro } from './components/SectionIntro'
import { certifications, profile, projects, skillGroups } from './lib/data'

const navItems = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact']

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowDown() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 4v11M5.5 11l4.5 4.5 4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <rect x="7" y="5" width="9" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 12H4.5A1.5 1.5 0 0 1 3 10.5v-6A1.5 1.5 0 0 1 4.5 3h6A1.5 1.5 0 0 1 12 4.5V5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeProject, setActiveProject] = useState<number | null>(null)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reducedMotion ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reducedMotion ? 0.1 : 0.7, delay },
  })

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />

      <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
        <nav className="nav-bar" aria-label="Primary navigation">
          <button className="brand" onClick={() => scrollToSection('home')} aria-label="Go to home">
            <span className="brand-dot" />
            <span>MF.</span>
          </button>

          <div className="nav-links desktop-only">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollToSection(item)}>{item}</button>
            ))}
          </div>

          <a className="nav-cta desktop-only" href="/assets/Muhammad-Furqan-Resume.pdf" download>
            Resume <ArrowUpRight />
          </a>

          <button
            className="menu-toggle mobile-only"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <span />
            <span />
          </button>
        </nav>

        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mobile-menu mobile-only">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollToSection(item)}>{item}</button>
            ))}
            <a href="/assets/Muhammad-Furqan-Resume.pdf" download onClick={() => setMenuOpen(false)}>Download Resume</a>
          </motion.div>
        )}
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <Scene reducedMotion={reducedMotion} />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <motion.div {...reveal(0)} className="hero-kicker">FULL STACK • JAVA • AI/ML</motion.div>
            <motion.h1 {...reveal(0.08)}>
              <span>Muhammad</span>
              <em>Furqan</em>
            </motion.h1>
            <motion.p {...reveal(0.16)} className="hero-role">{profile.title}</motion.p>
            <motion.p {...reveal(0.22)} className="hero-intro">{profile.summary}</motion.p>
            <motion.div {...reveal(0.3)} className="hero-actions">
              <button className="button button-primary" onClick={() => scrollToSection('projects')}>
                View My Work <ArrowDown />
              </button>
              <a className="button button-ghost" href="/assets/Muhammad-Furqan-Resume.pdf" download>
                Download Resume <ArrowUpRight />
              </a>
            </motion.div>
            <motion.div {...reveal(0.38)} className="hero-meta">
              <span>International Islamic University, Islamabad</span>
              <span>{profile.experienceSnapshot}</span>
            </motion.div>
          </div>

          <motion.div {...reveal(0.12)} className="hero-visual">
            <div className="portrait-orbit orbit-a" aria-hidden="true" />
            <div className="portrait-orbit orbit-b" aria-hidden="true" />
            <div className="portrait-card glass-card">
              <div className="portrait-label">PROFILE / 01</div>
              <img src="/assets/muhammad-furqan.jpeg" alt="Muhammad Furqan" />
              <div className="portrait-caption">
                <span>Java & Spring Boot</span>
                <span>AI/ML Integration</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="section-pad section-block">
          <SectionIntro eyebrow="01 / ABOUT" title="A resume built around real work." copy="The visual treatment changes; the facts do not. This portfolio follows the experience, stack, projects, education, and certifications documented in the provided resume." />
          <div className="about-grid">
            <motion.article {...reveal(0)} className="glass-card about-card about-main">
              <span className="card-index">01</span>
              <h3>Backend-first, product-minded.</h3>
              <p>{profile.summary}</p>
            </motion.article>
            <motion.article {...reveal(0.06)} className="glass-card about-card">
              <span className="card-index">02</span>
              <h3>Hands-on delivery</h3>
              <p>{profile.experienceSnapshot}.</p>
            </motion.article>
            <motion.article {...reveal(0.12)} className="glass-card about-card">
              <span className="card-index">03</span>
              <h3>Focus areas</h3>
              <div className="micro-tags">
                {['Java/Spring Boot', 'Python/Flask', 'AI/ML', 'Databases', 'Authentication'].map((item) => <span key={item}>{item}</span>)}
              </div>
            </motion.article>
          </div>
        </section>

        <section id="experience" className="section-pad section-block">
          <SectionIntro eyebrow="02 / EXPERIENCE" title="Hands-on engineering, presented clearly." copy="The supplied resume does not list employer names, job titles, or dated positions, so this section intentionally keeps the documented experience snapshot without inventing a work history." />
          <motion.div {...reveal(0)} className="experience-panel glass-card">
            <div className="timeline-line" aria-hidden="true" />
            <div className="timeline-node">01</div>
            <div>
              <span className="eyebrow">HANDS-ON EXPERIENCE</span>
              <h3>{profile.experienceSnapshot}.</h3>
              <p>The project portfolio shows end-to-end work across AI advisory, e-commerce, admin workflows, REST APIs, database design, authentication, and frontend delivery.</p>
              <div className="micro-tags">
                {['Spring Boot', 'REST APIs', 'JPA Hibernate', 'Thymeleaf', 'MySQL', 'Flask', 'Scikit-learn'].map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="section-pad section-block">
          <SectionIntro eyebrow="03 / PROJECTS" title="Projects that show the stack in motion." copy="Three projects are documented in the resume. Each card expands to reveal the recorded scope without adding unverified details." />
          <div className="project-list">
            {projects.map((project, index) => {
              const open = activeProject === index
              return (
                <motion.article
                  key={project.number}
                  {...reveal(index * 0.05)}
                  className={`project-card ${open ? 'project-open' : ''}`}
                >
                  <button
                    className="project-summary"
                    onClick={() => setActiveProject(open ? null : index)}
                    aria-expanded={open}
                  >
                    <span className="project-number">{project.number}</span>
                    <span className="project-title-block">
                      <span className="project-badge">{project.badge}</span>
                      <strong>{project.name}</strong>
                      <span>{project.description}</span>
                    </span>
                    <span className="project-toggle">{open ? '−' : '+'}</span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                    className="project-details"
                  >
                    <div className="project-inner">
                      <div className="project-copy">
                        {project.bullets.map((bullet) => <p key={bullet}>— {bullet}</p>)}
                      </div>
                      <div className="tech-stack">
                        <span className="eyebrow">TECHNOLOGIES</span>
                        <div className="micro-tags">
                          {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section id="skills" className="section-pad section-block">
          <SectionIntro eyebrow="04 / SKILLS" title="A stack organized for clarity." />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <motion.article key={group.label} {...reveal(index * 0.035)} className="skill-card glass-card">
                <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{group.label}</h3>
                <div className="skill-tags">
                  {group.items.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="education" className="section-pad section-block">
          <SectionIntro eyebrow="05 / EDUCATION" title="Academic foundation." />
          <motion.article {...reveal(0)} className="education-card glass-card">
            <div>
              <span className="eyebrow">{profile.education.dates}</span>
              <h3>{profile.education.degree}</h3>
              <p>{profile.education.institution}</p>
            </div>
            <div className="education-seal" aria-hidden="true">IIUI</div>
          </motion.article>
        </section>

        <section id="credentials" className="section-pad section-block compact-section">
          <SectionIntro eyebrow="06 / CERTIFICATIONS" title="Credentials on record." />
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <motion.div key={cert} {...reveal(index * 0.04)} className="cert-card glass-card">
                <span className="cert-dot">•</span>
                <span>{cert}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section-pad">
          <div className="contact-glow" aria-hidden="true" />
          <SectionIntro eyebrow="07 / CONTACT" title="Let’s build something meaningful." copy="Connect through the contact details and public profiles provided in the resume." />
          <div className="contact-grid">
            <motion.div {...reveal(0)} className="contact-card glass-card">
              <span className="eyebrow">EMAIL</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button className="copy-button" onClick={copyEmail} title="Copy email">
                <CopyIcon /> {copied ? 'Copied' : 'Copy'}
              </button>
            </motion.div>
            <motion.div {...reveal(0.05)} className="contact-card glass-card">
              <span className="eyebrow">PHONE</span>
              <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
              <span className="contact-note">Available from the resume</span>
            </motion.div>
            <motion.div {...reveal(0.1)} className="contact-card glass-card">
              <span className="eyebrow">PUBLIC PROFILES</span>
              <div className="profile-links">
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
                <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
              </div>
            </motion.div>
          </div>
          <div className="footer-row">
            <span>© {new Date().getFullYear()} Muhammad Furqan</span>
            <span>Full Stack Developer • Java & Spring Boot • AI/ML Integration</span>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
