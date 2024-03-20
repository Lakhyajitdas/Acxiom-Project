import React from "react";
import styles from "../styles.module.css";
import { Link } from "react-router-dom";

const submitForm = () => {
  console.log("nova");
};

const handleChange = () => {
  console.log("nova");
};

const Signup = ({ name }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px 100px",
        gap: "20px",
      }}
    >
      <div>
        <div
          style={{
            display: name !== "vendor" ? "block" : `none`,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>Chart</div>
          <div>Back</div>
        </div>
        <div
          style={{
            backgroundColor: "skyblue",
            margin: "20px 20px",
            padding: "15px",
          }}
        >
          Event Management System
        </div>

        <form action="">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "20px 100px",
              gap: "20px",
            }}
          >
            <div>
              <label className={styles.label} htmlFor="UserId">
                Name
              </label>
              <input type="text" id="UserId" name="userId" />
            </div>

            <div>
              <label className={styles.label} htmlFor="Email">
                Email
              </label>
              <input type="email" id="Email" name="Email" />
            </div>
            <div>
              <label className={styles.label} htmlFor="Pass">
                Password:
              </label>
              <input type="password" id="Pass" name="Pass" />
            </div>

            <div style={{ display: name === "vendor" ? "block" : `none` }}>
              <label className={styles.label} htmlFor="Category">
                Category
              </label>
              <select value="Category" onChange={handleChange}>
                <option value="fruit" id="Category">
                  Drop Down
                </option>

                <option value="Catering">Catering</option>
                <option value="Florist">Florist</option>
                <option value="Decoration">Decoration</option>
                <option value="Lighting">Lighting</option>
              </select>
            </div>

            <Link to={`/${name}`}>
              <button>Sign Up</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
