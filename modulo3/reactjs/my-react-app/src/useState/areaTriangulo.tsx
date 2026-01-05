import { useState } from "react";

export default function AreaTriangulo(){
    const[base, setBase] = useState(0);
    const[altura, setAltura] = useState(0);

    const calcularArea = () => {
        const area = (base * altura)/2;
        alert(`Area del triangulo: ${area}`)
    }


    return(
        <>
            <input
                type="number"
                value={base}
                placeholder="Ingrese la base"
                onChange={(e)=> setBase(Number(e.target.value))}
            />
            <input
                type="number"
                value={altura}
                placeholder="Ingrese la altura"
                onChange={(e)=> setAltura(Number(e.target.value))}
            />
            <button onClick={calcularArea}>Calcular</button>
        </>
    )

}