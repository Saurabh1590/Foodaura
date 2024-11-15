import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import logo from "../utils/image/logo1.png";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser);
  return (
    <div className="flex justify-between bg-white-100 shadow-lg h-20">
      <div className="logo-container h-20 w-20">
        <img className="w-full" src={logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="mx-2">Cart</li>
          <button
            className="login "
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          > <span className="material-symbols-outlined">
          person
          </span>
            {btnNameReact}
          </button>

          {/* <li className="px-4 font-bold]]">
            {loggedInUser}
          </li> */}

        </ul>
      </div>
    </div>
  );
};

export default Header;
