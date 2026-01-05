import { useState } from "react";

export default function Productos(){
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Producto: ${nombre} \nPrecio: ${precio}`);
    };

    return(
        
        <form onSubmit={handleSubmit}>
            <div>
                <input type = "text" value = {nombre} onChange = {(e) => setNombre(e.target.value)}/>
                <input type = "number" value = {precio} onChange = {(e) => setPrecio(Number(e.target.value))}/>
                <button type ="submit">Guardar</button>
                
            </div>

        </form>
    )
}