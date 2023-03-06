import React, { useState } from "react";
import "./AddToCart.css";
// import products from "../../Components/Back/Data/Data";
import { Card, Container, ListGroup, Tab, Tabs } from "react-bootstrap";
import NavBar from "../../Components/Front/NavBar/NavBar";

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

const AddToCart = () => {
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
      <NavBar />
      <Tabs
        defaultActiveKey="addtocart"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="addtocart" title="Add To Cart">
          <h2>Products:</h2>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              {products.map((product) => (
                <ListGroup.Item key={product.id}>
                  {product.name} - ${product.price}{" "}
                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Tab>
        <Tab eventKey="shooping" title="Shopping Cart">
          <h2>Shopping Cart:</h2>
          <Card style={{ width: "18rem" }}>
            <ListGroup variant="flush">
              {cart.map((product) => (
                <ListGroup.Item key={product.id}>
                  {product.name} - ${product.price}{" "}
                  <button onClick={() => removeFromCart(product)}>
                    Remove
                  </button>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <p>Total Price: ${totalPrice}</p>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default AddToCart;
