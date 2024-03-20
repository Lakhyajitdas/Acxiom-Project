import React, { useState } from "react";

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
    <div>
      <div>
        <div>Home</div>
        <div>LogOut</div>
      </div>

      <div>
        <div>Vendor</div>
        <div>Florist</div>
      </div>

      <div>
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
    <div>
      <div>{name}</div>
      <div>{contact}</div>
      <div>Shop Item</div>
    </div>
  );
};

export default VendorPage;
