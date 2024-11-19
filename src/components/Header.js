import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import logo from "../utils/image/logo1.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-white-100 shadow-lg h-20 w-full px-4 md:px-8 items-center">
      <div className="logo-container w-12 h-12">
        <img className="h-full w-full object-contain" src={logo} alt="Logo" />
      </div>
      {/* Hamburger menu for small screens */}
      <div className="block md:hidden">
        <button className="text-2xl">☰</button>
      </div>
      <div className="hidden md:flex items-center">
        <ul className="flex space-x-4">
          <li className="px-2">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-2 font-bold text-xl">Cart ({cartItems.length} items)</li>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={() => {
              setBtnNameReact((prev) =>
                prev === "Login" ? "Logout" : "Login"
              );
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
