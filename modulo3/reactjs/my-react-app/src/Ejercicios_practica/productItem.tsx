export default function ProductItem(props) {
  return (
    <>
      <p>Producto: {props.nombre}</p>
      <button onClick={props.onAdd}>
        Agregar
      </button>
    </>
  );
}
