export default function Input(props){
    return(
        <input 
            type= "text"
            onChange={(e)=> props.onChangeText(e.target.value)}
        />
    );
}