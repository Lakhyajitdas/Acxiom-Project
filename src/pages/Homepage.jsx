import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px 100px",
        gap: "20px",
      }}
    >
      <div>Welcome to the home page!</div>
      <button>
        <Link to="/usersignup">User Signup</Link>
      </button>
      <button>
        <Link to="/vendorsignup">Vendor Signup</Link>
      </button>
      <button>
        <Link to="/adminsignup">Admin Signup</Link>
      </button>
      <button>
        <Link to="/vendorlogin">Vendor Login</Link>
      </button>
      <button>
        <Link to="/userlogin">User Login</Link>
      </button>
      <button>
        <Link to="/adminlogin">Admin Login</Link>
      </button>
      {/* <button>LogIn</button> */}
    </div>
  );
};

export default Homepage;
