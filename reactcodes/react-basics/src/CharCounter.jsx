import {useState} from "react";

function CharCounter(){
    const [text,setText] = useState("");

    return(
        <div>
            <input onChange ={(e)=> setText(e.target.value)}/>
            <p>Count: {text.legth}</p>
        </div>
    );
}
export default CharCounter;