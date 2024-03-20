import React, { useState } from "react";

const submitForm = () => {
  console.log("submit form");
};

const Update = () => {
  const [update, setUpdate] = useState();

  const handleChange = (e) => {
    setUpdate(e.target.value);
  };
  return (
    <div>
      <div>
        <div>Home</div>
        <div>LogOut</div>
      </div>

      <div>
        <div style={{ padding: 50 }}>
          <form>
            <fieldset>
              <legend>Update</legend>

              <input
                type="radio"
                name="update"
                id="update-1"
                value="Recived"
                onChange={handleChange}
                checked={update === "Recived"}
              />
              <label htmlFor="update-1">Recived</label>
              <br />

              <input
                type="radio"
                name="update"
                id="update-2"
                value="Ready"
                onChange={handleChange}
                checked={update === "Ready"}
              />
              <label htmlFor="update-2">Ready for Shipping</label>
              <br />

              <input
                type="radio"
                name="update"
                id="update-3"
                value="Out"
                onChange={handleChange}
                checked={update === "Out"}
              />
              <label htmlFor="update-3">Out For Delivery</label>
              <br />
            </fieldset>
            <button onClick={submitForm}>Update</button>
          </form>
          {/* <h1>
            {update === undefined
              ? "Please select your update"
              : `Your update: ${update}`}
          </h1> */}
        </div>
      </div>
    </div>
  );
};

export default Update;
