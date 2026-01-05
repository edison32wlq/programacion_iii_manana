import { useState } from 'react';

export default function ButtonCounterMP() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Has hecho clic {count} veces
      </button>
      {count === 10 && <p>¡Llegaste a 10 productos!</p>}
    </div>
  );
}
