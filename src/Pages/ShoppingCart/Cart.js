import React from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import styles from "./AddToCart.module.css";
import NavBar from "../../Components/Front/NavBar/NavBar";

const Cart = () => {
  return (
    <div>
      <NavBar />
      <Card style={{ width: "50rem" }} className={styles.productlist}>
        <h2>Cart:</h2>
        <ListGroup as="ol" className={styles.WrapperList}>
          <ListGroup.Item className={styles.WrapperlistItems} as="li">
            <Row className="align-items-center">
              <Col xs="auto" className={styles.itemsDetails}>
                <img
                  className={styles.productImage}
                  src="./pics/busog_lusog.png"
                  alt="products"
                />
              </Col>
              <Col xs="auto" className={styles.itemsDetails}>
                <label className={styles.itemsDet}>Busog Lusog</label>
                <p className={styles.price}>₱10.00</p>
              </Col>
              <Col xs="auto" className={styles.itemsDetails}>
                <Button variant="light">+</Button>
                <label className={styles.quantity}>1</label>
                <Button variant="light">-</Button>
              </Col>
              <Col xs="auto" className={styles.itemsDetails}>
                <label className={styles.amount}>₱10.00</label>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item className={styles.WrapperlistItems} as="li">
            <Row className="align-items-center">
              <Col xs="auto" className={styles.itemsDetails}>
                <img
                  className={styles.productImage}
                  src="./pics/magic_sarap.png"
                  alt="products"
                />
              </Col>
              <Col xs="auto" className={styles.itemsDetails}>
                <label className={styles.itemsDet}>Magic Sarap</label>
                <p className={styles.price}>₱5.00</p>
              </Col>
              <Col xs="auto" className={styles.itemsDetails}>
                <Button variant="light">+</Button>
                <label className={styles.quantity}>3</label>
                <Button variant="light">-</Button>
              </Col>
              <Col xs="auto" className={styles.itemsDetails}>
                <label className={styles.amount}>₱15.00</label>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item className={styles.WrapperlistItems} as="li">
            <Row className="align-items-center">
              <Col xs="auto" className={styles.itemsDetails}>
                <img
                  className={styles.productImage}
                  src="./pics/biskwir.png"
                  alt="products"
                />
              </Col>
              <Col xs="auto" className={styles.itemsDetails}>
                <label className={styles.itemsDet}> Rebisco Cre...</label>
                <p className={styles.price}>₱8.00</p>
              </Col>
              <Col xs="auto" className={styles.itemsDetails}>
                <Button variant="light">+</Button>
                <label className={styles.quantity}>1</label>
                <Button variant="light">-</Button>
              </Col>
              <Col xs="auto" className={styles.itemsDetails}>
                <label className={styles.amount}>₱8.00</label>
              </Col>
            </Row>
          </ListGroup.Item>
          <Row>
            <Col sm={8}>
              <label className={styles.totalPrice}>Total Price:</label>
            </Col>
            <Col sm={4}>
              <label className={styles.totalAmount}>₱33</label>
            </Col>
          </Row>
          <hr />
        </ListGroup>
      </Card>
    </div>
  );
};

export default Cart;
