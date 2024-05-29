import { useState } from "react";
import { assets } from "../../assets/image/assets";

export const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className="absolute z-[1] w-full h-full bg-black bg-opacity-55 grid">
      {/* login-popup */}
      <form
        action=""
        className="place-self-center w-[max(23vw,330px)] text-greyish bg-white flex flex-col gap-6 py-6 px-[30px] rounded-lg text-[14px] animate-fadeIn2"
      >
        {/* login-popup-container */}
        <div className="flex justify-between items-center text-black">
          {/* login-popup-title */}
          <h2 className="text-lg font-bold">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            className="cursor-pointer w-4"
            src={assets.cross_icon}
            alt="Cross icon"
          />
        </div>
        <div className="flex flex-col gap-5">
          {/* login-popup-inputs */}
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              className="border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]"
              type="text"
              placeholder="Your name"
              id=""
              required
            />
          )}

          <input
            className="border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]"
            type="email"
            placeholder="Your email"
            id=""
            required
          />
          <input
            className="border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]"
            type="password"
            placeholder="Password"
            id=""
            required
          />
        </div>
        <button className="p-[10px] rounded-[4px] text-white bg-tomato text-[15px] cursor-pointer">
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-start gap-2 mt-[-15px]">
          {/* login-popup-condition */}
          <input className="mt-[5px]" type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              className="cursor-pointer text-tomato font-medium"
              onClick={() => setCurrentState("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="cursor-pointer text-tomato font-medium"
              onClick={() => setCurrentState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};
