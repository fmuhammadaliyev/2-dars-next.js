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

  return (
    <div>
      {data.map(({ title, completed }) => (
        <div key={title}>
          <h2 className="font-bold">{title}</h2>
          <p>{completed ? "Rost" : "Yolg'on"}</p>
        </div>
      ))}
    </div>
  );
}
