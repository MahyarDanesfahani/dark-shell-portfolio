# Dark Shell Portfolio

> A cyberpunk, terminal-inspired developer portfolio and collaboration platform.

## English

### Project Overview

Dark Shell Portfolio is a personal developer website designed to present a developer's identity, resume, skills, projects, learning journey, and professional contact channels. In later phases, it will grow into a platform where users can create profiles, share resumes and portfolios, build teams, and submit project requests for review.

### Design Direction

- Terminal and secure-shell inspired visual language
- Very dark background with neon green accents
- Monospace typography and developer-oriented UI details
- Subtle borders, glow effects, status indicators, and command-line motifs
- Responsive layout for desktop, tablet, and mobile
- Persian-first RTL content support with a polished bilingual-ready structure
- Dark and light theme support where appropriate

### Planned Features

1. Landing page and personal introduction
2. About and resume page
3. Completed and in-progress projects showcase
4. Courses and learning progress page
5. Contact and collaboration page
6. Authentication and registration
7. User dashboard
8. Resume and portfolio submission for users
9. Project request submission for employers
10. Messaging and collaboration workflow
11. Admin panel for managing content and requests

### Technology Stack

- Frontend: React, TypeScript, Vite
- Styling: Tailwind CSS
- Icons: Lucide React
- Motion: Framer Motion
- Backend: Node.js with Express or NestJS
- Database: PostgreSQL
- Authentication: JWT or Auth.js
- File storage: Cloudinary or compatible object storage
- Version control: Git and GitHub
- Deployment: Vercel for the frontend and Render/Railway for the backend

### Project Structure

```text
dark-shell-portfolio/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── data/
│   │   ├── hooks/
│   │   └── assets/
│   └── package.json
├── server/
│   ├── src/
│   │   ├── modules/
│   │   │   ├── users/
│   │   │   ├── projects/
│   │   │   ├── courses/
│   │   │   └── messages/
│   │   ├── middleware/
│   │   └── config/
│   └── package.json
├── README.md
└── .env.example
```

### Progress

| Phase | Description | Status | Progress |
|---|---|---:|---:|
| 0 | Product definition, visual direction, and repository documentation | Complete | 10% |
| 1 | Frontend foundation and visual system | Complete | 25% |
| 2 | Landing page, profile, resume, and contact pages | Complete | 50% |
| 3 | Projects and courses showcase | Complete | 70% |
| 4 | Authentication and user dashboard | Complete | 82% |
| 5 | Resume, portfolio, and team-building workflow | In progress | 86% |
| 6 | Employer project requests and messaging | Planned | 0% |
| 7 | Admin panel, testing, optimization, and deployment | Planned | 0% |

### Development Workflow

Each completed phase will update this README with its current percentage, delivered features, technical decisions, and next steps.

### Phase 1 Update

- Created the React + TypeScript + Vite frontend foundation.
- Added the first Dark Shell visual system with terminal-inspired styling, neon green accents, responsive layout, RTL support, and bilingual-ready content structure.
- Added initial sections for profile, projects, and contact.
- Added a JSON-style profile card and availability status indicator.
- Next: refine content, add real project data, and complete the public pages.

### Phase 2 Update

- Added real developer profile content for Mahyar Danesfahani.
- Added skills and technology modules.
- Added initial project cards for current and planned work.
- Added learning queue for Python/Django, data science, and AI agents.
- Added GitHub and LinkedIn contact channels.
- Next: add a real project data model, project detail pages, and the bilingual language switcher.

### Phase 3 Update

- Added project filtering by technology.
- Added project counters and visible project states.
- Added a data-driven learning queue with course progress percentages.
- Added completed and in-progress course states.
- Next: connect projects and courses to a backend or editable content store.

### Phase 4 Update

- Added the first login/register access gate UI.
- Added a responsive authentication card with email and password fields.
- Added a placeholder for the future user dashboard workflow.
- Clearly marked the authentication service as a future backend task.
- Next: implement real registration, login, protected routes, and user profiles.

### Phase 5 Update

- Added the Node.js/Express backend foundation in `server/`.
- Added health-check endpoint at `/api/health`.
- Added development registration, login, and current-user endpoints.
- Added public-user sanitization so passwords are never returned by the API response.
- Added a server README with local run instructions and production warnings.
- Important: storage is currently in memory and is for development only; PostgreSQL, password hashing, JWT/session security, validation, and rate limiting are next.

### Developer Profile

**Mahyar Danesfahani** (`mahyarSW`) is a junior full-stack developer with a Bachelor's degree in Computer Engineering from Zanjan University and a strong interest in building reliable, maintainable software. His main areas of focus include Python, Django, Node.js, Java, Spring Boot, Laravel, React, HTML, CSS, and JavaScript.

He is currently preparing for the Master's entrance examination while continuously expanding his technical skills through practical projects and structured learning. Mahyar values writing code from first principles, understanding the fundamentals behind the tools he uses, and maintaining the ability to solve problems independently.

His professional strengths include patience, attention to detail, commitment to deadlines, prioritization, responsibility, and clear communication. During a project, he prefers regular progress updates and alignment meetings so that clients and teammates always have a clear view of the work.

**Suggested professional title:** Full-Stack Developer | Python, Django, Node.js & React

**Current focus:** Python development, Django, Node.js, AI agents, data science, frontend development, and distinctive user interfaces.

**Links:** [GitHub](https://github.com/MahyarDanesfahani) · [LinkedIn](https://www.linkedin.com/in/mahyar-danesfahani-4a0708414)

## فارسی

### معرفی پروژه

پروژه Dark Shell Portfolio یک وب‌سایت شخصی حرفه‌ای برای معرفی برنامه‌نویس، رزومه، مهارت‌ها، نمونه‌کارها، مسیر یادگیری و راه‌های ارتباطی است. در مراحل بعدی، این سایت به بستری برای ساخت پروفایل کاربران، ثبت رزومه و نمونه‌کار، تشکیل تیم و ارسال درخواست پروژه توسط کارفرما تبدیل خواهد شد.

### جهت‌گیری طراحی

- الهام‌گرفته از ترمینال و محیط Secure Shell
- پس‌زمینه بسیار تیره با جزئیات سبز نئونی
- استفاده از فونت مونو و جزئیات مخصوص دنیای برنامه‌نویسی
- کادرهای ظریف، افکت درخشش، نشانگر وضعیت و المان‌های خط فرمان
- طراحی واکنش‌گرا برای دسکتاپ، تبلت و موبایل
- پشتیبانی اصولی از زبان فارسی و چیدمان راست‌به‌چپ
- امکان پشتیبانی از تم روشن و تاریک در صورت نیاز

### قابلیت‌های برنامه‌ریزی‌شده

صفحه اصلی، معرفی و رزومه، نمونه‌کارها، دوره‌ها و پیشرفت یادگیری، تماس، ثبت‌نام و ورود، داشبورد کاربر، ثبت رزومه و نمونه‌کار، ارسال پروژه توسط کارفرما، پیام‌رسانی، همکاری تیمی و پنل مدیریت.

### معرفی توسعه‌دهنده

من مهیار دانصفهانی، با نام مستعار `mahyarSW`، توسعه‌دهنده جونیور فول‌استک و فارغ‌التحصیل مهندسی کامپیوتر از دانشگاه زنجان هستم. به توسعه نرم‌افزار، حل مسئله و یادگیری مستمر علاقه دارم و در مسیر آماده‌شدن برای آزمون کارشناسی ارشد، مهارت‌هایم را با انجام پروژه‌های عملی گسترش می‌دهم.

تمرکز اصلی من روی Python، Django، Node.js، Java، Spring Boot، Laravel، React، HTML، CSS و JavaScript است. همچنین به ساخت ایجنت‌های هوش مصنوعی، علم داده، توسعه بک‌اند، طراحی رابط‌های کاربری متفاوت و توسعه فرانت‌اند علاقه‌مندم.

در کار، صبور، متعهد و دقیق هستم. برای کیفیت کد، جزئیات، اولویت‌بندی صحیح و تحویل به‌موقع اهمیت زیادی قائلم و ترجیح می‌دهم در طول پروژه با گزارش‌ها و جلسات منظم، کارفرما یا اعضای تیم را از روند پیشرفت مطلع نگه دارم.

### وضعیت فعلی

در مرحله صفر، ایده محصول، مسیر طراحی، تکنولوژی‌ها، ساختار پروژه و برنامه مراحل مشخص شده است. در هر مرحله این فایل به‌روزرسانی خواهد شد و درصد پیشرفت، قابلیت‌های انجام‌شده و گام‌های بعدی در آن ثبت می‌شود.

### نام پیشنهادی ریپازیتوری

`dark-shell-portfolio`

این نام کوتاه، قابل جست‌وجو و هماهنگ با هویت ترمینالی و سایبری طراحی انتخاب شده است.
