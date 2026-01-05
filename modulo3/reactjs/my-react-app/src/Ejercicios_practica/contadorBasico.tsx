import { useState } from "react";

export default function ContadorBasico(){
    const [count, setCount] = useState(0);


    return(
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(0)}>Reiniciar</button>
        </div>
    )
}