import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 4000
const users = []

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'dark-shell-api' }))

app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) return res.status(400).json({ message: 'name, email and password are required' })
  if (users.some(user => user.email === email)) return res.status(409).json({ message: 'email already exists' })
  const user = { id: crypto.randomUUID(), name, email, password, role: 'member', createdAt: new Date().toISOString() }
  users.push(user)
  res.status(201).json({ user: publicUser(user), message: 'account created' })
})

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body
  const user = users.find(item => item.email === email && item.password === password)
  if (!user) return res.status(401).json({ message: 'invalid credentials' })
  res.json({ user: publicUser(user), token: `demo-token-${user.id}` })
})

app.get('/api/me', (req, res) => {
  const id = req.headers['x-demo-user-id']
  const user = users.find(item => item.id === id)
  if (!user) return res.status(401).json({ message: 'authentication required' })
  res.json({ user: publicUser(user) })
})

function publicUser({ password, ...user }) { return user }

app.listen(port, () => console.log(`Dark Shell API listening on http://localhost:${port}`))
