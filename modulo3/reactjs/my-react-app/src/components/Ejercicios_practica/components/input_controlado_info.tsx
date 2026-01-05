import { useState } from "react";

export default function InputControladoInfo() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText(`${nombre} ${apellido}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ingrese su nombre"
      />

      <input
        type="text"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        placeholder="Ingrese su apellido"
      />
      <button type="submit">Enviar</button>

      {submittedText && <p>Nombre Completo: {submittedText}</p>}
    </form>
  );
}
