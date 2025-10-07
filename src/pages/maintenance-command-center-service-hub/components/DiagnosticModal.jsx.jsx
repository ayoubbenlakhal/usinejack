import React, { useState } from "react";
import Icon from "./AppIcon";
import Button from "./ui/Button";
import Input from "./ui/Input";

const DiagnosticModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Exemple de base de données (tu peux remplacer par ton API plus tard)
  const tutorials = [
    {
      id: 1,
      machine: "JUKI DDL-8700",
      error: "Fil cassé",
      type: "video",
      title: "Réparer un fil cassé sur JUKI DDL-8700",
      url: "https://www.youtube.com/embed/abcd1234"
    },
    {
      id: 2,
      machine: "Brother S-7300A",
      error: "Problème de tension",
      type: "pdf",
      title: "Guide PDF : Réglage de tension Brother S-7300A",
      url: "/guides/brother-tension.pdf"
    },
    {
      id: 3,
      machine: "PFAFF 1245",
      error: "Aiguille cassée",
      type: "video",
      title: "Changer aiguille PFAFF 1245",
      url: "https://www.youtube.com/embed/efgh5678"
    }
  ];

  // Filtrage
  const results = tutorials.filter(
    (t) =>
      t.machine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.error.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-card border border-border rounded-lg shadow-elevated w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Search" size={16} color="white" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">
              Diagnostic & Tutoriels
            </h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg">
            <Icon name="X" size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* FORM */}
        <div className="p-6 space-y-6">
          <Input
            placeholder="Tapez le nom de la machine, erreur ou mot clé..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* RESULTATS */}
          <div className="space-y-4">
            {results.length > 0 ? (
              results.map((r) => (
                <div
                  key={r.id}
                  className="border border-border rounded-lg p-4 hover:shadow-md transition"
                >
                  <h3 className="font-semibold">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {r.machine} – {r.error}
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
    </div>
  );
};

export default DiagnosticModal;
