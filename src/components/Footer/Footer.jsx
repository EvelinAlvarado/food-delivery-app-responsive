import { assets } from "../../assets/image/assets";

export const Footer = () => {
  return (
    <div className="bg-bg-footer text-footer-color flex flex-col items-center gap-[20px] pt-20 pb-5 px-[8vw] mt-[100px]">
      {/* footer */}
      <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-20">
        {/* footer-content */}

        <div className="flex flex-col items-start gap-5">
          {/* footer-content-left */}
          <img src={assets.logo} alt="" />
          <p>
            Lorem Ipsum is simply text of the printing and typesetting industry.
            Ipsum has been the industry&apos;s dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
          <div className="flex gap-[15px]">
            {/* footer-social-icons */}
            <img
              className="w-10 cursor-pointer"
              src={assets.facebook_icon}
              alt=""
            />
            <img
              className="w-10 cursor-pointer"
              src={assets.twitter_icon}
              alt=""
            />
            <img
              className="w-10 cursor-pointer"
              src={assets.linkedin_icon}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-5">
          {/* footer-content-center */}
          <h2 className="uppercase text-white font-bold">Company</h2>
          <ul className="flex flex-col gap-[10px]">
            <li className="cursor-pointer hover:text-tomato">Home</li>
            <li className="cursor-pointer hover:text-tomato">About us</li>
            <li className="cursor-pointer hover:text-tomato">Delivery</li>
            <li className="cursor-pointer hover:text-tomato">Privacy policy</li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-5">
          {/* footer-content-right */}
          <h2 className="uppercase text-white font-bold">Get in touch</h2>
          <ul className="flex flex-col gap-[10px]">
            <il className="cursor-pointer hover:text-tomato">
              +1-212-456-7890
            </il>
            <il className="cursor-pointer hover:text-tomato">
              contact@tomato.com
            </il>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] my-5 bg-gray-400" />
      <p>Copyright 2024 © Tomato.com - All Right Reserved</p>
    </div>
  );
};
