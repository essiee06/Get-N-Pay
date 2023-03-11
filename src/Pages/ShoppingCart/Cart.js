import React, { useState } from "react";
import products from "./data";
import AddToCart from "./AddToCart";
import ShoppingCart from "./ShoppingCart";
import { Card, ListGroup } from "react-bootstrap";
import "./AddToCart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    setTotalPrice(totalPrice + product.price);
  };

  const removeFromCart = (product) => {
    const index = cart.findIndex((p) => p.id === product.id);
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    setTotalPrice(totalPrice - product.price);
  };

  return (
    <div>
      <Card style={{ width: "30rem" }} className="productlist">
        <h2>Products:</h2>
        <ListGroup variant="flush">
          {products.map((product) => (
            <AddToCart
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </ListGroup>
      </Card>
      <Card className="cart">
        <ShoppingCart
          cart={cart}
          onRemoveFromCart={removeFromCart}
          totalPrice={totalPrice}
        />
      </Card>
    </div>
  );
};

export default Cart;
