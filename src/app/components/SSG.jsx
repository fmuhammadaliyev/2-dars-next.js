export default async function SSG() {
  const req = await fetch("https://jsonbek.uz/api/todos", {
    cache: "force-cache",
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
