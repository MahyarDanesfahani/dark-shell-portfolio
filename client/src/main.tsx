import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const skills = ['Python', 'Django', 'Node.js', 'Java', 'Spring Boot', 'Laravel', 'React', 'JavaScript', 'HTML / CSS']
const projects = [
  { code: 'PROJECT_001', title: 'AI Agent Workspace', text: 'محیطی برای ساخت و مدیریت ایجنت‌های هوش مصنوعی با تمرکز بر پایتون و اتوماسیون.', tags: ['Python', 'AI Agents'], state: 'IN_PROGRESS' },
  { code: 'PROJECT_002', title: 'Developer Portfolio', text: 'وب‌سایت شخصی و پورتفولیوی تعاملی با هویت بصری ترمینالی و معماری قابل توسعه.', tags: ['React', 'TypeScript'], state: 'BUILDING' },
]
const courses = [
  { title: 'Python & Django Backend', provider: 'Practical learning path', progress: 72, state: 'IN_PROGRESS' },
  { title: 'AI Agents with Python', provider: 'Research & implementation', progress: 38, state: 'IN_PROGRESS' },
  { title: 'Modern JavaScript & React', provider: 'Completed foundation', progress: 100, state: 'COMPLETED' },
]

function App() {
  const [filter, setFilter] = useState('ALL')
  const filteredProjects = filter === 'ALL' ? projects : projects.filter(project => project.tags.includes(filter))
  return <div className="site-shell"><div className="scanlines" />
    <header className="topbar"><a className="brand" href="#top"><span className="prompt">&gt;_</span> mahyar<span className="accent">SW</span></a><nav><a href="#about">درباره من</a><a href="#skills">مهارت‌ها</a><a href="#work">نمونه‌کارها</a><a href="#learning">یادگیری</a><a href="#contact">ارتباط</a></nav><div className="status"><i /> <span>AVAILABLE_FOR_WORK</span></div></header>
    <main id="top">
      <section className="hero"><div className="terminal-line"><span className="accent">root@mahyarSW</span>:~/portfolio$ <span className="muted">./introduce.sh</span></div><div className="hero-copy"><p className="eyebrow">FULL-STACK DEVELOPER / 2026</p><h1>ساختن ایده‌ها،<br /><span className="accent">با کد تمیز.</span></h1><p className="lead">من مهیار دانصفهانی هستم؛ توسعه‌دهنده فول‌استک جونیور با تمرکز بر Python، Django، Node.js و React. اینجا اتاق فرمان مسیر حرفه‌ای من است.</p><div className="actions"><a className="button primary" href="#work">مشاهده پروژه‌ها <span>↗</span></a><a className="button ghost" href="#contact">ارتباط با من</a></div></div><div className="hero-meta"><span><b>01</b> PROFILE</span><span><b>02</b> PROJECTS</span><span><b>03</b> LEARNING</span></div></section>
      <section id="about" className="section-grid"><div><p className="eyebrow">// SYSTEM_PROFILE</p><h2>کد، یادگیری،<br />توجه به جزئیات.</h2><p className="section-text">فارغ‌التحصیل مهندسی کامپیوتر از دانشگاه زنجان هستم و با یادگیری مستمر، پروژه‌های عملی و حل مسئله مسیر حرفه‌ای خودم را می‌سازم.</p></div><div className="profile-card"><div className="card-head"><span>profile.json</span><span className="dots">● ● ●</span></div><pre>{`{\n  "name": "Mahyar Danesfahani",\n  "alias": "mahyarSW",\n  "role": "Full-Stack Developer",\n  "focus": ["AI Agents", "Data Science"],\n  "status": "learning + building"\n}`}</pre></div></section>
      <section id="skills" className="skills-section"><div><p className="eyebrow">// INSTALLED_MODULES</p><h2>ابزارهای من</h2></div><div className="skill-list">{skills.map((skill, index) => <span className="skill" key={skill}><b>0{index + 1}</b>{skill}</span>)}</div></section>
      <section id="work" className="work-section"><div className="section-heading"><div><p className="eyebrow">// SELECTED_OUTPUT</p><h2>پروژه‌ها</h2></div><span className="counter">[ {String(filteredProjects.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} ]</span></div><div className="filter-bar">{['ALL', 'Python', 'React'].map(item => <button className={filter === item ? 'filter active' : 'filter'} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div><div className="project-grid">{filteredProjects.map(project => <article className="project-card" key={project.code}><div className="project-top"><span>{project.code}</span><span className="project-state">{project.state}</span></div><h3>{project.title}</h3><p>{project.text}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>
      <section id="learning" className="learning-section"><p className="eyebrow">// LEARNING_QUEUE</p><h2>مسیر یادگیری</h2><div className="course-grid">{courses.map(course => <article className="course-card" key={course.title}><div className="project-top"><span>{course.provider}</span><span className="project-state">{course.state}</span></div><h3>{course.title}</h3><div className="progress-track"><span style={{ width: `${course.progress}%` }} /></div><div className="course-meta"><span>PROGRESS</span><strong>{course.progress}%</strong></div></article>)}</div></section>
      <section id="contact" className="contact-section"><p className="eyebrow">// OPEN_CHANNEL</p><h2>بیایید چیزی<br /><span className="accent">خوب بسازیم.</span></h2><p className="contact-copy">برای همکاری، پیشنهاد پروژه یا گفت‌وگوی فنی از طریق لینکدین یا گیت‌هاب با من در ارتباط باشید.</p><div className="contact-links"><a className="email" href="https://github.com/MahyarDanesfahani">GitHub <span>↗</span></a><a className="email" href="https://www.linkedin.com/in/mahyar-danesfahani-4a0708414">LinkedIn <span>↗</span></a></div></section>
    </main><footer><span>© 2026 MAHYAR DANESFAHANI</span><span className="muted">NO TRACE LEFT BEHIND // v0.2.0</span></footer></div>
}
createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
