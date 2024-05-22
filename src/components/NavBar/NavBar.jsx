import { useState } from "react";
import { assets } from "../../assets/image/assets.js";

export const NavBar = () => {
  const [menu, setMenu] = useState("home");

  const active = "pb-[2px] border-b-2 border-solid border-Very-dark-grayish";

  return (
    <div className="py-5 px-0 flex justify-between items-center ">
      {" "}
      {/* navbar */}
      <img className="w-[150px]" src={assets.logo} alt="Logo" />
      {/* logo */}
      <ul className="flex gap-5 text-lg text-Very-dark-grayish ">
        {/* navbar-menu */}
        <li
          onClick={() => setMenu("home")}
          className={`${menu === "home" ? active : ""} cursor-pointer`}
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" ? active : ""} cursor-pointer`}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={`${menu === "mobile-app" ? active : ""} cursor-pointer`}
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={`${menu === "contact-us" ? active : ""} cursor-pointer`}
        >
          contact us
        </li>
      </ul>
      <div className="flex items-center gap-10">
        {/* navbar-right */}
        <img src={assets.search_icon} alt="" />
        <div className="relative">
          {/* navbar-search-icon */}
          <img src={assets.basket_icon} alt="" />
          <div className="absolute min-w-[10px] min-h-[10px] bg-tomato rounded-[5px] top-[-8px] right-[-8px]"></div>
          {/* dot */}
        </div>
        <button className="text-base text-Very-dark-grayish border-solid border-[1px] border-tomato py-[10px] px-[30px] rounded-[50px] cursor-pointer hover:bg-lighter-tomato transition duration-300">
          Sign in
        </button>
      </div>
    </div>
  );
};
