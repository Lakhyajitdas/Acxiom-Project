import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/"}>
          <button>LogOut</button>
        </Link>
      </div>

      <div>Welcome Admin</div>

      <div>
        <Link to={"/maintainuser"}>
          <button>Maintain User</button>

          <button>Maintain Vendor</button>
        </Link>
      </div>
    </div>
  );
};

const MaintainVendor = () => {
  return (
    <div>
      <div>
        <div>Membership</div>
        <div>
          <div>Add</div>
          <div>Update</div>
        </div>
      </div>

      <div>
        <div>User Management</div>
        <div>
          <div>Add</div>
          <div>Update</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
