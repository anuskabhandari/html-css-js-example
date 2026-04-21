import {useState, useEffect} from "react";

function LiveClock(){
    const [ time ,setTime] = useState(new Date());

    useEffect(() =>{
        setInterval(() =>{
            setTime(new Date());
        }, 1000);
    },[]);

    return(
        <div>
            <h2>Current Time : {time.toLocaleTimeString()}</h2>
        </div>
    );
}
export default LiveClock;