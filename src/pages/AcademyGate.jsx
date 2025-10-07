import { Link, useLocation, useNavigate } from "react-router-dom";

export default function AcademyGate() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src="http://kb-oss-ali.chinajack.com/2025-06-06%2013%3A55%3A21%E5%BF%ABEN.png"
          alt="Couturière professionnelle utilisant une machine industrielle"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-blue-900/60"></div>
      </div>

      {/* Restricted content card */}
      <div className="relative z-10 bg-card/90 backdrop-blur-md rounded-2xl shadow-industrial p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold mb-2 text-white">Access restricted</h1>
        <p className="text-slate-200 mb-6">
          You need to log in to view this page.
        </p>

        {/* Buttons side by side */}
        <div className="flex justify-center gap-4">
          {/* Take me back */}
          <button
            onClick={() => navigate(-1)}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Back
          </button>

          {/* Login */}
          <Link
            to="/login"
            state={{ from: location.state?.from }}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
