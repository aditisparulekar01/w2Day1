import React from "react";
import "./Login.css"; // Import the CSS file

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <input type="text" className="input-field" placeholder="Enter Name" />
      <br />
      <input type="password" className="input-field" placeholder="Password" />
      <br />
      <br />
      <button className="login-button">Log In</button>
    </div>
  );
};

export default Login;
