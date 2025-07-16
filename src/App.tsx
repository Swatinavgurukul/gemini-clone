// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthForm } from './components/AuthForm';
import { Dashboard } from './components/Dashboard';
import { Chatroom } from './components/Chatroom';
import { ThemeToggle } from './components/ThemeToggle';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <ThemeToggle />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Dashboard /> : <AuthForm />} />
          <Route path="/chatroom/:id" element={<Chatroom />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </Router>
  );
}

export default App;
