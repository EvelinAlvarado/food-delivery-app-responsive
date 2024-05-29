import { menu_list } from "../../assets/image/assets";

export const ExploreMenu = ({ category, setCategory }) => {
  const activeClass =
    "border-[4px] border-solid border-tomato py-[2px] px-[2px]";

  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      {/* explore-menu */}
      <h1 className="text-dark-greyish font-medium text-[25px]">
        Explore our menu
      </h1>
      <p className="max-w-full lg:max-w-[60%] text-[14px] lg:text-base text-greyish">
        {/* explore-menu-text */}
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="flex justify-between items-center text-center gap-[30px] py-[20px] overflow-x-scroll overflow-hidden scrollbar scrollbar-none">
        {" "}
        {/* explore-menu-list */}
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prevState) =>
                  prevState === item.menu_name ? "All" : item.menu_name
                )
              }
              className=""
              key={index}
            >
              {" "}
              {/* explore-menu-list-item */}
              <img
                className={`${
                  category === item.menu_name && activeClass
                }  w-[7.5vw] 2xl:w-[122px] min-w-20 cursor-pointer rounded-[50%] duration-200`}
                src={item.menu_image}
                alt=""
              />
              <p className="mt-[10px] text-light-grey text-dynamic-p 2xl:text-[22px] cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="mt-[-10px] mb-0 h-[2px] bg-very-light-grey border-none" />
    </div>
  );
};
