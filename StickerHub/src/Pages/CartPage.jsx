import React from "react";
import emptycart from "../assets/images/emptycart.png";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <>
      <div className="min-h-screen px-6 py-20 bg-white dark:bg-gray-700 dark:text-white">
        <div className="max-w-6xl mx-auto text-center mb-14">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your <span className="text-pink-500">Cart</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Opps..! Your Cart is Empty!
          </p>
        </div>

        <div className="flex justify-center">
          <img src={emptycart} alt="image" className="h-80 w-80" />
        </div>

        <div className="flex justify-center mb-5">
          <button className="p-3 rounded-full bg-blue-300">
            <Link to="/home">Back to Main Page</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
