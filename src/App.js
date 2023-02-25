import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import AddProduct from "./Pages/AdminPage/AddProduct/AddProduct";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<ShoppingCart />} />
          <Route path="addproduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
