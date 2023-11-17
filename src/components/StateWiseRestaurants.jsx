import React, { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import SearchState from "./SearchState";
import LoadingSpinner from "./LoadingSpinner";

const StateWiseRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [serachTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://mocki.io/v1/30ee9e55-8ac6-4673-85fe-774866e7f260"
        );
        const newData = await response.json();
        setRestaurants(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const uniqueStates = [
    ...new Set(restaurants.map((restaurant) => restaurant.state)),
  ].filter((state) => state.toLowerCase().includes(serachTerm.toLowerCase()));

  const handleSearchTerm = (val) => {
    setSearchTerm(val);
  };
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container p-4 mx-auto min-h-[100vh]">
      <h1 className="mx-auto flex items-center justify-center my-8 text-4xl font-bold underline">
        State wise Restaurants list
      </h1>
      <SearchState handleSearchTerm={handleSearchTerm} />
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols:3 sm:grid-cols-2">
        {uniqueStates.length > 0 &&
          uniqueStates.map((item, index) => (
            <RestaurantList key={index} state={item} />
          ))}
      </div>
      {uniqueStates.length === 0 && (
        <h2 className="mx-auto flex items-center justify-center font-bold text-2xl">
          No search result found.
        </h2>
      )}
    </div>
  );
};

export default StateWiseRestaurants;
