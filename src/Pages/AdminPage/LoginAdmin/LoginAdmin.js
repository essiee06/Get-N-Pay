import React from "react";
import { Button, Container } from "react-bootstrap";
import styles from "./LoginAdmin.module.css";

const LoginAdmin = () => {
  return (
    <div className={styles.body}>
      <Container className={styles.Wrapper}>
        <Container className={styles.signin}>
          <div className={styles.logo}></div>
          <Container className={styles.admin}>Login Admin</Container>
          <form className={styles.formcontainer}>
            {/* <h2 class={styles.Email_login}>Email</h2> */}
            <h2 class={styles.Email_login}>Email</h2>
            <input
              class={styles.signuplabelsleft}
              type="email"
              placeholder="Email Address"
              id="email"
              name="email"
            />

            <h2 class={styles.Password_login}>Password</h2>
            <input
              class={styles.signuplabelsleft}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
            <Button
              type="submit"
              className={styles.submit_btn}
              href="/admin/inventory"
            >
              Log In
            </Button>
          </form>
          <div class={styles.have_an_account}>
            <p>Forgot Password?</p>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default LoginAdmin;
