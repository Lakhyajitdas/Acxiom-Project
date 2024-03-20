import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div>
      <div>Welcome Use </div>
      <div>
        <Link to={"/vendor"}>
          <button>Vendor</button>
        </Link>
        <Link to={"/cart"}>
          <button>Cart</button>
        </Link>
        <div>Guest List</div>
        <Link to={"/"}>
          <button>Order Status</button>
        </Link>
        <Link to={"/"}>
          <button>Log Out</button>
        </Link>
      </div>
    </div>
  );
};

export default User;
