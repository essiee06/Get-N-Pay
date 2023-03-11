import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

const ShoppingCart = ({ cart, onRemoveFromCart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2>Shopping Cart:</h2>
      <Card style={{ width: "30rem" }}>
        <ListGroup variant="flush">
          {cart.map((product) => (
            <ListGroup.Item key={product.id}>
              {product.name} - ${product.price}{" "}
              <Button onClick={() => onRemoveFromCart(product)}>Remove</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <p>Total Price: ${totalPrice}</p>
      </Card>

      <h3> Total price: {totalPrice}</h3>
    </div>
  );
};

export default ShoppingCart;
