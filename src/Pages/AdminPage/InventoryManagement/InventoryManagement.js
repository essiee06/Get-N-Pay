import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Row,
  Tab,
  Table,
} from "react-bootstrap";
import styles from "./InventoryManagement.module.css";

function InventoryManagement() {
  // RFID Tag UID No.:
  // Item Name:
  // Price:
  // Upload image:
  const [products, setProducts] = useState([]);
  const [UID, setUID] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [image, setImage] = useState("");
  const [editing, setEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const addProduct = () => {
    if (productName && productPrice) {
      const newProduct = {
        name: productName,
        price: productPrice,
        uid: UID,
        image: image,
      };
      if (editing) {
        const updatedProducts = [...products];
        updatedProducts[editingIndex] = newProduct;
        setProducts(updatedProducts);
        setEditing(false);
        setEditingIndex(null);
      } else {
        setProducts([...products, newProduct]);
      }
      setProductName("");
      setProductPrice("");
    }
  };

  const editProduct = (index) => {
    setProductName(products[index].name);
    setProductPrice(products[index].price);
    setUID(products[index].uid);
    setImage(products[index].image);
    setEditing(true);
    setEditingIndex(index);
  };

  const deleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div>
      {/* <h2 className={styles.title}>Inventory</h2> */}
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Container fluid className={styles.wrapper}>
                  <div>
                    <label>RFID Tag UID No.:</label>
                    <input
                      type="text"
                      value={UID}
                      onChange={(e) => setUID(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Product Name:</label>
                    <input
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Product Price:</label>
                    <input
                      type="number"
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Upload Image:</label>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Control
                        type="file"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                      />
                    </Form.Group>
                    {/* <input
            type="number"
            value={image}
            onChange={(e) => setimage(e.target.value)}
          /> */}
                  </div>
                  <Button onClick={addProduct}>
                    {editing ? "Update Product" : "Add Product"}
                  </Button>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Table striped="columns">
                  <thead>
                    <tr>
                      <th>RFID Tag UID No.</th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index}>
                        <td>{product.uid}</td>
                        <td>{product.name}</td>
                        <td>00</td>
                        <td>{product.price}</td>
                        <td>{product.image}</td>
                        <td>
                          <Button
                            href="first"
                            onClick={() => editProduct(index)}
                          >
                            Edit
                          </Button>
                        </td>
                        <td>
                          <Button onClick={() => deleteProduct(index)}>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default InventoryManagement;
