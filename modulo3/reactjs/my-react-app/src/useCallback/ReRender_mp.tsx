import { useState, useCallback } from 'react';

interface BotonAccionProps {
  onAgregar: () => void;
}

function BotonAccion({ onAgregar }: BotonAccionProps) {
  console.log("Render BotonAccion");
  return <button onClick={onAgregar}>Agregar al carrito</button>;
}

export default function ReRenderMP() {
  const [carrito, setCarrito] = useState<number>(0);

  const agregarAlCarrito = useCallback(() => {
    alert("✅ Producto agregado al carrito");
    setCarrito(c => c + 1);
  }, []);

  return (
    <>
      <h3>Teclado Mecánico</h3>
      <p>En carrito: {carrito}</p>

      <button onClick={() => setCarrito(c => c + 1)}>
        Incrementar (simula otra acción)
      </button>

      <BotonAccion onAgregar={agregarAlCarrito} />
    </>
  );
}
