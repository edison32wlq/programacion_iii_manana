import { useState } from 'react';
import Calculo from './calculo';

export default function CalculoParent() {
  const [precio, setPrecio] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  const calcularTotal = () => {
    const total = precio * cantidad;
    alert(`Precio Total: ${total}`);
  };

  return (
    <>
      <h3>Calculadora</h3>

      <Calculo
        precio={precio}
        cantidad={cantidad}
        onChangePrecio={setPrecio}
        onChangeCantidad={setCantidad}
        onCalcular={calcularTotal}
      />
    </>
  );
}
