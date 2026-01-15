# 📝 Modern TODO Application

A polished, full-stack TODO application built with **Next.js (App Router)**, **Node.js**, and **Prisma**. This project demonstrates clean architecture, responsive design, and robust state management for a real-world scenario.

## 🚀 Live Demo

**[View Live Application](https://todo-web-application-sandy.vercel.app/)**

---

## ✨ Features

- **Core Task Management**:
  - Create, view, update, and delete (CRUD) tasks.
  - Mark tasks as "Done" with persistent status updates.
- **Advanced Filtering & Search**:
  - **Real-time Search**: Instant search by task title.
  - **Status Filters**: Switch between All, Completed, or Pending tasks.
- **Priority System**:
  - Assign priority levels (1–10) to each task.
  - **Sortable**: Order tasks by priority in **ascending** or **descending** order.
- **Database Persistence**:
  - Integrated with a real database via **Prisma ORM** (no data loss on page refresh).
- **Responsive UI**:
  - Fully mobile-friendly design built with **Tailwind CSS**.

---

## 🛠 Tech Stack

| Layer                | Technology                                   |
| :------------------- | :------------------------------------------- |
| **Frontend**         | React, Next.js 15 (App Router), Tailwind CSS |
| **State Management** | Redux Toolkit                                |
| **Backend**          | Next.js API Routes (Node.js)                 |
| **Database**         | Prisma ORM with PostgreSQL                   |
| **Deployment**       | Vercel                                       |

---

## 🏗 Project Structure

The project follows best practices with a clear, modular folder structure:

```text
├── app/
│   ├── api/tasks/          # RESTful API Endpoints
│   ├── layout.tsx          # Global layout and providers
│   ├── create-todo         # Page with form for creating new todo
│   ├── tasks               # Page to view tasks and task ditails
│   └── page.tsx            # Main application UI
├── components/             # Reusable React components
├── hooks/
├── lib/                    # Prisma client initialization
├── prisma/                 # Database schema definitions
├── redux/                  # Redux Toolkit slices and store logic
└── types/                  # TypeScript interfaces and types
```
