import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
// import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <ShoppingCart /> */}
  </React.StrictMode>
);
