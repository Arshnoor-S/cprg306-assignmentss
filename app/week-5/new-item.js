"use client";
import { useState } from "react";

const NewItem = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setCategory("produce");
    setQuantity(1);
  };

  return (
    <div className="bg-black p-4 rounded shadow-md max-w-sm mx-auto">
      {" "}
      {/* Outer container with black background */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item name"
            required
            className="mt-1 p-2 border rounded w-full text-black"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          {" "}
          {/* Flexbox container for input, buttons, and category */}
          <div className="flex items-center bg-white p-2 rounded mr-2">
            {" "}
            {/* Quantity section */}
            <span className="text-lg font-bold text-black">{quantity}</span>
            <div className="flex items-center ml-2">
              {" "}
              {/* Increment and Decrement buttons */}
              <button
                type="button"
                onClick={decrement}
                className={`px-2 py-1 text-white rounded ${
                  quantity === 1 ? "bg-gray-500" : "bg-blue-500"
                }`}
                disabled={quantity === 1}
              >
                -
              </button>
              <button
                type="button"
                onClick={increment}
                className="px-2 py-1 bg-blue-500 text-white rounded ml-2"
                disabled={quantity === 20}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 p-2 border rounded text-black"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen">Frozen Foods</option>
              <option value="canned">Canned Goods</option>
              <option value="dry">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded text-2xl"
        >
          +
        </button>
      </form>
    </div>
  );
};

export default NewItem;
