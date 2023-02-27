import { useState } from "react";
const Random = ({max}) => {
    let [num, setNum] = useState();
    return (
        <div id="random">
            <p>Random number between 0 and {max} {"--->"} {num}</p> 
            {<button onClick={ ()=> setNum(String(Math.round(Math.random()*max))) }>Click Me!</button>}
        </div>
    )
}

export default Random;
