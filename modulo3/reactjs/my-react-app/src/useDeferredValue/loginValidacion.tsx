import { useState, useDeferredValue } from 'react';

export default function ValidacionLogin() {
  const [email, setEmail] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [password, setPassword] = useState('');
  const emailDiferido = useDeferredValue(email);
  const passwordDiferido = useDeferredValue(password);

const pass = '123456';

  const esValido = emailDiferido.includes("@") && emailDiferido.includes(".");
  const passValido = passwordDiferido === pass;


  const valido = () => {
    alert(`Ingreso exitoso`)
  }
  return (
    <>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Tu correo electrónico" />
      <input type="text" value={nombres} onChange={e => setNombres(e.target.value)} placeholder="Tus nombres" />
      <input type="text" value={apellidos} onChange={e => setApellidos(e.target.value)} placeholder="Tu apellidos" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Tu constraseña" />
      <p style={{ color: esValido ? 'lightgreen' : 'salmon' }}>
        {emailDiferido === "" ? "Esperando..." : esValido ? "Email válido" : "Email inválido"}
      </p>

      <p style={{ color: passValido ? 'lightgreen' : 'salmon' }}>
        {passwordDiferido === "" ? "Esperando..." : passValido ? "Constraseña valida" : "Constraseña inválida"}
      </p>
      <button onClick={valido}>Ingresar</button>
    </>
  );
}