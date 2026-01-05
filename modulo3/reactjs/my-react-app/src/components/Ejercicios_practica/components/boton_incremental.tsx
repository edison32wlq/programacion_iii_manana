import { useState } from "react";

export default function Incrementar() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <button onClick={()=> setCount(count + 1)}>
                click numero {count}
            </button>
            {count  === 5 && <p>llegaste a 5 clicks</p>}
        </div>
    );
}