# 🚀 CoWrite

**A real-time collaborative document editor built with Next.js, Clerk authentication, Liveblocks realtime sync, and Lexical rich-text editing. Designed with a clean, modern, and production-ready architecture.**

---

## 🔍 Project Overview

**CoWrite** is a modern document collaboration platform that enables:

* Real-time multi-user editing
* Secure authentication
* Document management
* Role-based access control
* Inline comments & discussions
* Dockerized deployment

---

## ✨ Key Features

* 🔐 **Authentication**

  * Secure sign-in/sign-up using Clerk

* 📄 **Document Management**

  * Create, view, and delete documents

* ⚡ **Real-Time Collaboration**

  * Multiple users can edit simultaneously

* 👥 **Role-Based Access**

  * `editor` → can edit
  * `viewer` → read-only

* 📤 **Sharing System**

  * Invite collaborators via email
  * Control access levels

* 💬 **Comments & Threads**

  * Add inline comments and replies

* 🔔 **Notifications**

  * Real-time updates via Liveblocks

* 🐳 **Docker Support**

  * Fully containerized setup

---

## 🧱 Tech Stack

* Next.js 14
* React 18
* TypeScript
* Tailwind CSS
* Clerk Authentication
* Liveblocks Realtime
* Lexical Editor
* Sentry Monitoring
* Docker & PM2

---

## 📂 Project Structure

app/

* layout.tsx
* Provider.tsx
* (root)/page.tsx
* documents/[id]/page.tsx
* (auth)/sign-in
* (auth)/sign-up
* api/liveblocks-auth

components/

* CollaborativeRoom.tsx
* ShareModal.tsx
* ActiveCollaborators.tsx
* Comments.tsx
* editor/Editor.tsx

lib/

* actions/room.actions.ts
* actions/user.actions.ts
* liveblocks.ts

Dockerfile
docker-compose.yml

---

## ⚙️ Environment Variables

Create a `.env.local` file:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
SENTRY_AUTH_TOKEN=your_sentry_auth_token

---

## ▶️ Run Locally

npm install
npm run dev

Open: http://localhost:3000

---

## 🐳 Docker Deployment

docker-compose up --build

App runs on: http://localhost:3000

---

## 📝 How It Works

### Dashboard (/)

* View all documents
* Create or delete documents
* Open documents

### Editor (/documents/[id])

* Real-time editing
* Rename document
* Share access
* Add comments
* View active collaborators

---

## 🔄 Collaboration Flow

1. Create document → generates unique room ID
2. Share with users → assign roles
3. Notifications via Liveblocks
4. Real-time sync
5. Delete document → removes room

---

## 🔐 Authentication & Authorization

* Clerk handles authentication
* Role-based access stored in metadata

editor → read + write
viewer → read only

---

## 🛠️ Scripts

npm run dev
npm run build
npm start
npm run lint

---

## 📦 Key Dependencies

* next
* @clerk/nextjs
* @liveblocks/react
* lexical
* tailwindcss
* @radix-ui/*
* @sentry/nextjs

---

## 🎨 UI & Design

* Custom components
* Radix UI
* Tailwind CSS
* Lucide icons

---

## 📄 License

This project is for educational and personal use.

---

## 💡 Author

Aparna Ojha

---

✨ Built with focus on performance, collaboration, and clean architecture.
