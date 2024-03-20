import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px 100px",
      }}
    >
      <div>Welcome Use </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "20px 100px",
          gap: "20px",
        }}
      >
        <Link to={"/vendorpage"}>
          <button>Vendor</button>
        </Link>
        <Link to={"/cart"}>
          <button>Cart</button>
        </Link>
        <div>Guest List</div>
        <Link to={"/"}>
          <button>Order Status</button>
        </Link>
      </div>
      <div>
        <Link to={"/"}>
          <button>Log Out</button>
        </Link>
      </div>
    </div>
  );
};

export default User;
