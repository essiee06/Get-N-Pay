import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "./Login.module.css";
import "@material-design-icons/font";
import NavBar from "../../Components/Front/NavBar/NavBar";

const eye = <span class="material-symbols-outlined">visibility</span>;

function Login() {
  //setting email and password, name, password
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");
  const [registerEmail, setregisterEmail] = useState("");
  const [registerPassword, setregisterPassword] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  //setting full name, phone num, address and confirm password
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phonenumber, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [compass, setComPass] = useState("");

  const handleLogin = async (e) => {
    // // code to handle login here
    // e.preventDefault();
    // var user = auth.currentUser;
    // signInWithEmailAndPassword(auth, loginEmail, loginPassword, loginName)
    //   .then((cred) => {
    //     if (auth.currentUser.emailVerified == true) {
    //       window.alert("Login Sucessful");
    //       navigate("/home");
    //     } else if (auth.currentUser.emailVerified == false) {
    //       window.alert(
    //         "You must be a verified user to login. Refresh the page once you have verified the account."
    //       );
    //       window.location.reload(false);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(user);
    //     window.alert("Email or password is incorrect.");
    //     console.log(error.message);
    //   });
  };

  const handleSignUp = async (e) => {
    // // code to handle sign-up here
    // e.preventDefault();
    // if (!registerEmail || !registerPassword || !compass || !birthday || !sex) {
    //   window.alert("Please fill in all the required fields.");
    // } else if (registerPassword != compass) {
    //   window.alert("Passwords do not match. Please try again.");
    // } else if (registerPassword.length < 6 || registerPassword.length > 12) {
    //   window.alert(
    //     "Please enter a password with a minimum of 6 and maximum of 12 characters."
    //   );
    // } else if (validatebday(birthday) < 18) {
    //   window.alert("You must be at least 18 to join.");
    // } else {
    //   createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    //     .then((cred) => {
    //       console.log("auth.currentuser");
    //       const user = auth.currentUser;
    //       sendEmailVerification(user);
    //       updateProfile(user, {
    //         displayName: regName,
    //       });
    //       add_user();
    //     })
    //     .catch((e) => {
    //       window.alert("An account with this email already exists.");
    //     });
    // }
  };
  return (
    <div>
      {/* <NavBar /> */}
      <div className={styles.body}>
        <Container className={styles.Wrapper}>
          <h1>{showLogin ? "" : ""}</h1>
          {showLogin ? (
            <Container className={styles.signin}>
              {/* <h1 class={styles.Welcome_Message}>Welcome to</h1> */}
              <div className={styles.logo}></div>
              <form onSubmit={handleLogin}>
                <p class={styles.PleaseText}>Please enter your login details</p>
                <h2 class={styles.Email_login}>Email</h2>
                <input
                  class={styles.loginEmail}
                  type="email"
                  onKeyUp={(event) => setloginEmail(event.target.value)}
                  required
                />
                <h2 class={styles.Password_login}>Password</h2>
                <div id="DivPassword" className={styles.loginPassword}>
                  <input
                    type={passwordShown ? "text" : "password"}
                    onKeyUp={(event) => setloginPassword(event.target.value)}
                    required
                    class={styles.loginpasswordtext}
                  />
                  <i
                    onClick={togglePasswordVisiblity}
                    class={styles.togglePassword}
                  >
                    <span class="material-symbols-outlined">
                      {passwordShown ? "visibility" : "visibility_off"}
                    </span>
                  </i>{" "}
                </div>

                <label
                  // onClick={() => navigate("/forgot-password")}
                  class={styles.Forgot_Password}
                >
                  Forgot Password?
                </label>
                <Button href="/shoppingcart" className={styles.submit_btn}>
                  {/* onClick={signIn} */}
                  Login
                </Button>
                {/* <button onClick={() => setShowLogin(!showLogin)}>
                  {showLogin ? "Need to sign up?" : "Already have an account?"}
                </button> */}
                <small class={styles.have_no_account}>
                  Don't have an account?{" "}
                  <label
                    className={styles.toggleshow}
                    onClick={() => setShowLogin(!showLogin)}
                  >
                    {showLogin ? "Sign Up" : "Already have an account?"}
                  </label>{" "}
                </small>
              </form>
            </Container>
          ) : (
            <div class={styles.signup}>
              <div class={styles.logos}>
                <div className={styles.getnpaysinguplogo}></div>
                <p className={styles.create_an_account}>Create an account</p>
                <form onSubmit={handleSignUp}>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      <label
                        for="firstnameinput"
                        class={styles.signuplabelsleft}
                      >
                        First Name
                      </label>
                      <input
                        maxLength={10}
                        type="text"
                        placeholder="First Name"
                        onChange={(event) => setfirstName(event.target.value)}
                        required
                        id="firstnameinput"
                      />
                    </Col>
                    <Col xs="auto">
                      <label
                        htmlFor="lastnameinput"
                        class={styles.signuplabelsleft}
                      >
                        Last Name
                      </label>
                      <input
                        maxLength={10}
                        type="text"
                        placeholder="Last Name"
                        onChange={(event) => setlastName(event.target.value)}
                        required
                        id="lastnameinput"
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
                        type="text"
                        placeholder="Address"
                        onChange={(event) => setAddress(event.target.value)}
                        required
                        id="addressinput"
                      />
                    </Col>
                    <Col xs="auto">
                      <label
                        htmlFor="phonenumberinput"
                        class={styles.signuplabelsleft}
                      >
                        Phone Number
                      </label>
                      <input
                        maxLength={10}
                        type="number"
                        placeholder="Phone Number"
                        onChange={(event) => setPhoneNum(event.target.value)}
                        required
                        id="phonenumberinput"
                      />
                    </Col>
                  </Row>
                  <div class={styles.emailDiv}>
                    <label htmlFor="Email" class={styles.signuplabelsleft}>
                      Email{" "}
                    </label>
                    <input
                      className={styles.input_signup}
                      type="email"
                      placeholder="Email"
                      onChange={(event) => setregisterEmail(event.target.value)}
                      required
                      id="Email"
                    />
                  </div>
                  <Row className="align-items-center">
                    <Col xs="auto">
                      {/* <div class={styles.passwordDiv}> */}
                      <Form.Label
                        htmlFor="password"
                        class={styles.signuplabelsleft}
                      >
                        Password{" "}
                      </Form.Label>
                      <Form.Control
                        maxLength={12}
                        minLength={6}
                        className={styles.input_signup}
                        type={passwordShown ? "text" : "password"}
                        placeholder="Password"
                        onChange={(event) =>
                          setregisterPassword(event.target.value)
                        }
                        required
                        id="password"
                      />
                      {/* <i
                        onClick={togglePasswordVisiblity}
                        class={styles.togglePassword}
                      >
                        <div className={styles.signupeye1}>
                          <span class="material-symbols-outlined">
                            {passwordShown ? "visibility" : "visibility_off"}
                          </span>
                        </div>
                      </i> */}
                      {/* </div> */}
                    </Col>
                    <Col xs="auto">
                      {/* <div class={styles.confirmpasswordDiv}> */}
                      <Form.Label
                        htmlFor="ConfirmPassword"
                        class={styles.signuplabelsleft}
                      >
                        Confirm Password
                      </Form.Label>
                      <Form.Control
                        maxLength={12}
                        minLength={6}
                        className={styles.input_signup}
                        type={passwordShown ? "text" : "password"}
                        placeholder="Confirm Password"
                        onChange={(event) => setComPass(event.target.value)}
                        required
                        id="ConfirmPassword"
                      />
                      {/* <i
                        onClick={togglePasswordVisiblity}
                        class={styles.togglePassword}
                      >
                        <div className={styles.signupeye2}>
                          <span class="material-symbols-outlined">
                            {passwordShown ? "visibility" : "visibility_off"}
                          </span>
                        </div>
                      </i> */}
                      {/* </div> */}
                    </Col>
                  </Row>
                  {/* <div class={styles.createaccountbuttonDiv}> */}
                  <button className={styles.submit_btn} onClick={handleSignUp}>
                    Create Account
                  </button>
                  <div class="noaccountDiv">
                    <small class="have_an_account">
                      Already have an account?{" "}
                      <label
                        className={styles.toggleshow}
                        onClick={() => setShowLogin(!showLogin)}
                      >
                        {showLogin ? "Need to sign up?" : "Sign In"}
                      </label>
                    </small>
                  </div>
                  {/* </div> */}
                </form>
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}

export default Login;
