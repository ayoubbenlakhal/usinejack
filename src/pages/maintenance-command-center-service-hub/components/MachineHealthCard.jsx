import React from "react";

export default function HealthCard() {
  return (
    <div className="bg-green-50 border border-green-300 p-4 rounded-2xl shadow">
      <h2 className="font-bold text-lg text-green-700">💡 Conseils Santé Machine</h2>
      <p className="text-sm text-green-600">
        Entretien régulier : nettoyage, lubrification et vérification des pièces.
      </p>
    </div>
  );
}
