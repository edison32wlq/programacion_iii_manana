import { useState, useCallback } from 'react';

export default function SaludoMP() {
  const [producto, setProducto] = useState("Mouse Gamer");

  const mostrarDetalle = useCallback(() => {
    alert("Producto seleccionado: " + producto);
  }, [producto]);

  return (
    <>
      <input
        value={producto}
        onChange={e => setProducto(e.target.value)}
        placeholder="Nombre del producto"
      />

      <button onClick={mostrarDetalle}>
        Ver detalle del producto
      </button>
    </>
  );
}
