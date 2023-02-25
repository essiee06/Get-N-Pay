import React from "react";
import { Breadcrumb, Container, Navbar } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="nav-wrapper">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/3.png"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
      <Breadcrumb>
        <Breadcrumb.Item href="addproduct">Home</Breadcrumb.Item>
        {/* <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item>Data</Breadcrumb.Item> */}
      </Breadcrumb>
    </Navbar>
  );
};

export default NavBar;
