import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const styles = {
    cartContainerChild: {
      backgroundColor: "blue",
      color: "white",
      padding: "10px 20px",
    },
    cartContainer: {
      display: "flex",
      flexDirection: "column",
      margin: "20px 0px",

      gap: "20px",
      justifyContent: "space-between",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px 100px",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "20px 0px",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <div>Home</div>
        <div>View Product</div>
        <div>Request Item</div>
        <div>Product Status</div>
        <div>LogOut</div>
      </div>

      <div
        style={{
          margin: "0px 300px",
          padding: "5px 0px",
          backgroundColor: "skyblue",
        }}
      >
        Shopping Cart
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "20px 0px",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <div style={styles.cartContainer}>
          <div style={styles.cartContainerChild}>Image</div>
          <div style={styles.cartContainerChild}>Image</div>
        </div>

        <div style={styles.cartContainer}>
          <div style={styles.cartContainerChild}>Name</div>
          <div style={styles.cartContainerChild}>Product Name</div>
        </div>
        <div style={styles.cartContainer}>
          <div style={styles.cartContainerChild}>Price</div>
          <div style={styles.cartContainerChild}>100/-</div>
        </div>
        <div style={styles.cartContainer}>
          <div style={styles.cartContainerChild}>Quantity</div>
          <div style={styles.cartContainerChild}>2 </div>
        </div>
        <div style={styles.cartContainer}>
          <div style={styles.cartContainerChild}>Total Price</div>
          <div style={styles.cartContainerChild}>200/-</div>
        </div>
        <div style={styles.cartContainer}>
          <div style={styles.cartContainerChild}>Action</div>
          <div style={styles.cartContainerChild}>remove</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "20px 100px",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        <div>Grand Total</div>
        <div>200/-</div>
        <div>
          <button>Delete All</button>
        </div>
      </div>
      <Link to={"/checkout"}>
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
