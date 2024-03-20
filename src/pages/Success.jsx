import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div>
      <div>
        <div>Thank You</div>
        <div>Total Amount</div>

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

        <Link to={"/user"}>
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
