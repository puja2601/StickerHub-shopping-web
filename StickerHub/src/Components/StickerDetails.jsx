import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHeart,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const StickerDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const sticker = location.state?.sticker;

  // Prevent error if sticker is not available
  if (!sticker) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6">
        <h2 className="text-3xl font-bold mb-3">Sticker Not Found 😔</h2>

        <p className="text-gray-500 dark:text-gray-400 mb-6">
          We couldn't find the sticker details.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-semibold transition"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12">
      <div className="max-w-6xl mx-auto pt-10">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2  text-gray-600 dark:text-gray-300 hover:text-pink-500 transition"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Stickers
        </button>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-10 flex items-center justify-center min-h-112.5">
            <img
              src={sticker.imgUrl}
              alt={sticker.productName}
              className="max-h-[400px] max-w-full object-contain hover:scale-105 transition duration-500"
            />
          </div>

          {/* Details Section */}
          <div>
            {/* Category */}
            <span className="inline-block px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 text-sm font-semibold mb-5">
              {sticker.category || "Sticker"}
            </span>

            {/* Product Name */}
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              {sticker.productName}
            </h1>

            {/* Rating / Popularity */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1 text-yellow-400">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <span className="text-gray-500 dark:text-gray-400">
                {sticker.popularity || 0}% Popular
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-8 mb-8">
              {sticker.productDescription}
            </p>

            {/* Price */}
            <div className="mb-8">
              <span className="text-4xl font-bold text-pink-500">
                ₹{sticker.productPrice}
              </span>

              <span className="ml-3 text-gray-400 line-through">
                ₹{Number(sticker.productPrice) + 20}
              </span>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Quantity</h3>

              <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-pink-500 hover:text-white transition">
                  -
                </button>

                <span className="text-lg font-semibold">1</span>

                <button className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-pink-500 hover:text-white transition">
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-bold transition duration-300">
                <FontAwesomeIcon icon={faShoppingBasket} />
                Add to Cart
              </button>

              <button className="px-6 py-4 rounded-xl border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>

            {/* Extra Info */}
            <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Product ID
                </span>

                <span className="font-semibold">#{sticker.productId}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Category
                </span>

                <span className="font-semibold">
                  {sticker.category || "Sticker"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Availability
                </span>

                <span className="text-green-500 font-semibold">In Stock</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Information */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🚚</div>
            <h3 className="font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Quick and reliable delivery to your doorstep.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-bold mb-2">Premium Quality</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              High-quality stickers made to last.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">💖</div>
            <h3 className="font-bold mb-2">Made With Love</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Unique designs for your everyday collection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickerDetails;
