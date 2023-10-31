import React from "react";
import { useState } from "react";


const Register = (props) => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [name, setName] = useState();
  const [confpass,setConfpass] = useState();
 
  const [errorMessage, setErrorMessage] = useState("");
  function handlePassword(event) {
    let new_pass = event.target.value;
    setPass(new_pass);

    // regular expressions to validate password
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (!new_pass.match(lowerCase)) {
       setErrorMessage("Password should contains lowercase letters!");
    } else if (!new_pass.match(upperCase)) {
       setErrorMessage("Password should contain uppercase letters!");
    } else if (!new_pass.match(numbers)) {
       setErrorMessage("Password should contains numbers also!");
    } else if (new_pass.length < 10) {
       setErrorMessage("Password length should be more than 10.");
    } else {
       setErrorMessage("Password is strong!"); 
    }
 }
  function handleSubmit(e) {
    e.preventDefault();
    if(
        !name ||
        !email ||
        !pass ||
        !confpass
    ){
        alert("All fields are reqired")
    }
    else if(pass !== confpass){
      alert("Password is not match")
    }
    else{
        alert("Account is created!!")
    }
  }
 
  return (
    <div className="form-container">
        <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label className="Name">Name : </label>
        <input
          type="text"
          value={name}
          name="name"
          id="name"
          placeholder="Name"
          onChange={(e)=> setName(e.target.value)}
        />

        <label className="Email">Email : </label>
        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="Password">Password : </label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          value={pass}
          onChange={handlePassword}
          autoComplete="current-password"
        />
        
        
        <div style = {{ color: "blue" }}> {errorMessage} </div>

        <label className="confpassword">Confirm Password :</label>
        <input type="password"
          placeholder="confpassword"
          id="confpass"
          name="confpass"
          value={confpass}
          onChange={(e) => setConfpass(e.target.value)}
          />
           
        <br/>

        <button type="submit">Register</button>
      </form>

      <button className="btn" onClick={() => props.onformSwitch("login")}>
        Already have an account? login Here
      </button>
    </div>
  );
};

export default Register;
