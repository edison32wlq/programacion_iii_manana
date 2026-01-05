import { useState, useCallback } from 'react';

export default function ContadorMP() {
  const [carrito, setCarrito] = useState(0);

  const agregarAlCarrito = useCallback(() => {
    setCarrito(c => c + 1);
  }, []);

  return (
    <button onClick={agregarAlCarrito}>
      Agregar mouse gamer (Carrito: {carrito})
    </button>
  );
}
