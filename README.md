# Gemini Frontend Clone – Kuvaka Tech Assignment

This is a fully functional, responsive, Gemini-style conversational AI chat application built using **React**, **Redux**, and **Tailwind CSS**. It simulates OTP login, chatroom management, AI messaging, image uploads, and modern UI/UX features.

### 🚀 Live URL
[https://your-vercel-app.vercel.app](https://your-vercel-app.vercel.app)

---

## 📦 Tech Stack

| Feature              | Tech Stack / Library           |
|----------------------|--------------------------------|
| Framework            | React (with TypeScript)        |
| State Management     | Redux + Redux Toolkit          |
| Form Validation      | React Hook Form                |
| Styling              | Tailwind CSS                   |
| Deployment           | Vercel                         |
| Image Upload         | Base64 via FileReader          |
| AI Response          | Simulated via setTimeout       |

---

## 🧠 Features

### Authentication
- OTP-based login using country code (simulated)
- Validated forms using React Hook Form

### Dashboard
- Create/Delete chatrooms
- Debounced search to filter chatrooms
- Toast notifications

### Chatroom Interface
- User and AI messages with timestamps
- “Gemini is typing…” indicator
- Simulated delayed AI responses
- Auto-scroll to latest message
- Reverse infinite scroll with dummy data
- Client-side message pagination
- Image upload in chat (base64 preview)
- Copy-to-clipboard on message hover

### Global UX
- Mobile responsive
- Dark mode toggle
- Toasts for all key actions
- Loading skeletons
- Keyboard accessibility
- LocalStorage for auth/chat persistence

---

## 📁 Folder Structure

/src
├── components/
│ ├── AuthForm.tsx
│ ├── Dashboard.tsx
│ ├── Chatroom.tsx
│ ├── ThemeToggle.tsx
│ └── LoadingSkeleton.tsx
├── redux/
│ ├── store.ts
│ ├── authSlice.ts
│ └── chatSlice.ts
├── utils/
│ └── storage.ts
├── App.tsx
├── index.tsx
└── index.css


---

## 🧪 How Features Were Implemented

- **Throttling**: `setTimeout` delays AI responses
- **Pagination & Scroll**: Paginated dummy data with reverse scroll logic
- **Validation**: React Hook Form
- **Persistence**: Redux state saved/loaded via `localStorage`
- **Image Upload**: Base64 using FileReader API
- **Copy to Clipboard**: `navigator.clipboard.writeText`

---

## 🛠️ Getting Started

```bash
git clone https://github.com/your-username/gemini-clone.git
cd gemini-clone
npm install
npm start
