import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import "./EditProduct.css";
import styles from "./EditProduct.module.css";
import NavBarAdmin from "../../../Components/NavBarAdmin/NavBarAdmin";
import { Col, Row } from "react-bootstrap";

const EditProduct = () => {
  return (
    <Container fluid>
      <NavBarAdmin />
      <Container className={styles.back_arrow}>
        <a href="/admin/inventory" className={styles.icon}>
          <span class="material-symbols-outlined">arrow_back</span>
        </a>
      </Container>
      <div className={styles.wrapper}>
        <Container className={styles.head1}>
          <p className={styles.updateTxt}>Update Product</p>
          <Container className={styles.formWrapper}>
            <Form>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label className={styles.items_txt}>
                      Product Name:
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      className={styles.form_input}
                      type="text"
                      placeholder="e.g Busog Lusog"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label className={styles.items_txt}>
                      RFID Tag UID no.:
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      className={styles.form_input}
                      type="number"
                      placeholder="e.g. 1234"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label className={styles.items_txt}>Price:</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      className={styles.form_input}
                      placeholder="e.g ₱5.00"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="formFile">
                <Row>
                  <Col>
                    <Form.Label className={styles.items_txt}>
                      Upload Image:
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Control className={styles.form_input} type="file" />
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Container>
          <Button className={styles.update_button} type="submit">
            Update
          </Button>
        </Container>
      </div>
    </Container>
  );
};

export default EditProduct;
