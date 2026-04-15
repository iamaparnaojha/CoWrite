# LiveDocs

**A collaborative editor built with Next.js, Clerk auth, Liveblocks realtime sync, and Lexical rich-text editing. Designed like an Aparna project—clean, polished, and developer-ready.**

---

## 🔍 Project Overview

`LiveDocs` is a modern document collaboration app with:
- real-time shared editing
- user authentication
- document management
- sharing and access control
- inline comments / threads
- Dockerized deployment

The app is built using Next.js App Router and integrates:
- `@clerk/nextjs` for auth
- `@liveblocks/*` for realtime collaboration
- `lexical` for rich text editing
- `Tailwind CSS` for styling
- `Sentry` for monitoring

---

## ✨ Key Features

- **Authenticated dashboard**: only signed-in users can create/view documents
- **Document list**: create new docs, open existing docs, delete docs
- **Live collaboration**: multiple users edit the same document in real time
- **Role-based access**
  - `editor` can write and modify
  - `viewer` can only view
- **Share modal**: invite collaborators and control access
- **Notifications**: Liveblocks inbox notifications for updates
- **Docker-ready**: includes `Dockerfile` and `docker-compose.yml`

---

## 🧱 Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Clerk authentication
- Liveblocks collaboration
- Lexical rich-text editor
- Sentry error tracking
- Docker / PM2 runtime

---

