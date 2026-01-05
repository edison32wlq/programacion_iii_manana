import { useState, useEffect } from "react";

export default function BotonMensaje(){
    
    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState('');

    useEffect (()=> {
        if (contador === 0){
            setMensaje('Empieza')
        } else {
            setMensaje('Ya hiciste click')
        }
    },[contador]);

    return(
        <>
            <button onClick={()=> setContador(contador + 1)}>Clicl numero {contador}</button>
            <p>{mensaje}</p>
        </>
    )
}