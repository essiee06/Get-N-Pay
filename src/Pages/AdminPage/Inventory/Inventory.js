import React from "react";
import { Container, Table } from "react-bootstrap";
import Dashboard from "../Dashboard/Dashboard";

const Inventory = () => {
  return (
    <div>
      <Dashboard />
      <Container className="wrapper">
        <Table striped="columns">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>ID no.</th>
              <th>Product</th>
              <th>Price</th>
              <th>No. of Items</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>edit </td>
              <td>delete</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>edit</td>
              <td>delete</td>
              <td></td>
              <td></td> <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>edit</td>
              <td>delete</td>
              <td></td>
              <td></td>
              <td colSpan={2}></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Inventory;
