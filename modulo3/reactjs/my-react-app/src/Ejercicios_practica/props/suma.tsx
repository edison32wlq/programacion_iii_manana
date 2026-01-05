export default function Suma(props){
    return(
        <>
            <input
                type = "number"
                placeholder="primer numero"
                value = {props.num1}
                onChange={(e)=> props.onChangeNum1(Number(e.target.value))}
            />

            <input
                type = "number"
                placeholder="segundo numero"
                value = {props.num2}
                onChange={(e)=> props.onChangeNum2(Number(e.target.value))}
            />

            <button onClick={props.onSuma}>Sumar</button>
        </>

        
    )
}