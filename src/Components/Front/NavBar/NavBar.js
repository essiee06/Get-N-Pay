import React from "react";
import { Breadcrumb, Container, Navbar } from "react-bootstrap";
// import "./NavBar.css";
import styles from "./NavBar.module.css";
import Avatar from "@mui/material/Avatar";

const NavBar = () => {
  return (
    <Navbar fixed="top" className={styles.NavBarWrapper}>
      <Navbar.Brand href="/cart" className={styles.logowrapper}>
        <img className={styles.logo} alt="logo" href="/home" src="/logo3.png" />
      </Navbar.Brand>
      <Container fluid></Container>

      <Navbar.Brand className={styles.displayName}>
        Welcome, User Name!
        <div className={styles.profile} alt="">
          <Avatar src="/profile.jpg" sx={{ width: 80, height: 80 }} />
        </div>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
