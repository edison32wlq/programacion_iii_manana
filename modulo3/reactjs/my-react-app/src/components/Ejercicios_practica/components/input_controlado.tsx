import { useState } from "react";

export default function InputControlado() {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ingrese un texto"
      />
      <button type="submit">Enviar</button>

      {submittedText && <p>Texto ingresado: {submittedText}</p>}
    </form>
  );
}
