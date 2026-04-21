import {useState , useEffect} from "react";

function FetchUsers(){
    useEffect(()=>{
        const fetchData =async () =>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await response.json();
                console.log(data);
            }catch(error){
                console.log("Error:" , error);
            }
        };
        fetchData();
    }, []);
    return(
        <div>
            <h2>Check Console for Users</h2>
        </div>
    );
}
export default FetchUsers;
