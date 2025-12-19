export default async function IRS() {
  const req = await fetch("https://jsonbek.uz/api/todos", {
    next: { revalidate: 60 },
  });

  const data = await req.json();

  return (
    <div className="grid gap-4">
      {data.map(({ title, completed }) => (
        <div key={title} className="border rounded-lg p-4 shadow-sm bg-white">
          <h2 className="font-semibold">{title}</h2>
          <p
            className={`mt-1 text-sm ${
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
