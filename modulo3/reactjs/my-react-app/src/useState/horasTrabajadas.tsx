import { useState } from "react";


export default function HorasTrabajadas(){
    const[horas, setHoras] = useState(0);
    const[valor, setValor] = useState(0);


    const calcularPago = () => {
        if(horas <= 8){
            const total = (horas * valor) * 5;
            alert(`Salario semanal: ${total}`);
        } else {
            const extras = horas - 8;
            const valorExtra =  valor + (valor * 0.5);
            const subtotal = horas * valor;
            const subtotal2 = valorExtra * extras;
            
            const total = (subtotal + subtotal2) * 5;
            alert(`Salario semanal: ${total}`);
        }
    }

    return(
        <>
            <br/>
            <p>Ingrese las horas que trabaja al dia </p>
            <input
                type="number"
                value={horas}
                placeholder="Ingrese las horas que trabaja"
                onChange={(e)=> setHoras(Number(e.target.value))}
            />
            <br/>
            <p>Ingrese el valor por hora trabajada</p>
            <input
                type="number"
                value={valor}
                placeholder="Ingrese el valor por hora trabajada"
                onChange={(e)=> setValor(Number(e.target.value))}
            />

            <button onClick={calcularPago}>Calcular</button>
        </>

        

    )
}