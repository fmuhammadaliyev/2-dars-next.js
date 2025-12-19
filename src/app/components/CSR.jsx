"use client";

import { useEffect, useState } from "react";

export default function CSR() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonbek.uz/api/todos")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Yuklanmoqda...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {data.map(({ title, completed }) => (
        <div
          key={title}
          className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition"
        >
          <h2 className="font-semibold text-lg">{title}</h2>
          <p
            className={`mt-1 text-sm font-medium ${
              completed ? "text-green-600" : "text-red-600"
            }`}
          >
            {completed ? "Rost" : "Yolg'on"}
          </p>
        </div>
      ))}
    </div>
  );
}
