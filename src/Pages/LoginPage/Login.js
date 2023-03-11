import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import styles from "./Login.module.css";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className={styles.body}>
      <Container className={styles.Wrapper}>
        <Container className={styles.signin}>
          <div className={styles.logo}></div>
          <form onSubmit={handleSubmit}>
            <h2 htmlFor="email" class={styles.Email_login}>
              Email
            </h2>
            <input
              class={styles.loginEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              id="email"
              name="email"
            />
            <h2 htmlFor="password" class={styles.Password_login}>
              Password
            </h2>
            <input
              className={styles.input_signup}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
            <button type="submit" className={styles.submit_btn}>
              Log In
            </button>
          </form>
          <div class="noaccountDiv">
            <button
              className={styles.register}
              onClick={() => props.onFormSwitch("register")}
            >
              <a href="/signup">Register</a>{" "}
            </button>
            <Button
              class={styles.have_an_account}
              onClick={() => props.onFormSwitch("ForgPass")}
            >
              Forgot Password
            </Button>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Login;
