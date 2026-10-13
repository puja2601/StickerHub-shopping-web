import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as likedheart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const StickerCard = ({ sticker }) => {
  let [like, setLike] = useState(false);

  const handelLike = () => {
    setLike(!like);
    if (!like) {
      toast.success("Sticker added to whishlist!");
    } else {
      toast.error("Sticker removed from whishlist!");
    }
  };

  return (
    <>
      <Link
        to={`/home/${sticker.productId}`}
        state={{ sticker }}
        key={sticker.productId}
        className="h-110 border-gray-100 border-2 shadow-lg bg-cover rounded-xl"
      >
        <div className="h-60 overflow-hidden rounded-t-xl ">
          <img
            src={sticker.imgUrl}
            className="w-full h-full rounded-t-xl hover:scale-125 duration-500"
          ></img>
        </div>
        <div className=" py-5 px-4 space-y-2">
          <div className="flex justify-between">
            <h2 className="text-2xl text-blue-900 font-bold dark:text-blue-200">
              {sticker.productName}
            </h2>
            <span className="text-black dark:text-white " onClick={handelLike}>
              {like ? (
                <FontAwesomeIcon icon={likedheart} className="text-red-600 " />
              ) : (
                <FontAwesomeIcon icon={faHeart} />
              )}
            </span>
          </div>
          <h3 className="text-l dark:text-white">
            {sticker.productDescription}
          </h3>
          <div className="flex justify-between items-center text-l">
            <button className="bg-gray-300 dark:bg-amber-50 rounded p-2">
              Rs {sticker.productPrice}
            </button>
            <button className="bg-blue-900 dark:bg-blue-600 rounded p-2 text-white cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default StickerCard;
