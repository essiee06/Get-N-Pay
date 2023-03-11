import React from "react";
import { Breadcrumb, Container, Navbar } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" className="nav-wrapper">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/3.png"
            height="50"
            className="d-inline-block align-top"
            alt="Get N Pay Logo"
          />
        </Navbar.Brand>
        <Breadcrumb className="bread-wrap">
          <Breadcrumb.Item href="/shoppingcart">Shopping Cart</Breadcrumb.Item>
          <Breadcrumb.Item href="/addtocart">Add to Cart</Breadcrumb.Item>
          <Breadcrumb.Item href="/cart">
            cart
            <i className="fas fa-cart-plus" />{" "}
          </Breadcrumb.Item>
        </Breadcrumb>
        <Breadcrumb className="bread-wrap">
          <Breadcrumb.Item href="/cart">for admin</Breadcrumb.Item>
          <Breadcrumb.Item href="/inventoryManagement">Cart</Breadcrumb.Item>
          <Breadcrumb.Item href="/addtocart">
            {" "}
            <i className="fas fa-cart-plus" />{" "}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </Navbar>
  );
};

export default NavBar;
