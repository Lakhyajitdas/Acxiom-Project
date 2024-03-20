import React from "react";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <div>
      <div>Item</div>
      <div>Details</div>

      <div>
        <div>Name</div>
        <div>Number</div>
      </div>
      <div>
        <div>Email</div>
        <div>Payment Method</div>
      </div>
      <div>
        <div>Address</div>
        <div>State</div>
      </div>
      <div>
        <div>City</div>
        <div>Pin Code</div>
      </div>
      <Link to={"/success"}>
        <button>Order Now</button>
      </Link>
    </div>
  );
};

export default CheckOut;
