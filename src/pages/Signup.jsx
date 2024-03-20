import React from "react";
import styles from "../styles.module.css";

const submitForm = () => {
  console.log("nova");
};

const handleChange = () => {
  console.log("nova");
};

const Signup = (name) => {
  return (
    <div>
      <div>
        <div style={{ display: `${name !== "vender"}? block : none` }}>
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

          <div style={{ display: `${name === "vender"}? block : none` }}>
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
          <button onClick={submitForm}>Singup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
