import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import NavBarAdmin from "../../../Components/NavBarAdmin/NavBarAdmin";
import styles from "./AddProduct.module.css";

const AddProduct = () => {
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
          <p className={styles.addTxt}>Add Product</p>
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
          <Button className={styles.add_button} type="submit">
            Add
          </Button>
        </Container>
      </div>
    </Container>
  );
};

export default AddProduct;
