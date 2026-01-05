import { useState } from "react";

export default function Multiplicacion() {
     const [num1, setNum1] = useState(0);
     const [num2, setNum2] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const total = num1 * num2;
        alert(`Resultado: ${total}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type= "number"
                value = {num1}
                onChange={(e)=> setNum1(Number(e.target.value))}
                placeholder="Ingrese el primer numero"
            />

            <input
                type= "number"
                value= {num2}
                onChange={(e)=> setNum2(Number(e.target.value))}
                placeholder="Ingrese el segundo numero"
            />

            <button type="submit">Multiplicar</button>
        </form>
    )


}