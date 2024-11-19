import RestaurantCard from "./RestaurantCard";
import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBody from "../utils/useBody";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const { listofRestaurants, filteredRestaurant, setFilteredRestaurant } = useBody();
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1 className="text-center mt-10">Looks like you're offline! Please check your connection.</h1>;
  }

  return !listofRestaurants || listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:justify-between items-center my-4">
        <div className="flex space-x-2 mb-4 md:mb-0">
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-2 py-1 md:w-64"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-1 rounded"
            onClick={() => {
              const filtered = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-gray-500 text-white px-4 py-1 rounded"
          onClick={() => {
            const topRated = listofRestaurants.filter((res) => res.info.avgRating > 4.5);
            setFilteredRestaurant(topRated);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Adjusted grid layout to show at least 2 cards on small screens and 4 on large */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};



export default Body;
