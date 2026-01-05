import { useCallback } from 'react';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

interface ListaProps {
  productos: Producto[];
}

export default function ListaProductos({ productos }: ListaProps) {

  const seleccionarProducto = useCallback((producto: Producto) => {
    console.log("Producto seleccionado:", producto.nombre);
    console.log("Precio:", producto.precio);
  }, []);

  return (
    <ul>
      {productos.map(producto => (
        <li key={producto.id}>
          <button onClick={() => seleccionarProducto(producto)}>
            {producto.nombre} - ${producto.precio}
          </button>
        </li>
      ))}
    </ul>
  );
}
