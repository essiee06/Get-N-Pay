import React from "react";
import { Container, Nav } from "react-bootstrap";
import NavBar from "../../../Components/Front/NavBar/NavBar";

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <Nav defaultActiveKey="/inventory" className="flex-column">
        <Nav.Link href="/inventory">Inventory</Nav.Link>
        <Nav.Link eventKey="link-1" href="/addproduct">
          Add Product
        </Nav.Link>
        <Nav.Link eventKey="link-2" href="/editproduct">
          Edit Product
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Dashboard;
