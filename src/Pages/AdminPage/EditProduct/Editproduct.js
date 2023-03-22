import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";

import { useParams } from "react-router-dom";
import pb from "../../../lib/pocketbase";

export async function updateSelected(id, id_no, product_name, price) {
  const data = {idno: id_no, productname: product_name, price: price}
  await pb.collection('inventory').update(id, data);
  window.location.reload();
};

export default function EditProduct() {
  const [id_no, setRfidtag] = useState("");
  const [product_name, setItem] = useState("");
  const [price, setPrice] = useState("");
  //get id params from url using useParams from react-router-dom
  const { id } = useParams();


  return (
    <div>
      <Container className="wrapper">
        <h1> Edit Product</h1>
        <Form >
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              RFID Tag No.
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="rfidtag"
                placeholder="RFID Tag No."
                onChange={(e) => setRfidtag(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Item
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="item"
                placeholder="Item"
                onChange={(e) => setItem(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Price
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="price"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 3 }}>
              <Button type="submit" onClick={()=>updateSelected(id, id_no, product_name, price )}>Update</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

