"use client";

import { useState } from "react";

const NewItem = () => {
  const [quantity, setQuantity] = useState(1); // Initialize state variable for quantity

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev)); // Increment quantity, max 20
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev)); // Decrement quantity, min 1
  };

  return (
    <div className="border p-4 rounded shadow-md max-w-sm mx-auto bg-white">
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-bold">{quantity}</span>
        <div className="flex space-x-2">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            disabled={quantity === 1}
          >
            -
          </button>
          <button
            onClick={increment}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            disabled={quantity === 20}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
