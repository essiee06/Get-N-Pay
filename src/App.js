import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import AddProduct from "./Pages/AdminPage/AddProduct/AddProduct";
// import data from "./Components/Back/Data/Data";
// import CheckOut from "./Pages/CheckOut/CheckOut";
import AddToCart from "./Pages/ShoppingCart/AddToCart";
import Editproduct from "./Pages/AdminPage/EditProduct/Editproduct";
import Dashboard from "./Pages/AdminPage/Dashboard/Dashboard";
import Inventory from "./Pages/AdminPage/Inventory/Inventory";
import Login from "./Pages/LoginPage/Login";
import Signup from "./Pages/LoginPage/Signup";
import InventoryManagement from "./Pages/AdminPage/InventoryManagement/InventoryManagement";
import AddEdit from "./Pages/AdminPage/AddEdit/AddEdit";
import Cart from "./Pages/ShoppingCart/Cart";
import NavBar from "./Components/Front/NavBar/NavBar";
// import Routers from "./Components/Front/Routes/Routers";

const App = () => {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      {/* For Customer Display */}
      {/* <AddToCart /> */}
      {/* for admin display */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shoppingcart" element={<Cart />} />
        <Route path="/adminside" element={<Dashboard />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct" element={<Editproduct />} />
        <Route path="/inventory" element={<AddEdit />} />
        <Route path="/inventoryManagement" element={<InventoryManagement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
