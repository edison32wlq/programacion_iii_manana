import { useState, useId } from "react";

export default function Mayor(){

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const id = useId();
    const id2 = useId();
    const id3 = useId();
    const id4 = useId();
    const id5 = useId();


    const calcularMayor = () =>{
        if(num1 > num2 && num1 > num3){
            setNum1(num1);
            alert(`El numero mayor es: ${num1}`)
        } else if ( num2 > num1 && num2 > num3){
            setNum2(num2);
            alert(`El numero mayor es: ${num2}`)
        } else {
            setNum3(num3);
            alert(`El numero mayor es: ${num3}`)
        }
        
    }


    return(
        <div id={id}>
            <input
                id={id2}
                type="number"
                value={num1}
                onChange={(e)=> setNum1(Number(e.target.value))}
            />
            <input
                id={id3}
                type="number"
                value={num2}
                onChange={(e)=> setNum2(Number(e.target.value))}
            />
            <input
                id={id4}
                type="number"
                value={num3}
                onChange={(e)=> setNum3(Number(e.target.value))}
            />

            <button  id={id5} onClick={calcularMayor}>Mayor</button>
        </div>
    )
}