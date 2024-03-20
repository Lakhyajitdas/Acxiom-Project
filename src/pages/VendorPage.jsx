import React, { useState } from "react";
import { Link } from "react-router-dom";

const VendorPage = () => {
  const [vendors, setVendors] = useState([
    {
      name: "vendor 1",
      contact: "Contact Details",
    },
    {
      name: "vendor 2",
      contact: "Contact Details",
    },
    {
      name: "vendor 3",
      contact: "Contact Details",
    },
    {
      name: "vendor 4",
      contact: "Contact Details",
    },
  ]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px 100px",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "20px 100px",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <div>Home</div>
        <div>LogOut</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "20px 100px",
          gap: "20px",
          backgroundColor: "skyblue",
          justifyContent: "space-between",
        }}
      >
        <div>Vendor</div>
        <div>Florist</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "20px 100px",
          gap: "20px",
          // backgroundColor: "skyblue",
        }}
      >
        {vendors.map((vendor) => (
          <VendorCard
            key={vendor.name}
            name={vendor.name}
            contact={vendor.contact}
          />
        ))}
      </div>
    </div>
  );
};

const VendorCard = ({ name, contact }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        backgroundColor: "skyblue",
      }}
    >
      <div>{name}</div>
      <div>{contact}</div>
      <Link to={"/products"}>
        <button>Shop Item</button>
      </Link>
    </div>
  );
};

export default VendorPage;
