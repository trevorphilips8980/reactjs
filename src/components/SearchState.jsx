import React from "react";
import SearchIcon from "../Icons/SearchIcon";

const SearchState = ({ handleSearchTerm }) => {
  return (
    <div class="relative w-1/2 mx-auto my-4">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <SearchIcon />
      </div>
      <input
        type="text"
        onChange={(e) => handleSearchTerm(e.target.value)}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search State..."
      />
    </div>
  );
};

export default SearchState;
