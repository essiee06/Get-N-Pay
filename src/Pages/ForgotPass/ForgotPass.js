import React from "react";
import "./ForgotPass.css";
import styles from "./ForgotPass.module.css";
// import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { Button } from "react-bootstrap";

const ForgotPass = () => {
  return (
    <div>
      <div className={styles.body}>
        <div class={styles.container}>
          <div></div>
          <div class={styles.forgotpass}>
            <Button href="/" variant="transparent">
              {/* <FaArrowLeft class="backArow" /> */}
            </Button>
            <div className={styles.logobook}></div>
            <div className={styles.booklove}></div>
            <h1 class={styles.resetpass_title}>Reset Your Password</h1>
            <p class={styles.please_enter_text}>
              Please enter your email. A password reset link will be sent to
              your email.
            </p>
            <h2 class={styles.Email_login}>Email</h2>
            <input class={styles.loginEmail} type="email" required />
            <button className={styles.change_pass}>Send Email</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
