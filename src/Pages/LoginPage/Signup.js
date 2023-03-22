import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./Login.module.css";

const Signup = () => {
  return (
    <div className={styles.body}>
      <Container className={styles.Wrapper}>
        <Container className={styles.signup}>
          <div className={styles.logos}>
            <div className={styles.logo}></div>
            {/* <p className={styles.create_an_account}>Create an account</p> */}
            <p class={styles.PleaseText}>Sign Up</p>
            <form id="register-form" method="POST">
              <Row className="align-items-center">
                <Col xs="auto">
                  <label htmlFor="firstname" class={styles.signuplabelsleft}>
                    First Name
                  </label>
                  <input
                    class={styles.signuplabelsleft}
                    type="firstname"
                    placeholder="First Name"
                    id="firstname"
                    name="firstname"
                  />
                </Col>
                <Col xs="auto">
                  <label class={styles.signuplabelsleft}>Last Name</label>
                  <input
                    class={styles.signuplabelsleft}
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
                    class={styles.signuplabelsleft}
                    maxLength={10}
                    type="text"
                    placeholder="Address"
                    required
                    id="addressinput"
                  />
                </Col>
                <Col xs="auto">
                  <label class={styles.signuplabelsleft}>Phone Number</label>
                  <input
                    class={styles.signuplabelsleft}
                    type="number"
                    placeholder="Phone Number"
                    id="phonenum"
                    name="phonenum"
                  />
                </Col>
              </Row>
              <div>
                <label class={styles.signuplabelsleft}>Email</label>
                <input
                  class={styles.emailIn}
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                />
              </div>
              <Row className="align-items-center">
                <Col xs="auto">
                  <label class={styles.signuplabelsleft}>Password</label>
                  <input
                    class={styles.signuplabelsleft}
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                  />
                </Col>
                <Col xs="auto">
                  <label class={styles.signuplabelsleft}>
                    Confirm Password
                  </label>
                  <input
                    class={styles.signuplabelsleft}
                    type="confirmpass"
                    placeholder="Confirm Password"
                    id="confirmpass"
                  />
                </Col>
              </Row>

              <Button className={styles.submit_btn} type="submit">
                Register
              </Button>
              <p>
                Already have an account?<a href="/">Login here.</a>
              </p>
            </form>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Signup;
