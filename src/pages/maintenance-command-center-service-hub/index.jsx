// pages/maintenance-command-center-service-hub/index.jsx
import React, { useState } from "react";
import Header from "../../components/ui/Header";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Icon from "../../components/AppIcon";

// ================= HEADER =================
const MechanicHeader = ({ onDiagnosticClick }) => (
  <div className="bg-[rgb(11,114,179)] text-white shadow-lg">
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-6">
      
      {/* Logo + Texte */}
      <div className="flex flex-col items-center lg:items-start gap-4">
        {/* Logo */}
        <img 
          src="https://jackstore.ma/wp-content/uploads/2024/03/cropped-HEADER-1.png" 
          alt="JackStore Logo"
          className="h-16 object-contain"
        />
        
        {/* Texte */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Centre E-Learning — Machines</h1>
          <p className="mt-3 text-blue-100 text-lg">
            Formations, diagnostics, historique et assistance en un seul endroit.
          </p>
        </div>
      </div>

      {/* Bouton Diagnostic à droite */}
      <div className="flex flex-col items-center gap-3 relative">
        {/* Flèche animée */}
        <div className="absolute -top-10 animate-bounce">
          <Icon name="ArrowDown" size={30} className="text-yellow-300" />
        </div>

        <Button
          variant="default"
          iconName="Search"
          onClick={onDiagnosticClick}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl shadow-md"
        >
          Diagnostic
        </Button>
      </div>
    </div>
  </div>
);

// ================= DIAGNOSTIC MODAL =================
const DiagnosticModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const tutorials = [
    {
      id: 1,
      machine: "JUKI DDL-8700",
      error: "Fil cassé",
      type: "video",
      title: "Réparer un fil cassé sur JUKI DDL-8700",
      url: "https://www.youtube.com/embed/abcd1234",
    },
    {
      id: 2,
      machine: "Brother S-7300A",
      error: "Problème de tension",
      type: "pdf",
      title: "Guide PDF : Réglage de tension Brother S-7300A",
      url: "/guides/brother-tension.pdf",
    },
    {
      id: 3,
      machine: "Jack A4",
      error: "Aiguille cassée",
      type: "video",
      title: "Changer aiguille Jack A4",
      url: "https://www.youtube.com/embed/efgh5678",
    },
  ];

  const results = tutorials.filter(
    (t) =>
      t.machine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.error.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl shadow-lg p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">🔍 Diagnostic & Tutoriels</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg text-muted-foreground"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <Input
          placeholder="Entrez machine, erreur ou mot clé..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="mt-6 space-y-4">
          {results.length > 0 ? (
            results.map((r) => (
              <div
                key={r.id}
                className="border border-border rounded-lg p-4 hover:shadow-md transition"
              >
                <h3 className="font-semibold">{r.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {r.machine} — {r.error}
                </p>

                {r.type === "video" ? (
                  <div className="mt-3 aspect-video">
                    <iframe
                      src={r.url}
                      title={r.title}
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-primary hover:underline"
                  >
                    📄 Ouvrir le PDF
                  </a>
                )}
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">
              Aucun tutoriel trouvé. Essayez un autre mot clé.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// ================= HEALTH CARD =================
const HealthCard = ({ machine }) => (
  <div className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
        <Icon name="Book" size={22} className="text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{machine?.name}</h3>
        <p className="text-sm text-muted-foreground">{machine?.model}</p>
      </div>
    </div>
    <p className="text-sm text-muted-foreground">{machine?.description}</p>
    <Button className="mt-4 w-full" variant="outline">
      Voir Tutoriels
    </Button>
  </div>
);

// ================= SERVICE SCHEDULER =================
const ServiceScheduler = ({ isOpen, onClose }) => {
  const [mechanic, setMechanic] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [date, setDate] = useState("");
  const [problem, setProblem] = useState("");

  const handleSave = () => {
    console.log("Infos mécanicien :", mechanic);
    console.log("Date choisie :", date);
    console.log("Problème :", problem);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card rounded-xl p-6 shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-3">📅 Planifier un Service</h2>

        {/* Infos mécanicien */}
        <Input
          placeholder="Nom du mécanicien"
          value={mechanic.name}
          onChange={(e) => setMechanic({ ...mechanic, name: e.target.value })}
        />
        <Input
          placeholder="Téléphone"
          value={mechanic.phone}
          onChange={(e) => setMechanic({ ...mechanic, phone: e.target.value })}
          className="mt-3"
        />
        <Input
          placeholder="Email"
          value={mechanic.email}
          onChange={(e) => setMechanic({ ...mechanic, email: e.target.value })}
          className="mt-3"
        />

        {/* Date */}
        <label className="block text-sm font-medium mt-4 mb-1">
          Date souhaitée :
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-border rounded-lg px-3 py-2"
        />

        {/* Problème */}
        <label className="block text-sm font-medium mt-4 mb-1">
          Décrire le problème :
        </label>
        <textarea
          rows={3}
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="Ex: La machine ne démarre pas, fil cassé..."
          className="w-full border border-border rounded-lg px-3 py-2"
        />

        {/* Enregistrer */}
        <Button className="mt-4 w-full" onClick={handleSave}>
          Enregistrer
        </Button>
      </div>
    </div>
  );
};

// ================= EMERGENCY =================
const EmergencySupport = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 bg-red-600 text-white rounded-full shadow-lg p-4 hover:bg-red-700 transition"
  >
    <Icon name="AlertTriangle" size={24} />
  </button>
);

// ================= MAIN =================
const MaintenanceCommandCenter = () => {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  const machines = [
    {
      id: 1,
      name: "JUKI DDL-8700",
      model: "Piqueuse Plate",
      description: "Tutoriels disponibles : réglages, entretien, dépannage.",
    },
    {
      id: 2,
      name: "Brother S-7300A",
      model: "Surjeteuse 5 Fils",
      description: "Tutoriels PDF et vidéos pour réparation rapide.",
    },
    {
      id: 3,
      name: "Jack A4",
      model: "Automatique",
      description: "Guide complet et support en ligne.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MechanicHeader
        onStartClick={() => console.log("Start")}
        onDiagnosticClick={() => setIsDiagnosticOpen(true)}
      />

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* Machines */}
        <section>
          <h2 className="text-2xl font-bold mb-6">📚 Catalogue des Machines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map((m) => (
              <HealthCard key={m.id} machine={m} />
            ))}
          </div>
        </section>

        {/* Nouvelle Section Info + Bouton Planifier */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-md flex flex-col items-center text-center relative">
          <p className="text-lg text-muted-foreground max-w-xl">
            ❗ Si vous ne trouvez pas la solution à votre problème, 
            vous pouvez vous rendre au magasin ou à l’usine{" "}
            <span className="font-semibold text-primary">Jack</span> la plus proche.
          </p>

          {/* Flèche vers le bouton */}
          <div className="absolute -bottom-10 animate-bounce">
            <Icon name="ArrowDownRight" size={40} className="text-yellow-400" />
          </div>
        </div>

        {/* Gros bouton Planifier */}
        <div className="flex justify-center mt-16">
          <Button
            variant="default"
            onClick={() => setIsSchedulerOpen(true)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-10 py-6 rounded-2xl shadow-lg"
          >
            📅 Planifier un Service
          </Button>
        </div>
      </div>

      {/* Modals */}
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
      />
      <ServiceScheduler
        isOpen={isSchedulerOpen}
        onClose={() => setIsSchedulerOpen(false)}
      />

      {/* Emergency Floating Button */}
      <EmergencySupport onClick={() => alert("Contacter un technicien !")} />
    </div>
  );
};

export default MaintenanceCommandCenter;
