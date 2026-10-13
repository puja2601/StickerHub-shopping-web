import React from "react";

const SearchBlock = ({ setSearch, sortby, filteredSticker }) => {
  let category = [
    "ALL",
    "Animals",
    "Food",
    "Fruits",
    "Gaming",
    "Music",
    "Nature",
    "Space",
    "Sports",
    "Travel",
    "Vehicles",
  ];

  let filerby = ["ALL", "Popularity", "Low-High", "High-Low"];
  const searchSticker = (event) => {
    event.preventDefault();
    let value = event.target.value;
    setSearch(value);
  };

  return (
    <div className="pt-10 md:pt-20 flex justify-around items-center">
      <div>
        <label
          htmlFor="search"
          className="text-blue-900  dark:text-blue-200 text-xl font-bold"
        >
          Search{" "}
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search here.."
          className="border border-gray-300 shadow-lg rounded-lg p-2 dark:text-white"
          onChange={searchSticker}
        />
      </div>
      <div>
        <label
          htmlFor="sortby"
          className="text-blue-900  dark:text-blue-200 text-xl font-bold"
        >
          Sort By{" "}
        </label>
        <select
          id="sortby"
          className="border border-gray-300 shadow-lg rounded-lg p-2 dark:bg-white"
          onChange={sortby}
        >
          {category.map((option, indx) => (
            <option key={indx} value={option}>
              {" "}
              {option}{" "}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="filterby"
          className="text-blue-900  dark:text-blue-200  text-xl font-bold"
        >
          Filter By{" "}
        </label>
        <select
          id="filterby"
          className="border border-gray-300 shadow-lg rounded-lg p-2  dark:bg-white"
          onChange={filteredSticker}
        >
          {filerby.map((option, indx) => (
            <option key={indx} value={option}>
              {option}{" "}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBlock;
