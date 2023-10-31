import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  function handleSubmit(e) {
    e.preventDefault();
   alert("You are logged in!!!")
  }
  return (
    <div className="form-container">
        <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
            onChange={(e) => setPass(e.target.value)}
          />
          <br/>
    
          <button type="submit">Loin In</button>
    
      </form>
      
      <button  className="btn" onClick={() => props.onformSwitch("Register")}>
        Don't have an account? Register Here
      </button>
    </div>
  );
};

export default Login;
