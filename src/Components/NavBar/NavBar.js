import React from "react";
import { Breadcrumb, Container, Nav, Navbar } from "react-bootstrap";
// import "./NavBar.css";
import styles from "./NavBar.module.css";
import Avatar from "@mui/material/Avatar";

const NavBar = () => {
  return (
    <Container fluid className={styles.navwrapper}>
      <Navbar fixed="top" className={styles.NavBarWrapper}>
        <Navbar.Brand href="/cart" className={styles.logowrapper}>
          <img
            className={styles.logo}
            alt="logo"
            href="/home"
            src="/logo3.png"
          />
        </Navbar.Brand>
        <Nav className={styles.shopcart}>
          <span class="material-symbols-outlined">shopping_cart</span>
        </Nav>
        <Navbar.Brand className={styles.displayName}>
          <label c>Welcome, User Name!</label>

          <div className={styles.profile} alt="">
            <Avatar src="/profile.jpg" sx={{ width: 80, height: 80 }} />
          </div>
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export default NavBar;
