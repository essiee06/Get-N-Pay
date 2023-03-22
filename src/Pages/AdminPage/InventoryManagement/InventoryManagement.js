import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import NavBar from "../../../Components/NavBar/NavBar";
import styles from "./InventoryManagement.module.css";
import "@material-design-icons/font";
import { Link } from "react-router-dom";

import pb from "../../../lib/pocketbase";

//delete selected product data from database
export async function deleteSelected(id) {
  await pb.collection('inventory').delete(id);
  window.location.reload();
}

export default function InventoryManagement() {
  const [inventorys, setInventory] = useState([]);

  //fetching data from database
  useEffect(() => {
     async function getInventory() {
      return await pb.collection('inventory').getFullList();
    }
    return () => {
      getInventory().then((records) => setInventory(records));
    }
  }, [])

  return (
    <div>
            <NavBar />
            <Container fluid className={styles.wrapper}>
              <div className={styles.inventoryTxt}>Inventory</div>
              <div className={styles.addProdTxt}>
                <span class="material-symbols-outlined">add</span> ADD PRODUCT
              </div>
              <Container fluid className={styles.tableWrap}>
                <Table className={styles.table} striped>
                  <thead className={styles.header}>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>ID no.</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventorys.map((inventory) => (
                      <tr xs="auto" key={inventory.id}>
                      <td>
                        <Link to={`/editproduct/${inventory.id}`}>
                          <Button variant="warning" size="sm">
                            <span class="material-symbols-outlined">edit</span>
                          </Button>
                        </Link>
                      </td>
                      <td>
                        <Button variant="danger" size="sm" onClick={()=>deleteSelected(inventory.id)}>
                          <span class="material-symbols-outlined">delete</span>
                        </Button>
                      </td>
                      <td>{inventory.id_no}</td>
                      <td>{inventory.product_name}</td>
                      <td>₱ {inventory.price}</td>
                      <td>{inventory.quantity}</td>
                    </tr>
                    ))}
                  </tbody>
                </Table>
              </Container>
            </Container>
    </div>
  );
}
