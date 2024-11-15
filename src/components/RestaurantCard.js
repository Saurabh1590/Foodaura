import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    areaName,
    sla: { deliveryTime },
  } = resData?.info;

  console.log(resData);

  return (
    <div className="res-card m-7 p-4 w-[273px] h-[300px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="res-logo rounded-lg w-[273px] h-[188px] object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className=" px-2">
        <h3 className="font-bold text-lg py-0.5 truncate w-full">{name}</h3>
        <h4 className="font-medium flex items-center"><i className="fa-solid fa-star pr-1"></i>{avgRating + " • " + deliveryTime + " mins"}</h4>
        <h4 className="truncate w-full font-normal text-gray-400 leading-5">{cuisines.join(", ")} </h4>
        <h4 className="font-normal text-gray-400">{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
