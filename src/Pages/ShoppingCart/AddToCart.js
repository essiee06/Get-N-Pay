import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import styles from "./AddToCart.module.css";

const AddToCart = ({ product, onAddToCart }) => {
  return (
    <ListGroup>
      <Card style={{ width: "10rem" }}>
        <Card.Img
          variant="top"
          className={styles.imagebody}
          src={product.image}
        />
        <Card.Body>
          <Card.Title>
            {product.name} - {product.price}
          </Card.Title>

          <Button variant="primary" onClick={() => onAddToCart(product)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
      {/* <Card>
        <img className={styles.imagebody} src={product.image} />
      </Card>
      {product.name} - ${product.price}
      <Button onClick={() => onAddToCart(product)}>Add to Cart</Button> */}
    </ListGroup>
  );
};

export default AddToCart;
