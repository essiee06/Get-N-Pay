import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import pb from "../../lib/pocketbase";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }
    const data = {
      first_name: firstName,
      last_name: lastName,
      address: address,
      phone_number: phoneNumber,
      email: email,
      password: password,
      passwordConfirm: password,
    };
  
    try {
      await pb.collection('users').create(data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className={styles.body}>
      <Container className={styles.Wrapper}>
        <Container className={styles.signup}>
          <div className={styles.logos}>
            <div className={styles.logo}></div>
            <p className={styles.create_an_account}>Create an account</p>
            <form id="register-form" onSubmit={handleSubmit}>
              <Row className="align-items-center">
                <Col xs="auto">
                  <label htmlFor="firstname" className={styles.signuplabelsleft}>
                    First Name
                  </label>
                  <input
                    className={styles.signuplabelsleft}
                    type="text"
                    placeholder="First Name"
                    id="firstname"
                    name="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </Col>
                <Col xs="auto">
                  <label className={styles.signuplabelsleft}>Last Name</label>
                  <input
                    className={styles.signuplabelsleft}
                    type="text"
                    placeholder="Last Name"
                    id="lastname"
                    name="lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col xs="auto">
                  <label htmlFor="addressinput" className={styles.signuplabelsleft}>
                    Address
                  </label>
                  <input
                    className={styles.signuplabelsleft}
                    maxLength={10}
                    type="text"
                    placeholder="Address"
                    id="addressinput"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </Col>
                <Col xs="auto">
                  <label className={styles.signuplabelsleft}>Phone Number</label>
                  <input
                    className={styles.signuplabelsleft}
                    type="text"
                    placeholder="Phone Number"
                    id="phonenum"
                    name="phonenum"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </Col>
              </Row>
              <div>
                <label className={styles.signuplabelsleft}>Email</label>
                <input
                  className={styles.emailIn}
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Row className="align-items-center">
                <Col xs="auto">
                  <label className={styles.signuplabelsleft}>Password</label>
                  <input
                    className={styles.signuplabelsleft}
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>
                <Col xs="auto">
                  <label className={styles.signuplabelsleft}>
                    Confirm Password
                  </label>
                  <input
                    className={styles.signuplabelsleft}
                    type="password"
                    placeholder="Password"
                    id="confirmpass"
                    name="confirmpass"
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Col>
              </Row>

              <Button className={styles.submit_btn} type="submit">
                Register
              </Button>
              <button className="link-btn">
                Already have an account?<a href="/">Login here.</a>
              </button>
            </form>
          </div>
        </Container>
      </Container>
    </div>
  );
};


