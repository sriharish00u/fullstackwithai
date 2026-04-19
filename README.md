# Student Dashboard

A full-stack student management system with JWT authentication built with React 19, Vite, Node.js/Express, and MongoDB.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [API Reference](#api-reference)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Authentication Flow](#authentication-flow)
- [Troubleshooting](#troubleshooting)

---

## Features

- **JWT Authentication** — Register, login, and logout with 1-hour token expiration
- **Password Hashing** — bcryptjs with 10-round salt
- **Student CRUD** — Create, read, update, and soft-delete students
- **Protected Routes** — Dashboard requires valid Bearer token
- **Soft Deletes** — Deleted students are flagged `isDeleted: true`, not removed from DB
- **Auto-logout** — 401 responses from API trigger automatic logout
- **Context API** — Global auth state via `AuthContext`

---

## Tech Stack

| Layer     | Technology                                      |
| --------- | ----------------------------------------------- |
| Frontend  | React 19, Vite 8, React Router 7, Axios 1.15    |
| Backend   | Node.js, Express 5, Mongoose 9, JWT 9, bcryptjs |
| Database  | MongoDB                                         |
| Auth      | JSON Web Tokens (Bearer scheme)                 |

---

## Project Structure

```
day4/
├── backend/
│   ├── middleware/
│   │   └── auth.js          # JWT verification middleware
│   ├── models/
│   │   ├── User.js          # User schema
│   │   └── Student.js       # Student schema (with isDeleted flag)
│   ├── .env                 # Environment variables (not committed)
│   ├── .env.example         # Environment variable template
│   ├── package.json
│   └── server.js            # Express app + all routes
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── StudentForm.jsx   # Add / Edit form
    │   │   └── StudentTable.jsx  # Student list with actions
    │   ├── context/
    │   │   └── AuthContext.jsx   # user, login(), logout(), loading
    │   ├── services/
    │   │   └── auth.js           # Axios API calls + localStorage helpers
    │   ├── App.jsx               # Routes + Dashboard component
    │   └── main.jsx
    ├── index.html
    └── package.json
```

---

## Database Schema

### User

```js
{
  username: { type: String, required: true, unique: true },
  password: String   // bcrypt hash
}
```

### Student

```js
{
  name:      String,
  age:       Number,
  isDeleted: { type: Boolean, default: false }
}
```

---

## API Reference

Base URL: `http://localhost:5000`

### Auth Endpoints

| Method | Path        | Auth | Description              |
| ------ | ----------- | ---- | ------------------------ |
| POST   | `/register` | No   | Create a new user        |
| POST   | `/login`    | No   | Login, returns JWT token |
| GET    | `/profile`  | Yes  | Returns decoded JWT user |

#### POST `/register`

```json
// Request
{ "username": "alice", "password": "secret123" }

// 201 Response
{ "message": "User registered successfully" }

// 400 Errors
{ "message": "Username and password required" }
{ "message": "Username already exists" }
```

#### POST `/login`

```json
// Request
{ "username": "alice", "password": "secret123" }

// 200 Response
{ "token": "<jwt>", "username": "alice" }

// 401 Error
{ "message": "Invalid credentials" }
```

#### GET `/profile` — requires `Authorization: Bearer <token>`

```json
// 200 Response
{
  "message": "Welcome to your profile",
  "user": { "id": "...", "username": "alice", "iat": 0, "exp": 0 }
}
```

---

### Student Endpoints

> **Note:** In the current implementation, student routes do **not** enforce the auth middleware in `server.js`. Only `/profile` uses the `auth` middleware. Add `auth` to student routes if you want to protect them.

| Method | Path             | Description                          |
| ------ | ---------------- | ------------------------------------ |
| GET    | `/students`      | List all students where `isDeleted: false` |
| POST   | `/students`      | Create a student                     |
| PUT    | `/students/:id`  | Update a student by ID               |
| DELETE | `/students/:id`  | Soft-delete (sets `isDeleted: true`) |

#### GET `/students`

```json
// 200 Response
[
  { "_id": "...", "name": "John Doe", "age": 20, "isDeleted": false }
]
```

#### POST `/students`

```json
// Request
{ "name": "Jane Smith", "age": 21 }

// 200 Response
{ "_id": "...", "name": "Jane Smith", "age": 21, "isDeleted": false }
```

#### PUT `/students/:id`

```json
// Request
{ "name": "Jane Smith", "age": 22 }

// 200 Response — updated document
```

#### DELETE `/students/:id`

```json
// 200 Response
{ "message": "Soft deleted" }
```

---

## Setup

### Prerequisites

- Node.js v14+
- MongoDB (local on port 27017, or Atlas)

### Backend

```bash
cd backend
npm install
cp .env.example .env   # then edit .env with your values
npm start
# → MongoDB connected
# → Server running on port 5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

---

## Environment Variables

Create `backend/.env` based on `.env.example`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/studentsDB
JWT_SECRET=your_super_secret_jwt_key_here
```

| Variable     | Description                                      |
| ------------ | ------------------------------------------------ |
| `PORT`       | Express server port (default: 5000)              |
| `MONGO_URI`  | MongoDB connection string                        |
| `JWT_SECRET` | Secret used to sign/verify JWTs — keep it strong |

> Generate a strong secret: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`

The frontend API URL is hardcoded in `frontend/src/services/auth.js`:

```js
const API_URL = "http://localhost:5000";
```

Change this before building for production.

---

## Authentication Flow

```
Register
  → POST /register → hash password → save User → 201

Login
  → POST /login → bcrypt.compare → jwt.sign({ id, username }, secret, { expiresIn: "1h" })
  → store token + username in localStorage
  → AuthContext.login() → setUser({ username })
  → redirect to /dashboard

Protected request
  → read token from localStorage
  → set header: Authorization: Bearer <token>
  → auth middleware: jwt.verify() → attach req.user → next()

Logout
  → clearAuth() removes token + username from localStorage
  → setUser(null) → redirect to /login

401 from API
  → Dashboard catches error → calls logout() automatically
```

---

## Troubleshooting

| Symptom | Likely Cause | Fix |
|---|---|---|
| `MongoDB connected` not shown | MongoDB not running or wrong URI | Start `mongod` or check `MONGO_URI` in `.env` |
| CORS error in browser | Backend not running | Run `npm start` in `backend/` |
| Redirected to `/login` on refresh | Token expired (1h TTL) | Login again |
| `Username already exists` on register | Duplicate username in DB | Use a different username |
| Students not loading after login | Backend down or 401 | Check backend terminal; re-login if token expired |

---

## Notes

- **Soft deletes**: Students with `isDeleted: true` remain in MongoDB and can be recovered by setting the flag back to `false`.
- **Student routes are currently unprotected** — the `auth` middleware is only applied to `GET /profile`. To secure student routes, add `auth` as middleware: `app.get("/students", auth, ...)`.
- **Token storage**: JWT is stored in `localStorage`. For higher security in production, consider `httpOnly` cookies.
- **CORS**: Currently allows all origins (`origin: true`). Restrict to your frontend domain in production.
