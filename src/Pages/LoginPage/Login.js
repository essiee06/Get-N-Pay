import React, { useState } from "react";
import "./styles.css";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">EMAIL</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
          id="email"
          name="email"
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">
          <a href="/shoppingcart">Log In</a>
        </button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        {" "}
        <a href="/signup">Register</a>{" "}
      </button>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("ForgPass")}
      >
        Forgot Password
      </button>
    </div>
  );
};

export default Login;
