import { useContext, useState } from "react";
import { assets } from "../../assets/image/assets.js";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext.jsx";

export const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  const active = "pb-[2px] border-b-2 border-solid border-Very-dark-grayish";

  return (
    <div className="py-5 px-0 flex justify-between items-center ">
      {" "}
      {/* navbar */}
      <Link to="/">
        <img
          className="w-[120px] tablet:w-[140px] lg:w-[150px]"
          src={assets.logo}
          alt="Logo"
        />
      </Link>
      {/* logo */}
      <ul className="hidden md:flex gap-[15px] tablet:gap-[18px] lg:gap-5 text-base tablet:text-[17px] lg:text-lg text-Very-dark-grayish ">
        {/* navbar-menu */}
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`${menu === "home" ? active : ""} cursor-pointer`}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" ? active : ""} cursor-pointer`}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={`${menu === "mobile-app" ? active : ""} cursor-pointer`}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={`${menu === "contact-us" ? active : ""} cursor-pointer`}
        >
          contact us
        </a>
      </ul>
      <div className="flex items-center gap-5 tablet:gap-[30px] lg:gap-10">
        {/* navbar-right */}
        <img
          className="w-5 tablet:w-[22px] lg:w-[27px]"
          src={assets.search_icon}
          alt="Search icon"
        />
        <div className="relative">
          {/* navbar-search-icon */}
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket icon" />
          </Link>
          <div
            className={`${
              getTotalCartAmount() === 0
                ? ""
                : "absolute min-w-[10px] min-h-[10px] bg-tomato rounded-[5px] top-[-8px] right-[-8px]"
            }`}
          ></div>
          {/* dot */}
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="text-[15px] tablet:text-base text-Very-dark-grayish border-solid border-[1px] border-tomato py-[7px] tablet:py-2 lg:py-[10px] px-5 tablet:px-[25px] lg:px-[30px] rounded-[50px] cursor-pointer hover:bg-lighter-tomato transition duration-300"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};
