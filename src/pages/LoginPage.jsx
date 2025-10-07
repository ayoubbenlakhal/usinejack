// src/pages/loginPage.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Email et mot de passe requis !");

    // ✅ Save authentication
    localStorage.setItem("isAuthenticated", "true");

    // ✅ Redirect: back to requested path or Learning Academy page
    const redirectTo =
      location.state?.from || "/learning-academy-comprehensive-education-hub";
    navigate(redirectTo, { replace: true });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* 🔹 Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src="https://kb-oss-ali.chinajack.com/2025-06-06%2013%3A58%3A09%E8%BF%87EN.png"
          alt="Login background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-blue-900/60"></div>
      </div>

      {/* 🔹 Login Card */}
      <div className="relative z-10 bg-card/90 backdrop-blur-md rounded-2xl shadow-industrial p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2 text-white">
          Welcome Back
        </h1>
        <p className="text-center mb-6 text-slate-200">
          Login to access learning content
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            className="w-full p-3 border rounded-lg bg-white text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
            className="w-full p-3 border rounded-lg bg-white text-black placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
