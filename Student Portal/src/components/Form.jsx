import React from "react";
import { useNavigate } from "react-router-dom";


function Form() {
const navigate = useNavigate()

  return (
    <div>
      <form >
        <label>Emali : </label>
        <input className="border" type="email" required></input>
        <br/>
        <br/>
        <label>Password : </label>
        <input className="border" type="password" required></input>

        <button onClick={()=>{navigate("/dashboard")}}>submit</button>

      </form>
    </div>
  );
}

export default Form;
