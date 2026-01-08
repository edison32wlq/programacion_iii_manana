import { useState } from 'react';

export default function FormularioPentagono() {
  const [perimetro, setPerimetro] = useState(0);
  const [apotema, setApotema] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const resultado = (perimetro * apotema)/2;
    alert(`Resultado: (${perimetro} * ${apotema}) /2 = ${resultado}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="perimetro"
        value={perimetro}
        onChange={e => setPerimetro(Number(e.target.value))}
      /><br />

      <input
        type="number"
        placeholder="Apotema"
        value={apotema}
        onChange={e => setApotema(Number(e.target.value))}
      /><br />

      <button type="submit">Enviar</button>
    </form>
  );
}