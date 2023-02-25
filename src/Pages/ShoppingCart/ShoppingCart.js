import React from "react";
import { Badge, Container, Table } from "react-bootstrap";
// import items from "./data";
import "./ShoppingCart.css";
// import Cart from "./Cart";

function ShoppingCart() {
  return (
    <Container className="wrapper">
      <h1 className="header">Shopping Cart</h1>

      <Table striped="columns">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default ShoppingCart;
