import React from "react";

export default function MechanicHeader({ title }) {
  return (
    <div className="bg-card border-b border-border p-4 rounded-2xl shadow">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <p className="text-sm text-gray-500">Centre E-learning des machines à coudre</p>
    </div>
  );
}
