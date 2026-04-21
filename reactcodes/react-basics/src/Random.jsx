import {useState} from "react";

function Random(){
    const [num ,setNum] = useState(0);

    return (
        <div>
            <button onClick ={()=> setNum(Math.floor(Math.random()*100))}>Generate</button>

            <p>{num}</p>
        </div>
    );
}

export default Random;