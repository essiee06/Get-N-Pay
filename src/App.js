import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddProduct from "./Pages/AdminPage/AddProduct/AddProduct";
// import data from "./Components/Back/Data/Data";
// import CheckOut from "./Pages/CheckOut/CheckOut";
import Editproduct from "./Pages/AdminPage/EditProduct/Editproduct";
import Dashboard from "./Pages/AdminPage/Dashboard/Dashboard";
import Login from "./Pages/LoginPage/Login";
import Signup from "./Pages/LoginPage/Signup";
import InventoryManagement from "./Pages/AdminPage/InventoryManagement/InventoryManagement";
import AddEdit from "./Pages/AdminPage/AddEdit/AddEdit";
import Cart from "./Pages/ShoppingCart/Cart";
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
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shoppingcart" element={<Cart />} />
        <Route path="/adminside" element={<Dashboard />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct" element={<Editproduct />} />
        <Route path="/inventory" element={<AddEdit />} />
        <Route path="/inventoryManagement" element={<InventoryManagement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
