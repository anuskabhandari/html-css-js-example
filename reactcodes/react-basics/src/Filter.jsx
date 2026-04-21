import {useState} from "react";

function Filter(){
    const items =["apple", "banana", "mango"];
    const[search ,setSearch] = useState("");

    return(
        <div>
            <input onChange={(e) =>  setSearch(e.target.value)}/>

               <ul>
       {items
         .filter(item => item.includes(search))
         .map((item, i) => (
           <li key={i}>{item}</li>
         ))}
     </ul>

        </div>
    );
}
export default Filter;