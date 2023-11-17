import React from "react";
import RightIcon from "../Icons/RightIcon";
import { data } from "../data";

const RestaurantList = ({ state }) => {
  const stateRestaurants = data.filter(
    (restaurant) => restaurant.state === state
  );
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-[24px] sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto shadow">
      <div className="flex justify-between border-b-2">
        <h5 className="mb-2 text-xl font-medium text-gray-500 dark:text-gray-400 ">
          {state}
        </h5>
        <span class="inline-flex my-auto items-center justify-center w-6 h-6 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
          {stateRestaurants.length}
        </span>
      </div>
      <ul className="space-y-3 my-4">
        {stateRestaurants.map((item, index) => {
          return (
            <li className="flex items-center">
              <RightIcon />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                {item.restaurant_name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantList;
