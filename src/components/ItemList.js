import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {

  const handleAddItem = () => {
    
  }
  return (
    <div>
      {items.map((item) => {
        const { id, name, price, description, imageId, defaultPrice } =
          item.card.info;

        return (
          <div
            key={id}
            className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
          >
            <div className="ml-4">
              <div className="py-2">
                <span>{name}</span>
                <span> - ₹{price / 100 || defaultPrice / 100}</span>
              </div>
              <p className="text-xs max-w-96">{description}</p>
            </div>
            <div className="">
              <button onClick={handleAddItem} className="absolute bg-white text-black rounded-md ml-12 p-2 hover:bg-gray-200">
                Add +
              </button>
              <img
                src={CDN_URL + imageId}
                alt={name}
                className="w-36 h-36 border rounded-xl object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
