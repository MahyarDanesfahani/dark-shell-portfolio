import { StrictMode, useState, type FormEvent } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './auth.css'
import './workflow.css'

const skills = ['Python', 'Django', 'Node.js', 'Java', 'Spring Boot', 'Laravel', 'React', 'JavaScript', 'HTML / CSS']
const projects = [
  { code: 'PROJECT_001', title: 'Cyber Quest', text: 'یک بازی مرورگری برای رمزگشایی و حل چالش‌های کدنویسی؛ مناسب برای تمرین منطق و حل مسئله.', tags: ['JavaScript', 'Game'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/cyber-quest' },
  { code: 'PROJECT_002', title: 'Building Manager', text: 'پروژه‌ای نرم‌افزاری برای مدیریت فرایندها و اطلاعات حوزه‌ی ساختمان، با تمرکز بر طراحی ساختاریافته.', tags: ['Python', 'Software'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/building-manager' },
  { code: 'PROJECT_003', title: 'Compiler Project', text: 'پروژه‌ای دانشگاهی و فنی برای شناخت مراحل ساخت کامپایلر و پردازش زبان.', tags: ['Java', 'Compiler'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/Compiler_Project' },
  { code: 'PROJECT_004', title: 'A Library from Frontend', text: 'مجموعه‌ای از کامپوننت‌های آماده‌ی فرانت‌اند با طراحی‌های متنوع و قابل توسعه.', tags: ['CSS', 'Frontend'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/A_library_from_Frontend' },
  { code: 'PROJECT_005', title: 'Dark Shell Portfolio', text: 'همین پورتفولیوی شخصی با هویت بصری ترمینالی و معماری قابل توسعه.', tags: ['React', 'TypeScript'], state: 'BUILDING', url: 'https://github.com/MahyarDanesfahani/dark-shell-portfolio' },
]
const courses = [
  { title: 'Python & Django Backend', provider: 'Practical learning path', progress: 72, state: 'IN_PROGRESS' },
  { title: 'AI Agents with Python', provider: 'Research & implementation', progress: 38, state: 'IN_PROGRESS' },
  { title: 'Modern JavaScript & React', provider: 'Completed foundation', progress: 100, state: 'COMPLETED' },
]

function App() {
  const [filter, setFilter] = useState('ALL')
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [authEmail, setAuthEmail] = useState('')
  const [authPassword, setAuthPassword] = useState('')
  const [authName, setAuthName] = useState('')
  const [authMessage, setAuthMessage] = useState('')
  const [authBusy, setAuthBusy] = useState(false)
  const filters = ['ALL', ...Array.from(new Set(projects.flatMap(project => project.tags))).slice(0, 5)]
  const filteredProjects = filter === 'ALL' ? projects : projects.filter(project => project.tags.includes(filter))
  async function submitAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setAuthBusy(true); setAuthMessage('')
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000'
    try {
      const response = await fetch(`${apiUrl}/api/auth/${authMode}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(authMode === 'register' ? { name: authName, email: authEmail, password: authPassword } : { email: authEmail, password: authPassword }) })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'خطا در ارتباط با سرور')
      localStorage.setItem('dark-shell-token', data.token)
      setAuthMessage(authMode === 'login' ? `خوش آمدی ${data.user.name}` : 'حساب کاربری با موفقیت ساخته شد')
      setAuthPassword('')
    } catch (error) { setAuthMessage(error instanceof Error ? error.message : 'ارتباط با سرور برقرار نشد') } finally { setAuthBusy(false) }
  }
  return <div className="site-shell"><div className="scanlines" />
    <header className="topbar"><a className="brand" href="#top"><span className="prompt">&gt;_</span> mahyar<span className="accent">SW</span></a><nav><a href="#about">درباره من</a><a href="#skills">مهارت‌ها</a><a href="#work">نمونه‌کارها</a><a href="#learning">یادگیری</a><a href="#account">ورود</a><a href="#contact">ارتباط</a></nav><div className="status"><i /> <span>AVAILABLE_FOR_WORK</span></div></header>
    <main id="top">
      <section className="hero"><div className="terminal-line"><span className="accent">root@mahyarSW</span>:~/portfolio$ <span className="muted">./introduce.sh</span></div><div className="hero-copy"><p className="eyebrow">FULL-STACK DEVELOPER / 2026</p><h1>ساختن ایده‌ها،<br /><span className="accent">با کد تمیز.</span></h1><p className="lead">من مهیار دانصفهانی هستم؛ توسعه‌دهنده فول‌استک جونیور با تمرکز بر Python، Django، Node.js و React. اینجا اتاق فرمان مسیر حرفه‌ای من است.</p><div className="actions"><a className="button primary" href="#work">مشاهده پروژه‌ها <span>↗</span></a><a className="button ghost" href="#contact">ارتباط با من</a></div></div><div className="hero-meta"><span><b>01</b> PROFILE</span><span><b>02</b> PROJECTS</span><span><b>03</b> LEARNING</span></div></section>
      <section id="about" className="section-grid"><div><p className="eyebrow">// SYSTEM_PROFILE</p><h2>کد، یادگیری،<br />توجه به جزئیات.</h2><p className="section-text">فارغ‌التحصیل مهندسی کامپیوتر از دانشگاه زنجان هستم و با یادگیری مستمر، پروژه‌های عملی و حل مسئله مسیر حرفه‌ای خودم را می‌سازم.</p></div><div className="profile-card"><div className="card-head"><span>profile.json</span><span className="dots">● ● ●</span></div><pre>{`{\n  "name": "Mahyar Danesfahani",\n  "alias": "mahyarSW",\n  "role": "Full-Stack Developer",\n  "focus": ["AI Agents", "Data Science"],\n  "status": "learning + building"\n}`}</pre></div></section>
      <section id="skills" className="skills-section"><div><p className="eyebrow">// INSTALLED_MODULES</p><h2>ابزارهای من</h2></div><div className="skill-list">{skills.map((skill, index) => <span className="skill" key={skill}><b>0{index + 1}</b>{skill}</span>)}</div></section>
      <section id="work" className="work-section"><div className="section-heading"><div><p className="eyebrow">// SELECTED_OUTPUT</p><h2>پروژه‌ها</h2></div><span className="counter">[ {String(filteredProjects.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} ]</span></div><div className="filter-bar">{filters.map(item => <button className={filter === item ? 'filter active' : 'filter'} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div><div className="project-grid">{filteredProjects.map(project => <article className="project-card" key={project.code}><div className="project-top"><span>{project.code}</span><span className="project-state">{project.state}</span></div><h3>{project.title}</h3><p>{project.text}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.url} target="_blank" rel="noreferrer">مشاهده در گیت‌هاب <span>↗</span></a></article>)}</div></section>
      <section id="learning" className="learning-section"><p className="eyebrow">// LEARNING_QUEUE</p><h2>مسیر یادگیری</h2><div className="course-grid">{courses.map(course => <article className="course-card" key={course.title}><div className="project-top"><span>{course.provider}</span><span className="project-state">{course.state}</span></div><h3>{course.title}</h3><div className="progress-track"><span style={{ width: `${course.progress}%` }} /></div><div className="course-meta"><span>PROGRESS</span><strong>{course.progress}%</strong></div></article>)}</div></section>
      <section id="account" className="auth-section"><div><p className="eyebrow">// ACCESS_GATE</p><h2>ورود به<br /><span className="accent">فضای کار.</span></h2><p className="section-text">حساب کاربری خودت را بساز یا وارد فضای کار شو تا اطلاعاتت امن در سیستم ذخیره شود.</p></div><form className="auth-card" onSubmit={submitAuth}><div className="auth-tabs"><button type="button" className={authMode === 'login' ? 'active' : ''} onClick={() => setAuthMode('login')}>LOGIN</button><button type="button" className={authMode === 'register' ? 'active' : ''} onClick={() => setAuthMode('register')}>REGISTER</button></div>{authMode === 'register' && <label>نام<input value={authName} onChange={event => setAuthName(event.target.value)} placeholder="نام شما" required /></label>}<label>ایمیل<input value={authEmail} onChange={event => setAuthEmail(event.target.value)} placeholder="your@email.com" type="email" required /></label><label>رمز عبور<input value={authPassword} onChange={event => setAuthPassword(event.target.value)} placeholder="حداقل ۸ کاراکتر" type="password" minLength={8} required /></label><button className="button primary auth-button" disabled={authBusy}>{authBusy ? 'در حال ارسال...' : authMode === 'login' ? 'ورود به سیستم' : 'ساخت حساب'} <span>→</span></button>{authMessage && <p className="auth-note">{authMessage}</p>}</form></section>
      <section className="workflow-section"><p className="eyebrow">// COLLABORATION_PIPELINE</p><h2>فضای همکاری</h2><div className="workflow-grid"><div className="workflow-item"><b>01</b><h3>پروفایل حرفه‌ای</h3><p>رزومه، مهارت‌ها و سوابق خودت را کامل کن.</p></div><div className="workflow-item"><b>02</b><h3>نمونه‌کارها</h3><p>پروژه‌های انجام‌شده و در حال توسعه را ثبت کن.</p></div><div className="workflow-item"><b>03</b><h3>درخواست پروژه</h3><p>کارفرما می‌تواند نیازمندی پروژه‌اش را برای بررسی ارسال کند.</p></div></div></section>
      <section id="contact" className="contact-section"><p className="eyebrow">// OPEN_CHANNEL</p><h2>بیایید چیزی<br /><span className="accent">خوب بسازیم.</span></h2><p className="contact-copy">برای همکاری، پیشنهاد پروژه یا گفت‌وگوی فنی از طریق لینکدین یا گیت‌هاب با من در ارتباط باشید.</p><div className="contact-links"><a className="email" href="https://github.com/MahyarDanesfahani">GitHub <span>↗</span></a><a className="email" href="https://www.linkedin.com/in/mahyar-danesfahani-4a0708414">LinkedIn <span>↗</span></a></div></section>
    </main><footer><span>© 2026 MAHYAR DANESFAHANI</span><span className="muted">NO TRACE LEFT BEHIND // v0.2.0</span></footer></div>
}
createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
