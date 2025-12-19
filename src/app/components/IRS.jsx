export default async function IRS() {
  const req = await fetch("https://jsonbek.uz/api/todos", {
    next: {
      revalidate: 60,
    },
  });
  const data = await req.json();
  return (
    <div>
      {data.map(({ title, completed }) => {
        return (
          <div key={title}>
            <h2 className="font-bold ">{title}</h2>
            <p>{completed ? "Rost" : "Yolg'on"}</p>
          </div>
        );
      })}
    </div>
  );
}
