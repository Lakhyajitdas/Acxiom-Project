import React from "react";
import { Link } from "react-router-dom";

const submitForm = () => {
  console.log("Submitting form");
};

const clear = () => {
  console.log("Clear form");
};

const Login = ({ name }) => {
  return (
    <div>
      <div>
        <div style={{ display: name === "vendor" ? "block" : "none" }}>
          <div>Chart</div>
          <div>Back</div>
        </div>
        <div>Event Management System</div>
        <form action="">
          <label htmlFor="UserId">User Id:</label>
          <br />
          <input type="text" id="UserId" name="userId" />
          <br />
          <label htmlFor="Pass">Password:</label>
          <br />
          <input type="password" id="Pass" name="Pass" />
          <br />
          <Link to={`/${name}`}>
            <button>Sign In</button>
          </Link>
          <button onClick={clear}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
