import React, { useState } from "react";

const RequestItem = () => {
  const [items, setitems] = useState([
    {
      name: "Item 1",
    },
    {
      name: "Item 2",
    },
    {
      name: "Item 3",
    },
    {
      name: "Item 4",
    },
  ]);
  return (
    <div>
      <div>
        <div>Home</div>
        <div>Request Item</div>
        <div>LogOut</div>
      </div>

      <div>
        {items.map((item) => (
          <ItemCard key={item.name} name={item.name} />
        ))}
      </div>
    </div>
  );
};

const ItemCard = ({ name }) => {
  return <duv>{name}</duv>;
};

export default RequestItem;
