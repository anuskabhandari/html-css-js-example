import {useState} from "react";

function Theme(){
    const [dark,setDark] = useState(false);

    return(
        <div style ={{
            background: dark? "black":"white",
            color: dark ? "white" : "black",
            height: "100vh"
        }}>
            <button onClick ={() => setDark(!dark)}>Toggle Theme</button>

            <p>{dark ? "Dark Mode": "Light Mode"}</p>
        </div>
    );
}

export default Theme;