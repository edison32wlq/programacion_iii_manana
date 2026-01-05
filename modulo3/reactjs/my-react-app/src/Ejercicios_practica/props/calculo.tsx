export default function Calculo(props) {
  return (
    <>
      <input
        type="number"
        placeholder="Cantidad"
        value={props.cantidad}
        onChange={(e) => props.onChangeCantidad(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Precio"
        value={props.precio}
        onChange={(e) => props.onChangePrecio(Number(e.target.value))}
      />

      <button onClick={props.onCalcular}>
        Calcular Total
      </button>
    </>
  );
}
