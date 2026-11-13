import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const skills = ['Python', 'Django', 'Node.js', 'Java', 'Spring Boot', 'Laravel', 'React', 'JavaScript', 'HTML / CSS']
const projects = [
  { code: 'PROJECT_001', title: 'Cyber Quest', text: 'یک بازی مرورگری برای رمزگشایی و حل چالش‌های کدنویسی؛ مناسب برای تمرین منطق و حل مسئله.', tags: ['JavaScript', 'Game'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/cyber-quest' },
  { code: 'PROJECT_002', title: 'Building Manager', text: 'پروژه‌ای نرم‌افزاری برای مدیریت فرایندها و اطلاعات حوزه‌ی ساختمان، با تمرکز بر طراحی ساختاریافته.', tags: ['Python', 'Software'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/building-manager' },
  { code: 'PROJECT_003', title: 'Compiler Project', text: 'پروژه‌ای دانشگاهی و فنی برای شناخت مراحل ساخت کامپایلر و پردازش زبان.', tags: ['Java', 'Compiler'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/Compiler_Project' },
  { code: 'PROJECT_004', title: 'A Library from Frontend', text: 'مجموعه‌ای از کامپوننت‌های آماده‌ی فرانت‌اند با طراحی‌های متنوع و قابل توسعه.', tags: ['CSS', 'Frontend'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/A_library_from_Frontend' },
  { code: 'PROJECT_005', title: 'Dark Shell Portfolio', text: 'همین پورتفولیوی شخصی با هویت بصری ترمینالی و معماری قابل توسعه.', tags: ['React', 'TypeScript'], state: 'BUILDING', url: 'https://github.com/MahyarDanesfahani/dark-shell-portfolio' },
  { code: 'PROJECT_006', title: 'Mini Bank', text: 'وب‌اپلیکیشن فارسی و PWA برای مدیریت صندوق‌های قرض‌الحسنه با FastAPI، JWT و PostgreSQL.', tags: ['Python', 'FastAPI'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/Mini-Bank' },
  { code: 'PROJECT_007', title: 'Rangyar Warehouse', text: 'سامانه یکپارچه فارسی برای مدیریت موجودی چند انبار، بارکد، فروش، حمل و حسابرسی.', tags: ['Node.js', 'ERP'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/rangyar-integrated-warehouse' },
  { code: 'PROJECT_008', title: 'AutoPark', text: 'پروژه‌ای برای مدیریت و سامان‌دهی فرایندهای پارکینگ با تمرکز بر منطق کسب‌وکار.', tags: ['Java', 'Software'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/AutoPark' },
  { code: 'PROJECT_009', title: 'Playlist Music Bot', text: 'بات تلگرامی مدیریت پلی‌لیست شخصی با پشتیبانی فارسی و انگلیسی و ذخیره‌سازی SQLite.', tags: ['Python', 'Telegram'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/PlayList_MusicBot' },
  { code: 'PROJECT_010', title: 'Accounting & Warehousing', text: 'پروژه‌ی دانشگاهی و عملی برای تمرین مفاهیم حسابداری و انبارداری با Java.', tags: ['Java', 'Accounting'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/Accounting_and_warehousing' },
  { code: 'PROJECT_011', title: 'AP ZNU', text: 'مجموعه تمرین‌ها و پروژه‌های درس برنامه‌سازی پیشرفته دانشگاه زنجان.', tags: ['Java', 'Academic'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/AP_znu' },
  { code: 'PROJECT_012', title: 'ZNU Java', text: 'تمرین‌ها و نمونه‌کدهای Java در مسیر یادگیری دانشگاهی.', tags: ['Java', 'Learning'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/znu-java' },
  { code: 'PROJECT_013', title: 'Bank', text: 'تمرین پیاده‌سازی مفاهیم پایه‌ی سیستم‌های بانکی با Java.', tags: ['Java', 'Learning'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/bank' },
  { code: 'PROJECT_014', title: 'Bank Code Java', text: 'نمونه‌کدها و تمرین‌های Java پیرامون منطق حساب بانکی.', tags: ['Java', 'Learning'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/bank.code_java' },
  { code: 'PROJECT_015', title: 'GCD / LCM', text: 'تمرین الگوریتمی برای محاسبه بزرگ‌ترین مقسوم‌علیه مشترک و کوچک‌ترین مضرب مشترک.', tags: ['Java', 'Algorithms'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/gcd-lcm' },
  { code: 'PROJECT_016', title: 'GCD LMC', text: 'نسخه‌ی دیگر تمرین الگوریتمی محاسبه GCD و LCM.', tags: ['Java', 'Algorithms'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/gcd_lmc' },
  { code: 'PROJECT_017', title: 'Code', text: 'مجموعه‌ای از تمرین‌ها و کدهای آموزشی برنامه‌نویسی.', tags: ['Java', 'Learning'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/Code' },
  { code: 'PROJECT_018', title: 'AP Branch Practice', text: 'نسخه‌ی تمرینی شاخه‌های برنامه‌سازی پیشرفته و کار با Git.', tags: ['Java', 'Academic'], state: 'PUBLIC', url: 'https://github.com/MahyarDanesfahani/ap-Branch-main-se-Branch-master' },
]
const courses = [
  { title: 'Python & Django Backend', provider: 'Practical learning path', progress: 72, state: 'IN_PROGRESS' },
  { title: 'AI Agents with Python', provider: 'Research & implementation', progress: 38, state: 'IN_PROGRESS' },
  { title: 'Modern JavaScript & React', provider: 'Completed foundation', progress: 100, state: 'COMPLETED' },
]
const services = [
  { number: '01', title: 'توسعه وب', text: 'ساخت رابط‌های سریع و قابل نگهداری با React، TypeScript و APIهای تمیز.' },
  { number: '02', title: 'بک‌اند و API', text: 'طراحی سرویس‌های قابل اتکا با Python، Django و Node.js برای رشد محصول.' },
  { number: '03', title: 'حل مسئله', text: 'تبدیل ایده و نیازمندی مبهم به مسیر فنی روشن، قابل اجرا و قابل اندازه‌گیری.' },
]

function App() {
  const [filter, setFilter] = useState('ALL')
  const filters = ['ALL', ...Array.from(new Set(projects.flatMap(project => project.tags))).slice(0, 5)]
  const filteredProjects = filter === 'ALL' ? projects : projects.filter(project => project.tags.includes(filter))
  return <div className="site-shell"><div className="scanlines" />
    <a className="skip-link" href="#main-content">پرش به محتوای اصلی</a><header className="topbar"><a className="brand" href="#top"><span className="prompt">&gt;_</span> mahyar<span className="accent">SW</span></a><nav aria-label="ناوبری اصلی"><a href="#about">درباره من</a><a href="#skills">مهارت‌ها</a><a href="#services">خدمات</a><a href="#work">نمونه‌کارها</a><a href="#learning">یادگیری</a><a href="#contact">ارتباط</a></nav><div className="status"><i /> <span>AVAILABLE_FOR_WORK</span></div></header>
    <main id="top">
      <section className="hero"><div className="terminal-line"><span className="accent">root@mahyarSW</span>:~/portfolio$ <span className="muted">./introduce.sh</span></div><div className="hero-copy"><p className="eyebrow">FULL-STACK DEVELOPER / 2026</p><h1>ساختن ایده‌ها،<br /><span className="accent">با کد تمیز.</span></h1><p className="lead">من مهیار دانصفهانی هستم؛ توسعه‌دهنده فول‌استک جونیور با تمرکز بر Python، Django، Node.js و React. اینجا اتاق فرمان مسیر حرفه‌ای من است.</p><div className="actions"><a className="button primary" href="#work">مشاهده پروژه‌ها <span>↗</span></a><a className="button ghost" href="#contact">ارتباط با من</a></div></div><div className="hero-meta"><span><b>01</b> PROFILE</span><span><b>02</b> PROJECTS</span><span><b>03</b> LEARNING</span></div></section>
      <section id="about" className="section-grid"><div><p className="eyebrow">// SYSTEM_PROFILE</p><h2>کد، یادگیری،<br />توجه به جزئیات.</h2><p className="section-text">فارغ‌التحصیل مهندسی کامپیوتر از دانشگاه زنجان هستم و با یادگیری مستمر، پروژه‌های عملی و حل مسئله مسیر حرفه‌ای خودم را می‌سازم.</p></div><div className="profile-card"><div className="card-head"><span>profile.json</span><span className="dots">● ● ●</span></div><pre>{`{\n  "name": "Mahyar Danesfahani",\n  "alias": "mahyarSW",\n  "role": "Full-Stack Developer",\n  "focus": ["AI Agents", "Data Science"],\n  "status": "learning + building"\n}`}</pre></div></section>
      <section id="skills" className="skills-section"><div><p className="eyebrow">// INSTALLED_MODULES</p><h2>ابزارهای من</h2></div><div className="skill-list">{skills.map((skill, index) => <span className="skill" key={skill}><b>0{index + 1}</b>{skill}</span>)}</div></section>
      <section id="services" className="services-section"><p className="eyebrow">// WHAT_I_BUILD</p><h2>ارزشی که می‌سازم</h2><div className="services-grid">{services.map(service => <article className="service-card" key={service.number}><b>{service.number}</b><h3>{service.title}</h3><p>{service.text}</p></article>)}</div></section>
      <section id="work" className="work-section"><div className="section-heading"><div><p className="eyebrow">// SELECTED_OUTPUT</p><h2>پروژه‌ها</h2></div><span className="counter">[ {String(filteredProjects.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} ]</span></div><div className="filter-bar">{filters.map(item => <button className={filter === item ? 'filter active' : 'filter'} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div><div className="project-grid">{filteredProjects.map(project => <article className="project-card" key={project.code}><div className="project-top"><span>{project.code}</span><span className="project-state">{project.state}</span></div><h3>{project.title}</h3><p>{project.text}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.url} target="_blank" rel="noreferrer">مشاهده در گیت‌هاب <span>↗</span></a></article>)}</div></section>
      <section id="learning" className="learning-section"><p className="eyebrow">// LEARNING_QUEUE</p><h2>مسیر یادگیری</h2><div className="course-grid">{courses.map(course => <article className="course-card" key={course.title}><div className="project-top"><span>{course.provider}</span><span className="project-state">{course.state}</span></div><h3>{course.title}</h3><div className="progress-track"><span style={{ width: `${course.progress}%` }} /></div><div className="course-meta"><span>PROGRESS</span><strong>{course.progress}%</strong></div></article>)}</div></section>
      <section id="contact" className="contact-section"><p className="eyebrow">// OPEN_CHANNEL</p><h2>بیایید چیزی<br /><span className="accent">خوب بسازیم.</span></h2><p className="contact-copy">برای همکاری، پیشنهاد پروژه یا گفت‌وگوی فنی از طریق لینکدین یا گیت‌هاب با من در ارتباط باشید.</p><div className="contact-links"><a className="email" href="https://github.com/MahyarDanesfahani">GitHub <span>↗</span></a><a className="email" href="https://www.linkedin.com/in/mahyar-danesfahani-4a0708414">LinkedIn <span>↗</span></a></div></section>
    </main><footer><span>© 2026 MAHYAR DANESFAHANI</span><span className="muted">NO TRACE LEFT BEHIND // v0.2.0</span></footer></div>
}
createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
