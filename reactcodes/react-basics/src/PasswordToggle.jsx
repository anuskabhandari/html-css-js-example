import {useState} from "react";

function PasswordToggle(){
    const[show, setshow] = useState(false);

    return(
        <div>
            <input
              type = {show? "text": "password"}
              placeholder = "Enter password"/>

              <button onClick ={()=> setshow(!show)}>
                {show ? "Hide" : "Show"}
              </button>

        </div>
    );
}
export default PasswordToggle;