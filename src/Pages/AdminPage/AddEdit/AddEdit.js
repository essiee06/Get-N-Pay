import React, { useState } from "react";
import InventoryManagement from "../InventoryManagement/InventoryManagement";

function AddEdit() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [editingProductIndex, setEditingProductIndex] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddProduct = () => {
    if (name.trim() && price.trim() && description.trim()) {
      const newProduct = { name, price, description };
      if (editingProductIndex !== null) {
        const newProducts = [...products];
        newProducts[editingProductIndex] = newProduct;
        setProducts(newProducts);
        setEditingProductIndex(null);
      } else {
        setProducts([...products, newProduct]);
      }
      setName("");
      setPrice("");
      setDescription("");
    }
  };

  const handleEditProduct = (index) => {
    setName(products[index].name);
    setPrice(products[index].price);
    setDescription(products[index].description);
    setEditingProductIndex(index);
  };

  return (
    <div>
      <h1>Inventory Management System</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={handlePriceChange} />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
      </label>
      <button onClick={handleAddProduct}>
        {editingProductIndex !== null ? "Save Product" : "Add Product"}
      </button>
      <InventoryManagement
        products={products}
        onEditProduct={handleEditProduct}
      />
    </div>
  );
}

export default AddEdit;
