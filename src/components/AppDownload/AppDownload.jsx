import { assets } from "../../assets/image/assets";

export const AppDownload = () => {
  return (
    <div className="mx-auto mt-[100px] text-[max(3vw,20px)] 2xl:text-[40px] text-center font-medium">
      {/* app-download */}
      <p>
        For Better Experience Download <br />
        Tomato App
      </p>
      <div className="flex items-center flex-row justify-center gap-[max(2vw,10px)] mt-10">
        {/* app-download-platform */}
        <img
          className="w-[max(30vw,120px)] sm:max-w-[180px] self-stretch cursor-pointer transition duration-500 hover:scale-105"
          src={assets.play_store}
          alt="Play Store"
        />
        {/* w-40 sm:w-[180px] */}
        <img
          className="w-[max(30vw,120px)] max-w-[180px] self-stretch cursor-pointer transition duration-500 hover:scale-105"
          src={assets.app_store}
          alt="Apple Store"
        />
      </div>
    </div>
  );
};
