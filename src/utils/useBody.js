import { useEffect, useState } from "react";

const useBody = () => {
  // fetchdata
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
  };
  return {listofRestaurants,filteredRestaurant, setFilteredRestaurant, setListofRestaurants};
};

export default useBody;
