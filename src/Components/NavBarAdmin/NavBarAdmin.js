import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import styles from "./NavBarAdmin.module.css";

const NavBarAdmin = () => {
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
        <Nav className={styles.search_bar}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
        </Nav>

        <Navbar.Brand className={styles.displayName}>
          <label>Welcome, Admin!</label>

          <div className={styles.profile} alt="">
            <Avatar src="/profile.jpg" sx={{ width: 80, height: 80 }} />
          </div>
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export default NavBarAdmin;
