import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(true)

  function handleCart(){
    setCart((cart) => !cart)
  }

  return (
    <li className={cart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">{cart ? "Add to Cart": "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
