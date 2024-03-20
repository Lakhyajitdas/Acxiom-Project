import React from "react";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const styles = {
    cartContainerChild: {
      backgroundColor: "blue",
      color: "white",
      padding: "10px 20px",
    },
    cartContainer: {
      display: "flex",
      flexDirection: "row",
      margin: "20px 0px",
      gap: "20px",
      justifyContent: "space-between",
    },
    item: {
      backgroundColor: "blue",
      color: "white",
      padding: "10px 20px",
      width: "30%",
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
      <div style={styles.item}>Item</div>
      <div style={styles.item}>Details</div>

      <div style={styles.cartContainer}>
        <div style={styles.item}>Name</div>
        <div style={styles.item}>Number</div>
      </div>
      <div style={styles.cartContainer}>
        <div style={styles.item}>Email</div>
        <div style={styles.item}>Payment Method</div>
      </div>
      <div style={styles.cartContainer}>
        <div style={styles.item}>Address</div>
        <div style={styles.item}>State</div>
      </div>
      <div style={styles.cartContainer}>
        <div style={styles.item}>City</div>
        <div style={styles.item}>Pin Code</div>
      </div>
      <Link to={"/success"}>
        <button style={styles.item}>Order Now</button>
      </Link>
    </div>
  );
};

export default CheckOut;
