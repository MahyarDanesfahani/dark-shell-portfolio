import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  return <div className="site-shell">
    <div className="scanlines" />
    <header className="topbar">
      <a className="brand" href="#top"><span className="prompt">&gt;_</span> mahyar<span className="accent">SW</span></a>
      <nav><a href="#about">درباره من</a><a href="#work">نمونه‌کارها</a><a href="#contact">ارتباط</a></nav>
      <div className="status"><i /> <span>AVAILABLE_FOR_WORK</span></div>
    </header>
    <main id="top">
      <section className="hero">
        <div className="terminal-line"><span className="accent">root@mahyarSW</span>:~/portfolio$ <span className="muted">./introduce.sh</span></div>
        <div className="hero-copy"><p className="eyebrow">FULL-STACK DEVELOPER / 2026</p><h1>ساختن ایده‌ها،<br /><span className="accent">با کد تمیز.</span></h1><p className="lead">من مهیار دانصفهانی هستم؛ توسعه‌دهنده فول‌استک جونیور با تمرکز بر Python، Django، Node.js و React. اینجا اتاق فرمان مسیر حرفه‌ای من است.</p><div className="actions"><a className="button primary" href="#work">مشاهده پروژه‌ها <span>↗</span></a><a className="button ghost" href="#contact">ارتباط با من</a></div></div>
        <div className="hero-meta"><span><b>01</b> PROFILE</span><span><b>02</b> PROJECTS</span><span><b>03</b> LEARNING</span></div>
      </section>
      <section id="about" className="section-grid"><div><p className="eyebrow">// SYSTEM_PROFILE</p><h2>کد، یادگیری،<br />توجه به جزئیات.</h2></div><div className="profile-card"><div className="card-head"><span>profile.json</span><span className="dots">● ● ●</span></div><pre>{`{\n  "name": "Mahyar Danesfahani",\n  "alias": "mahyarSW",\n  "role": "Full-Stack Developer",\n  "focus": ["AI Agents", "Data Science"],\n  "status": "learning + building"\n}`}</pre></div></section>
      <section id="work" className="work-section"><div className="section-heading"><div><p className="eyebrow">// SELECTED_OUTPUT</p><h2>پروژه‌ها</h2></div><span className="counter">[ 00 / 00 ]</span></div><div className="empty-state"><span className="big-symbol">⌁</span><p>پروژه‌های جدید در حال آماده‌سازی هستند.</p><span className="muted">projects.loadSoon()</span></div></section>
      <section id="contact" className="contact-section"><p className="eyebrow">// OPEN_CHANNEL</p><h2>بیایید چیزی<br /><span className="accent">خوب بسازیم.</span></h2><a className="email" href="#contact">CONTACT_CHANNEL_PENDING <span>↗</span></a></section>
    </main>
    <footer><span>© 2026 MAHYAR DANESFAHANI</span><span className="muted">NO TRACE LEFT BEHIND // v0.1.0</span></footer>
  </div>
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
