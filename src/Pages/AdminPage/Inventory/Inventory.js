import React from "react";
import { Container, Table } from "react-bootstrap";
import NavBar from "../../../Components/Front/NavBar/NavBar";
import Dashboard from "../Dashboard/Dashboard";

const Inventory = () => {
  return (
    <div>
      <Dashboard />
      <Container className="wrapper"></Container>
    </div>
  );
};

export default Inventory;
