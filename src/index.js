import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
function Item({ item }) {
    // Add function to handle button click
    function handleAddToCartClick() {
      console.log("clicked item:", item);
    }
  
    return (
      <li className={item.isInCart ? "in-cart" : ""}>
        <span>{item.name}</span>
        <span className="category">{item.category}</span>
        {/* add the onClick listener */}
        <button
          className={item.isInCart ? "remove" : "add"}
          onClick={handleAddToCartClick}
        >
          {item.isInCart ? "Remove From" : "Add to"} Cart
        </button>
        <button className="remove">Delete</button>
      </li>
    );
  }

ReactDOM.render(<App />, document.getElementById("root"));
