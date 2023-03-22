import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import NavBar from "../../../Components/NavBar/NavBar";
import styles from "./InventoryManagement.module.css";
import "@material-design-icons/font";
import NavBarAdmin from "../../../Components/NavBarAdmin/NavBarAdmin";
// import "./InventoryManagement.css";

const InventoryManagement = () => {
  return (
    <div>
      <NavBarAdmin />
      <Container fluid className={styles["body-wrapper"]}>
        <div className={styles.inventoryTxt}>Inventory</div>
        <div className={styles.addProdTxt}>
          <button href="/addproduct">
            <a className={styles.icon} href="/addproduct">
              <span class="material-symbols-outlined">add</span>
              ADD PRODUCT
            </a>
          </button>
        </div>
        <Container fluid className={styles.tableWrap}>
          <Table className={styles.table} striped>
            <thead className={styles.header}>
              <tr>
                <th></th>
                <th></th>
                <th>ID no.</th>
                <th>Product name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr xs="auto">
                <td>
                  <button class="material-symbols-outlined">
                    <a href="/editproduct" className={styles.icon}>
                      edit
                    </a>
                  </button>
                </td>
                <td>
                  <button class="material-symbols-outlined">delete</button>
                </td>
                <td>123</td>
                <td>Busog Lusog</td>
                <td>₱10.00</td>
                <td>20</td>
              </tr>
              <tr>
                <td>
                  <span class="material-symbols-outlined">edit</span>
                </td>
                <td>
                  <span class="material-symbols-outlined">delete</span>
                </td>
                <td>124</td>
                <td>Magic Sarap</td>
                <td>₱3.00</td>
                <td>20</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </div>
  );
};

export default InventoryManagement;
