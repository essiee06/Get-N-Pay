import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const AddToCart = ({ product, onAddToCart }) => {
  return (
    <ListGroup>
      {product.name} - ${product.price}{" "}
      <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
    </ListGroup>
  );
};

export default AddToCart;
