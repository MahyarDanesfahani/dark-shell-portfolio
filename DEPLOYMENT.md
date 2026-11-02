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
- [ ] PostgreSQL persistence
- [ ] Password hashing and secure JWT/session handling
- [ ] Request validation and rate limiting
- [ ] Real email/contact delivery
- [ ] Error monitoring and automated tests

The current API is a development MVP and stores data in memory. Do not use it for real user data until the unchecked security and persistence items are implemented.
