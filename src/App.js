import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Front/NavBar/NavBar";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import AddProduct from "./Pages/AdminPage/AddProduct/AddProduct";
import data from "./Components/Back/Data/Data";
// import CheckOut from "./Pages/CheckOut/CheckOut";
import AddToCart from "./Pages/ShoppingCart/AddToCart";
import Editproduct from "./Pages/AdminPage/EditProduct/Editproduct";
import Dashboard from "./Pages/AdminPage/Dashboard/Dashboard";
import Inventory from "./Pages/AdminPage/Inventory/Inventory";
import Login from "./Pages/LoginPage/Login";
import Signup from "./Pages/LoginPage/Signup";
// import Routers from "./Components/Front/Routes/Routers";

const App = () => {
  const { productItems } = data;
  return (
    <React.Fragment>
      {/* For Customer Display */}
      <NavBar />
      <AddToCart />
      {/* for admin display */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/adminside" element={<Dashboard />} />
          <Route path="/addtocart" element={<AddToCart />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/editproduct" element={<Editproduct />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
