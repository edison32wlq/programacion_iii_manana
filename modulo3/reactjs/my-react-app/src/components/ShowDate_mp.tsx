export default function ShowDateTimeMP() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return <p>Fecha: {date} – Hora: {time}</p>;
}
