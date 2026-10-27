import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Code2, Download, GraduationCap, Mail, Menu, Terminal, Trophy, X } from 'lucide-react'
import './App.css'

const projects = [
  { number: '01', name: 'SurveyGuard', type: 'Privacy-preserving surveys', description: 'AI-powered survey management with role-aware workflows, analytics, and privacy-first data handling.', stack: ['FastAPI', 'React', 'TypeScript', 'ML'], repo: 'https://github.com/sundarammss/SurveyGuard' },
  { number: '02', name: 'AIS', type: 'Academic Intelligence System', description: 'An academic platform that turns unstructured educational material into searchable, useful knowledge.', stack: ['React', 'FastAPI', 'ChromaDB', 'Redis'], repo: 'https://github.com/sundarammss/AI-OS' },
  { number: '03', name: 'Campus Connect', type: 'Campus management', description: 'Role-secure student management, attendance, and administrative workflows built around robust APIs.', stack: ['Python', 'FastAPI', 'MySQL', 'JWT'], repo: 'https://github.com/sundarammss/backend' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="monogram" href="#top" aria-label="Go to top" onClick={closeMenu}>SM<span>.</span></a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#work" onClick={closeMenu}>Work</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-resume" href="/resume-pdf/MSSresume-14.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={14} /></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Available for opportunities</p>
          <h1>Building useful<br /><em>digital systems.</em></h1>
          <p className="hero-description">I’m <strong>Shanmugasundaram</strong>, a computer science student and full-stack developer who enjoys shaping thoughtful software from the data layer to the interface.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={18} /></a><a className="button button-quiet" href="/resume-pdf/MSSresume-14.pdf" download>Download résumé <Download size={17} /></a></div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="orb orb-one" /><div className="orb orb-two" />
          <div className="code-window"><div className="window-bar"><i /><i /><i /><span>building.tomorrow</span></div><div className="code-content"><p><b>const</b> builder = {'{'}</p><p className="indent">name: <span>'Sundaram'</span>,</p><p className="indent">focus: [<span>'web'</span>, <span>'AI'</span>],</p><p className="indent">curious: <strong>true</strong></p><p>{'}'}</p><div className="cursor" /></div></div>
          <div className="floating-tag tag-one"><Terminal size={15} /> ship ideas</div><div className="floating-tag tag-two"><Code2 size={15} /> solve problems</div>
        </div>
      </section>

      <section className="marquee" aria-label="Technical skills"><div><span>FASTAPI</span><b>✦</b><span>REACT</span><b>✦</b><span>PYTHON</span><b>✦</b><span>FULL-STACK</span><b>✦</b><span>MACHINE LEARNING</span><b>✦</b><span>FASTAPI</span><b>✦</b><span>REACT</span></div></section>

      <section className="work-section shell" id="work"><div className="section-heading"><p className="eyebrow">Selected work</p><h2>Things I’ve built<br />with intent.</h2><p>Software that balances technical rigor with real-world usefulness.</p></div><div className="projects">{projects.map((project) => <article className="project" key={project.name}><div className="project-index">{project.number}</div><div className="project-main"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div><a className="project-arrow" href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}><ArrowUpRight size={24} /></a></article>)}</div></section>

      <section className="about-section" id="about"><div className="shell about-grid"><div className="about-statement"><p className="eyebrow">A little about me</p><h2>Grounded in<br /><em>curiosity.</em></h2><p>I enjoy the satisfying middle ground between the logic of backend systems and the empathy of a well-considered product experience.</p><a className="text-link" href="mailto:shanmugasundaramm13@gmail.com">Let’s talk <ArrowUpRight size={16} /></a></div><div className="about-details"><div className="detail-row"><GraduationCap size={22} /><div><small>Education</small><strong>B.Tech, Computer Science & Business Systems</strong><span>Chennai Institute of Technology · 2023—2027</span></div></div><div className="detail-row"><Trophy size={22} /><div><small>Highlights</small><strong>GATE CSE 2026 qualified · 721+ LeetCode problems</strong><span>HackChrono & CITIL SDG Hackathon finalist</span></div></div><div className="detail-row"><Code2 size={22} /><div><small>Currently exploring</small><strong>Applied AI, distributed systems & enterprise Java</strong><span>Always learning, always building</span></div></div></div></div></section>

      <section className="experience shell"><p className="eyebrow">Experience</p><div className="experience-list"><div className="experience-item"><span>2026</span><h3>Project Trainee</h3><p>Zoho</p><small>Enterprise Java, Jakarta EE & Git workflows</small></div><div className="experience-item"><span>2025—26</span><h3>Software Development Intern</h3><p>Mobile Application Development COE · CIT</p><small>FastAPI, REST APIs & campus platform engineering</small></div></div></section>

      <footer id="contact"><div className="shell footer-content"><p className="eyebrow"><span /> Say hello</p><h2>Have an idea?<br /><em>Let’s make it real.</em></h2><a className="email-link" href="mailto:shanmugasundaramm13@gmail.com">shanmugasundaramm13@gmail.com <ArrowUpRight size={26} /></a><div className="footer-bottom"><span>© {new Date().getFullYear()} Shanmugasundaram M</span><div><a href="https://www.linkedin.com/in/shanmugasundaram-m" target="_blank" rel="noreferrer"><ArrowUpRight size={17} /> LinkedIn</a><a href="https://github.com/sundarammss" target="_blank" rel="noreferrer"><ArrowUpRight size={17} /> GitHub</a><a href="mailto:shanmugasundaramm13@gmail.com"><Mail size={17} /> Email</a></div></div></div></footer>
    </main>
  )
}
export default App
