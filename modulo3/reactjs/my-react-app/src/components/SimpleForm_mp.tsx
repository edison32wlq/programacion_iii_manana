import { useState } from 'react';

export default function TechStoreWelcomeFormMP() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage('Por favor ingresa tu nombre para continuar.');
      return;
    }

    setMessage(`Bienvenido a TechStore, ${name}. ¿Qué vas a comprar hoy?`);

    setName('');
  };

  return (
    <div>
      <h2>Registro rápido - TechStore</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
