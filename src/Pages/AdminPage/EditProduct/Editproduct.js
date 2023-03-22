import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./EditProduct.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import "./EditProduct.css";
import styles from "./EditProduct.module.css";
import NavBarAdmin from "../../../Components/NavBarAdmin/NavBarAdmin";

const EditProduct = () => {
  return (
    <Container fluid>
      <NavBarAdmin />
      <div className={styles.wrapper}>
        <a href="/admin/inventory" className={styles.icon}>
          <span class="material-symbols-outlined">arrow_back</span>
        </a>
        <Container className={styles.head1}>
          <p className={styles.updateTxt}>Update Product</p>
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
          <Button className={styles.update_button} type="submit">
            Update
          </Button>
        </Container>
      </div>
    </Container>
  );
};

export default EditProduct;
