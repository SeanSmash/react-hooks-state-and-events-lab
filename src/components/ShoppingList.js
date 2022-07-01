import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleFilterChange(event){
    setSelectedCategory(event.target.value)
  }

  const foodsToDisplay = items.filter(item => {
    if (selectedCategory === "All"){
      return true
    } else {
      return selectedCategory === item.category
    }
    })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilterChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
