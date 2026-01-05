import { useState } from 'react';
import Suma from './suma';

export default function SumaParent(){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
 
    const SumaTotal = () => {
        const total = num1 + num2;
        alert(`Total: ${total}`);
    }

    return(
        <>
            <h2>Suma</h2>
            <Suma
                num1 = {num1}
                num2 = {num2}
                onChangeNum1 = {setNum1}
                onChangeNum2 = {setNum2}
                onSuma = {SumaTotal}
            />
        </>
    )
}