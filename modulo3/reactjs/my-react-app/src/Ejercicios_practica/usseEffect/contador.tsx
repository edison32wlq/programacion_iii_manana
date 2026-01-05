import { useState, useEffect } from "react";

export default function Contador(){
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("Aumento el contador", contador);
    }, [contador]);

    return(
        <button onClick={() => setContador(contador + 1)}> Click numero {contador}</button>
    )
}