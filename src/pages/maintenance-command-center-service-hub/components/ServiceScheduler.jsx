import React, { useState } from "react";

export default function ServiceScheduler() {
  const [date, setDate] = useState("");

  return (
    <div className="bg-white border p-4 rounded-2xl shadow">
      <h2 className="font-bold text-lg">🗓 Planifier un service</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border rounded-lg mt-2"
      />
      {date && <p className="text-sm text-gray-600 mt-2">Service planifié le {date}</p>}
    </div>
  );
}
