import React from "react";
import "./ShoppingCart.css";
import PropTypes from "prop-types";

export default function Cart({ number, item, price }) {
  return (
    <div className="cart-wrapper">
      <h2>{number}</h2>
      <h3>{item}</h3>
      <h4>{price}</h4>
    </div>
  );
}
Cart.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
