import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import NavBar from "../../../Components/NavBar/NavBar";
import styles from "./InventoryManagement.module.css";
import "@material-design-icons/font";

import { getInventory } from "../../../lib/pocketbase";

export default function InventoryManagement() {
  const [inventorys, setInventory] = useState([]);

  useEffect(() => {
    getInventory()
    .then((records) => setInventory(records));
  }, []);
  
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
                        <span class="material-symbols-outlined">edit</span>
                      </td>
                      <td>
                        <span class="material-symbols-outlined">delete</span>
                      </td>
                      <td>{inventory.id_no}</td>
                      <td>{inventory.product_name}</td>
                      <td>	₱{inventory.price}</td>
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
