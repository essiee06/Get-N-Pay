import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import "./AddProduct.css";

function HorizontalExample() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:8888/api");
    console.log(inputs);
  };
  return (
    <div>
      <Container className="wrapper">
        <h1> Add Product</h1>
        <Form onSubmit={handleSubmit}>
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 3 }}>
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default HorizontalExample;
