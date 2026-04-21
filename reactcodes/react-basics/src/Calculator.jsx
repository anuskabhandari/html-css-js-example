import {useState} from "react"

function Calculator(){
    const[a ,setA] = useState(0);
    const[b,setB] = useState(0);

    return(
        <div>
            <input type ="number" onChange={(e)=>setA(+e.target.value)}/>
            <input type ="number" onChange={(e)=>setB(+e.target.value)}/>

            <p>Result: {a+b}</p>
       </div>
    );
}
export default Calculator;