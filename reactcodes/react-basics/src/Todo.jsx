import {useState} from "react";

function Todo(){
    const [task ,setTask] = useState("");
    const [list, setList] = useState([]);


    const addTask = () => {
        setList([...list, task]);
        setTask("");
    };

    return(
        <div>
            <input value ={task} onChange={(e) => setTask(e.target.value)}/>
            <button onClick = {addTask}>addTask</button>

            <ul>
              {list.map((item, i) => (
         <li key={i}>{item}</li>
       ))}

            </ul>
        </div>
    );
}
export default Todo;