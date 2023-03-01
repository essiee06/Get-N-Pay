import React from "react";
import { Route, Routes } from "react-router-dom";
import AddToCart from "../../../Pages/ShoppingCart/AddToCart";

const Routers = (productItems) => {
  return (
    <div>
      <Routes>
        <Route path="/" exact>
          <AddToCart productItems={productItems} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routers;
