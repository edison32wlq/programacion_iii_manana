const productos = [
  { dispositivo: 'Celular', marca: 'Apple', precio: 500 },
  { dispositivo: 'Computador', marca: 'LG', precio: 1000 },
  { dispositivo: 'Laptop', marca: 'Mac', precio: 3000 }
];


export default function Productos() {
  return (
    <ul>
      {productos.map((producto, index) => (
        <li key={index}>
          {producto.dispositivo} – Marca: {producto.marca} – Precio: ${producto.precio}
        </li>
      ))}
    </ul>
  );
}