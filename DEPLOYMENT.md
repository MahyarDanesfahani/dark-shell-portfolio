# Dark Shell Portfolio — MVP Release Guide

## Local development

### Frontend
```powershell
cd client
npm install
npm run dev
```

### Backend
```powershell
cd server
npm install
npm run dev
```

Frontend: `http://localhost:5173` — API: `http://localhost:4000`.

## MVP release checklist

- [x] Responsive public portfolio UI
- [x] Project and learning showcase
- [x] Collaboration workflow UI
- [x] Initial authentication and portfolio APIs
- [x] Environment variable template
- [x] Production build verification
- [x] PostgreSQL persistence (tables are initialized on API startup)
- [x] Password hashing and secure JWT authentication
- [x] Request validation and rate limiting
- [x] Real email/contact delivery (SMTP configuration)
- [ ] Error monitoring and automated integration tests

Before deploying, set `DATABASE_URL`, a random `JWT_SECRET` (32+ characters), `CLIENT_ORIGIN`, and the SMTP variables in `server/.env`. Never commit `.env`. The health endpoint reports database availability at `/api/health`.

The current API is a development MVP and stores data in memory. Do not use it for real user data until the unchecked security and persistence items are implemented.
