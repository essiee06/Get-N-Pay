import React, {useState} from "react";
import { Button, Container } from "react-bootstrap";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

import pb from "../../lib/pocketbase";

export async function loginUser(email, password) {
    // Authenticate the user with the email and password
    const authData = await pb.collection('users').authWithPassword(email, password);
    return authData;
}

export default function Login() {
  //usestate for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
    const authData = await loginUser(email, password);
    if (authData) {
      navigate("/cart");
    }
    else{
      alert("Invalid email or password");
    }
};

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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className={styles.submit_btn} onClick={handleSubmit}>
              Log In
            </Button>
          </form>
          <div class={styles.have_an_account}>
            <p>
              Don't have an account?
              <a href="/signup"> Sign up</a>{" "}
            </p>
            <p>Forgot Password?</p>
          </div>
        </Container>
      </Container>
    </div>
  );
};


