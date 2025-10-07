import { Link, useLocation, useNavigate } from "react-router-dom";
import { Cog } from "lucide-react"; // ⚙️ Icône engrenage

export default function AcademyGateMec() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src="http://kb-oss-ali.chinajack.com/2025-06-06%2013%3A55%3A21%E5%BF%ABEN.png"
          alt="Mécanicien travaillant sur une machine industrielle"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-blue-900/60"></div>
      </div>

      {/* Mechanic content card */}
      <div className="relative z-10 bg-card/90 backdrop-blur-md rounded-2xl shadow-industrial p-8 max-w-md text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Cog className="text-white w-7 h-7" />
          <h1 className="text-2xl font-bold text-white">Mechanic Academy</h1>
        </div>

        <p className="text-slate-200 mb-6">
          Formations techniques, tutoriels de maintenance et solutions de
          dépannage dédiés aux{" "}
          <span className="font-semibold text-primary">
            mécaniciens industriels
          </span>.
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

          {/* Go to LoginMec → then Maintenance */}
          <Link
            to="/login-mec"
            state={{ from: "/maintenance-command-center-service-hub" }}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Enter
          </Link>
        </div>
      </div>
    </div>
  );
}
