import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./Login.module.css";

export const Login = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pass, setPass] = useState("");
  const [confpass, setConfPass] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className={styles.body}>
      <Container className={styles.Wrapper}>
        <Container className={styles.signup}>
          <div className={styles.logos}>
            <div className={styles.getnpaysinguplogo}></div>
            <p className={styles.create_an_account}>Create an account</p>
            <p class={styles.PleaseText}>Please enter your login details</p>
            <form onSubmit={handleSubmit} id="register-form" method="POST">
              <Row className="align-items-center">
                <Col xs="auto">
                  <label htmlFor="firstname" class={styles.signuplabelsleft}>
                    First Name
                  </label>
                  <input
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="firstname"
                    placeholder="First Name"
                    id="firstname"
                    name="firstname"
                  />
                </Col>
                <Col xs="auto">
                  <label class={styles.signuplabelsleft} htmlFor="lastname">
                    LAST NAME
                  </label>
                  <input
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    type="lastname"
                    placeholder="Last Name"
                    id="lastname"
                    name="lastname"
                  />
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col xs="auto">
                  <label for="addressinput" class={styles.signuplabelsleft}>
                    Address
                  </label>
                  <input
                    maxLength={10}
                    value={address}
                    type="text"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    id="addressinput"
                  />
                </Col>
                <Col xs="auto">
                  <label htmlFor="phone" class={styles.signuplabelsleft}>
                    Phone Number
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="phonenum"
                    placeholder="Phone Number"
                    id="phonenum"
                    name="phonenum"
                  />
                </Col>
              </Row>
              <div className={styles.emailDiv}>
                <label htmlFor="email" class={styles.signuplabelsleft}>
                  EMAIL
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                />
              </div>
              <Row className="align-items-center">
                <Col xs="auto">
                  <label htmlFor="password" class={styles.signuplabelsleft}>
                    PASSWORD
                  </label>
                  <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                  />
                </Col>
                <Col xs="auto">
                  <label htmlFor="confpss" class={styles.signuplabelsleft}>
                    CONFIRM PASSWORD
                  </label>
                  <input
                    value={confpass}
                    onChange={(e) => setConfPass(e.target.value)}
                    type="confirmpass"
                    placeholder="Confirm Password"
                    id="confirmpass"
                    name="confirmpass"
                  />
                </Col>
              </Row>

              <Button className={styles.submit_btn} type="submit">
                Register
              </Button>
              <button
                className="link-btn"
                onClick={() => props.onFormSwitch("login")}
              >
                Already have an account?<a href="/">Login here.</a>
              </button>
            </form>
          </div>

          <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
          <script src="Signup_backend.js"></script>
        </Container>
      </Container>
    </div>
  );
};
export default Login;
