import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <div>
        <div>Home</div>
        <div>View Product</div>
        <div>Request Item</div>
        <div>Product Status</div>
        <div>LogOut</div>
      </div>

      <div>Shopping Cart</div>

      <div>
        <div>
          <div>Image</div>
          <div>Image</div>
        </div>

        <div>
          <div>Name</div>
          <div>Product Name</div>
        </div>
        <div>
          <div>Price</div>
          <div>100/-</div>
        </div>
        <div>
          <div>Quantity</div>
          <div>2 </div>
        </div>
        <div>
          <div>Total Price</div>
          <div>200/-</div>
        </div>
        <div>
          <div>Action</div>
          <div>remove</div>
        </div>
      </div>

      <div>
        <div>
          <div>Grand Total</div>
          <div>200/-</div>
        </div>
        <div>Delete All</div>
      </div>
      <Link to={"/checkout"}>
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
