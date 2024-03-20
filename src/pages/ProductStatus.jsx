import React from "react";
import { Link } from "react-router-dom";

const ProductStatus = () => {
  return (
    <div>
      <div>ProductStatus</div>
      <div>
        <div>Home</div>
        <div>LogOut</div>
      </div>

      <div>
        <div>
          <div>Name</div>
          <div>{"     "}</div>
        </div>

        <div>
          <div>Email</div>
          <div>{"     "}</div>
        </div>

        <div>
          <div>Address</div>
          <div>{"     "}</div>
        </div>
        <div>
          <div>Status</div>
          <div>{"     "}</div>
        </div>
        <div>
          <Link to={"/update"}>
            <button>Update</button>
          </Link>
          <div>{"     "}</div>
        </div>
        <div>
          <div>Delete</div>
          <div>{"     "}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductStatus;
