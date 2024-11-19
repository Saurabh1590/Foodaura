import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, areaName, sla } = resData?.info;

  return (
    <div className="res-card m-2 md:m-4 p-3 sm:w-48 lg:w-64 lg:h-80 h-56 rounded-lg bg-gray-100 hover:bg-gray-200 shadow-md transition-transform duration-300 hover:scale-105">
      <img
        className="res-logo rounded-lg h-24 w-full object-cover md:h-24 lg:h-48 lg:w-full"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="px-2 mt-2">
        <h3 className="font-bold text-md md:text-lg py-0.5 truncate">{name}</h3>
        <h4 className="font-medium text-sm flex items-center">
          <i className="fa-solid fa-star pr-1 text-yellow-500"></i>
          {avgRating + " • " + sla.deliveryTime + " mins"}
        </h4>
        <h4 className="truncate text-sm font-normal text-gray-500 leading-5">
          {cuisines.join(", ")}
        </h4>
        <h4 className="font-normal text-sm text-gray-400">{areaName}</h4>
      </div>
    </div>
  );
  
};


export default RestaurantCard;
