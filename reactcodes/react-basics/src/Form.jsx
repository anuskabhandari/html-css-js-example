import {useState} from "react";

function Form(){
    const[input ,setInput] = useState("");

    const handleSubmit =()=> {
        if (input ===""){
            alert("Field is empty");

        }else{
            alert("Submitted");
        }
    };

    return(
        <div>
            <input onChange ={(e) => setInput(e.target.value)}/>
            <button onClick = {handleSubmit}>Submit</button>
        </div>
    );
}
export default Form;