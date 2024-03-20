import React, { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([
    {
      name: "product 1",
      contact: "Contact Details",
    },
    {
      name: "product 2",
      contact: "Contact Details",
    },
    {
      name: "product 3",
      contact: "Contact Details",
    },
    {
      name: "product 4",
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
        <div>Vendor Name</div>
      </div>

      <div>Products</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "20px 100px",
          gap: "20px",
          // backgroundColor: "skyblue",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            contact={product.contact}
          />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ name, contact }) => {
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
      <Link to={"/cart"}>
        <button>Add To Cart</button>
      </Link>
    </div>
  );
};

export default Products;
