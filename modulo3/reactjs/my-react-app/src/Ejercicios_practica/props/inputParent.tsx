import Input from './input';
import { useState } from 'react';

export default function InputParent(){
    const [text, setText] = useState("");

    return(
        <>
            <Input onChangeText={setText}/>
            <p>{text}</p>
        </>
    )
}