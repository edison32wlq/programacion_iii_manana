import { useState } from 'react';

export default function TechProductDetailsToggle() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <h3>Laptop Gamer</h3>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
      </button>

      {showDetails && (
        <div>
          <p>Procesador: Ryzen 7</p>
          <p>RAM: 16 GB</p>
          <p>Almacenamiento: 1 TB SSD</p>
          <p>Precio: $1200</p>
        </div>
      )}
    </div>
  );
}
