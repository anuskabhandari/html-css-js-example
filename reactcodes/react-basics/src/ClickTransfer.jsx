import { useState} from "react";

function ClickTransfer(){
    const [clicks , setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks+1);
    };
    return(
        <div>
            <h2>Button Click Count: {clicks}</h2>
            <button onClick ={handleClick}>Click Me</button>
        </div>
    );
}
export default ClickTransfer;