import { useState } from 'react';

export default function TechProductSearch() {
  const [query, setQuery] = useState('');

  return (
    <div>
      <h3>Buscar producto</h3>

      <input
        type="text"
        placeholder="Buscar producto (Laptop, Mouse, Teclado...)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <p>
          Buscando: <strong>{query}</strong>
        </p>
      )}
    </div>
  );
}
