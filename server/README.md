# Dark Shell API

Initial authentication API foundation for the Dark Shell Portfolio.

Production-ready API foundation: PostgreSQL persistence, bcrypt password hashing, signed JWT authentication, Zod validation, Helmet, rate limiting, and optional SMTP contact delivery.

## Run

```powershell
npm install
npm run dev
```

Copy `.env.example` to `.env`, set a PostgreSQL `DATABASE_URL` and a random `JWT_SECRET` of at least 32 characters. The API creates its tables on startup. Use `Authorization: Bearer <token>` for protected routes.

Health check: `GET http://localhost:4000/api/health`
