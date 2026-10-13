import React from "react";
import StickerCard from "./StickerCard";
import PageTitle from "./PageTitle";
import SearchBlock from "./SearchBlock";
import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

import apiClent from "../api/apiClient";

const StickersBlock = () => {
  let [search, setSearch] = useState("");
  let [sort, setSort] = useState("ALL");
  let [filteredProd, setFilteredProd] = useState("ALL");

  const product = useLoaderData();

  const AllProducts = product.filter(
    (sticker) =>
      sticker.productName.toLowerCase().includes(search.toLowerCase()) ||
      sticker.productDescription.toLowerCase().includes(search.toLowerCase()),
  );

  const getSortByValue = (event) => {
    let svalue = event.target.value;
    setSort(svalue);
  };

  const sortProduct =
    sort === "ALL"
      ? AllProducts
      : AllProducts.filter((sticker) => sticker.category.includes(sort));

  const filterPrice = (e) => {
    let filtervalue = e.target.value;
    setFilteredProd(filtervalue);
  };

  const filterStickerByPrice = [...sortProduct];
  switch (filteredProd) {
    case "ALL":
      break;

    case "Popularity":
      filterStickerByPrice.sort((a, b) => b.popularity - a.popularity);
      break;

    case "Low-High":
      filterStickerByPrice.sort(
        (a, b) => Number(a.productPrice) - Number(b.productPrice),
      );
      break;

    case "High-Low":
      filterStickerByPrice.sort(
        (a, b) => Number(b.productPrice) - Number(a.productPrice),
      );
      break;

    default:
      break;
  }

  return (
    <>
      <div className="pt-20 md:w-[80%] w-[90%] mx-auto">
        <PageTitle />
        <SearchBlock
          search={search}
          setSearch={setSearch}
          sortby={getSortByValue}
          filteredSticker={filterPrice}
        />
      </div>

      {filterStickerByPrice.length == 0 ? (
        <>
          <div className="md:w-[50%] w-[70%] text-2xl font-bold mx-auto text-center p-5 mt-10 mb-10 bg-blue-200 rounded-2xl">
            No Data found..!
          </div>
        </>
      ) : (
        <>
          <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pt-10 pb-10">
            {filterStickerByPrice.map((sticker, indx) => {
              return <StickerCard key={indx} sticker={sticker} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default StickersBlock;

export async function produtLoader() {
  try {
    const response = await apiClent.get("/stickers");
    return response.data;
  } catch (error) {
    throw new Response(error.message || "Something went wrong", {
      status: error.status || 500,
    });
  }
}
