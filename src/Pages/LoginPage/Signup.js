import React, { useState } from "react";
import "./styles.css";

export const Login = (props) => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confpass, setConfPass] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>REGISTRATION</h2>

        <label htmlFor="name">NAME</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
          placeholder="Name"
          id="name"
          name="name"
        />

        <label htmlFor="lastname">LAST NAME</label>
        <input
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          type="lastname"
          placeholder="Last Name"
          id="lastname"
          name="lastname"
        />

        <label htmlFor="email">EMAIL</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />

        <label htmlFor="password">PASSWORD</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />

        <label htmlFor="confpss">CONFIRM PASSWORD</label>
        <input
          value={confpass}
          onChange={(e) => setConfPass(e.target.value)}
          type="confirmpass"
          placeholder="Confirm Password"
          id="confirmpass"
          name="confirmpass"
        />

        <label htmlFor="phone">PHONE NUMBER</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="phonenum"
          placeholder="Phone Number"
          id="phonenum"
          name="phonenum"
        />

        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account?<a href="/">Login here.</a>
      </button>
    </div>
  );
};

export default Login;