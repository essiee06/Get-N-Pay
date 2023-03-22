import React from "react";
import { Button, Container, Form } from "react-bootstrap";
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
          <p className={styles.updateTxt}>Add Product</p>
          <Container className={styles.formWrapper}>
            {/* <Row>
              <Col className="ProductCol">
                <h2>Product</h2>
              </Col>
              <Col className="Format"> */}
            <Form>
              <Form.Group>
                <Form.Label className={styles.items_txt}>
                  Product Name:
                </Form.Label>
                <Form.Control
                  className={styles.form_input}
                  type="text"
                  placeholder="e.g Busog Lusog"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className={styles.items_txt}>
                  RFID Tag UID no.:
                </Form.Label>
                <Form.Control
                  className={styles.form_input}
                  type="number"
                  placeholder="e.g. 1234"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className={styles.items_txt}>Price:</Form.Label>
                <Form.Control
                  className={styles.form_input}
                  placeholder="e.g ₱5.00"
                />
              </Form.Group>
              <Form.Group controlId="formFile">
                <Form.Label className={styles.items_txt}>
                  Upload Image:
                </Form.Label>
                <Form.Control className={styles.form_input} type="file" />
              </Form.Group>
            </Form>
            {/* </Col>
            </Row> */}
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
