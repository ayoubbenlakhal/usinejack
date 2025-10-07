// src/components/RequireAuth.jsx
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const location = useLocation();

  // 🚫 If not authenticated → always go to AcademyGate
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/academy-gate"
        state={{ from: location.pathname }} // ✅ only store pathname
        replace
      />
    );
  }

  // ✅ If authenticated → allow access
  return children;
}
