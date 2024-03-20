import React from "react";
import { Link } from "react-router-dom";

const Vendor = () => {
  return (
    <div>
      <div>Welcome Vendor</div>

      <div>Your Item</div>
      <div>Add New Item</div>
      <Link to={"/productstatus"}>
        <button>Transection</button>
      </Link>

      <Link to={"/"}>
        <button>LogOut</button>
      </Link>
    </div>
  );
};

export default Vendor;
