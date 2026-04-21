import {useState} from "react";

function MultiForm(){
    const [name , setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Name:", name);
        console.log("Email:",email);
    };

    return(
        <form onSubmit = {handleSubmit}>
            <div>
                <input
                 type = "text"
                 placeholder = "Enter Name"
                 value = {name}
                 onChange={(e) => setName(e.target.value)}/>
            </div>

              <div>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type ="submit">Submit</button>
        </form>
    );
}
export default MultiForm;