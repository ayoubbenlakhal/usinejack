// src/components/RequireAuthMec.jsx
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuthMec({ children }) {
  const isAuthenticatedMec =
    localStorage.getItem("isAuthenticatedMec") === "true";
  const location = useLocation();

  // 🚫 If not logged in → go to login-mec
  if (!isAuthenticatedMec) {
    return (
      <Navigate
        to="/login-mec"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  // ✅ If logged in → allow access
  return children;
}
