import React, { useState } from "react";

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
    <div>
      <div>
        <div>Home</div>
        <div>LogOut</div>
      </div>

      <div>
        <div>Vendor Name</div>
      </div>

      <div>Products</div>
      <div>
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
    <div>
      <div>{name}</div>
      <div>{contact}</div>
      <div>Shop Item</div>
    </div>
  );
};

export default Products;
