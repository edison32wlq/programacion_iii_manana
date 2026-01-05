
const productos = ['celular', 'computadora', 'smartWatch', 'mouse', 'teclado'];
export default function Lista(){
    return(
        <ul>
            {productos.map((producto, index) => (
                <li key={index}>{producto}</li>
            ))}
        </ul>
    )


}