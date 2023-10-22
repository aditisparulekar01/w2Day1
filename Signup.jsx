import React from "react";
import "./Signup.css"; // Import the CSS file

const Signup = () => {
  return (
    <div className="signup-container">
      <h1 className="signup-heading">Sign up</h1>
      <input type="text" className="input-field" placeholder="Enter First Name" /><br />
      <input type="text" className="input-field" placeholder="Enter Last Name" /><br />
      <input type="text" className="input-field" placeholder="Enter Email" /><br />
      <input type="password" className="input-field" placeholder="Create password" /><br />
      <input type="password" className="input-field" placeholder="Confirm password" /><br /><br />
      <button className="signup-button">Sign Up</button>
    </div>
  );
};

export default Signup;
