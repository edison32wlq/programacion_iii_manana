import { useState } from 'react';

export default function ColorBoxMP() {
  const [color, setColor] = useState('lightblue');

  return (
    <>
      <div style={{ width: 100, height: 100, backgroundColor: color }}></div>
      <button onClick={() => setColor('salmon')}>Cambiar color</button>
      <button onClick={() => setColor('blue')}>Color Azul</button>
      <button onClick={() => setColor('red')}>Color Rojo</button>
    </>
  );
}