import React from "react";

export default function PastOrder() {
  return (
    <div className="bg-white border p-4 rounded-2xl shadow">
      <h2 className="font-bold text-lg">📦 Historique des commandes</h2>
      <ul className="list-disc ml-5 text-sm text-gray-600">
        <li>Aiguilles (20/09/2025)</li>
        <li>Huile machine (05/09/2025)</li>
      </ul>
    </div>
  );
}
