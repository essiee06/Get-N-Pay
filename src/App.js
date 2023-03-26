import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddProduct from "./Pages/AdminPage/AddProduct/AddProduct";
// import data from "./Components/Back/Data/Data";
// import CheckOut from "./Pages/CheckOut/CheckOut";
import Editproduct from "./Pages/AdminPage/EditProduct/Editproduct";
import Login from "./Pages/LoginPage/Login";
import Signup from "./Pages/LoginPage/Signup";
import InventoryManagement from "./Pages/AdminPage/InventoryManagement/InventoryManagement";
import Cart from "./Pages/ShoppingCart/Cart";
import LoginAdmin from "./Pages/AdminPage/LoginAdmin/LoginAdmin";
import ForgotPass from "./Pages/ForgotPass/ForgotPass";
// import Routers from "./Components/Front/Routes/Routers";

const App = () => {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      {/* For Customer Display */}
      {/* <AddToCart /> */}
      {/* for admin display */}
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/admin/login" exact element={<LoginAdmin />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/shoppingcart" exact element={<Cart />} />
        <Route path="/addproduct" exact element={<AddProduct />} />
        <Route path="/editproduct" exact element={<Editproduct />} />
        <Route path="/forgotpassword" exact element={<ForgotPass />} />

        <Route
          path="/admin/inventory"
          exact
          element={<InventoryManagement />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
