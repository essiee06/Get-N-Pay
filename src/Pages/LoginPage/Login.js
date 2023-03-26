import React from "react";
import { Button, Container } from "react-bootstrap";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.body}>
      <Container className={styles.Wrapper}>
        <Container className={styles.signin}>
          <div className={styles.logo}></div>
          <form className={styles.formcontainer}>
            {/* <h2 class={styles.Email_login}>Email</h2> */}
            <h2 class={styles.Email_login}>Email</h2>
            <input
              class={styles.signuplabelsleft}
              type="email"
              placeholder="Email Address"
              id="email"
              name="email"
              required
            />
            {/* <h2 htmlFor="password" class={styles.Password_login}>
              Password
            </h2> */}
            <h2 class={styles.Password_login}>Password</h2>
            <input
              class={styles.signuplabelsleft}
              type="password"
              placeholder="********"
              id="password"
              name="password"
              required
            />
            <Button type="submit" className={styles.submit_btn} href="/cart">
              Log In
            </Button>
          </form>
          <div class={styles.have_an_account}>
            <p>
              Don't have an account?
              <a href="/signup"> Sign up</a>
            </p>
            <p>
              <a href="/forgotpassword">Forgot Password?</a>
            </p>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Login;
