export const Header = () => {
  return (
    <div className="h-[38vw] tabletSm:h-[34vw] lg:max-h-[550px] my-[30px] mx-auto bg-header bg-no-repeat bg-contain relative">
      {/* header */}
      <div className="absolute flex flex-col items-start gap-[1.5vw] lg:gap-4 max-w-[65%] tabletSm:max-w-[50%] lg:max-w-[68%] bottom-[10%] lg:py-auto xl:bottom-20 left-[6vw] lg:left-24 animate-fadeIn">
        {/* header-contents */}
        <h2 className="font-medium text-white text-dynamic-xl 2xl:text-[71px]">
          Order your favorite food here
        </h2>
        <p className="hidden tabletSm:block tabletSm:text-white tabletSm:text-[1vw] lg:text-base">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="text-light-grey font-medium py-[2vw] tabletSm:py-[1vw] lg:py-4 px-[4vw] tabletSm:px-[2.3vw] lg:px-8 bg-white text-dynamic-sm lg:text-base rounded-[50px]">
          View Menu
        </button>
      </div>
    </div>
  );
};
