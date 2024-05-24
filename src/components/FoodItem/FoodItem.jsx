import { useContext } from "react";
import { assets } from "../../assets/image/assets";
import { StoreContext } from "../context/StoreContext";

export const FoodItem = ({ id, name, image, price, description }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="w-full m-auto rounded-[15px] transition duration-300 shadow-custom animate-fadeIn">
      {/* food-item */}
      <div className="relative">
        {/* food-item-img-container */}
        <img className="w-full rounded-t-[15px]" src={image} alt={name} />
        {/* food-item-image */}
        {!cartItems[id] ? (
          <img
            className="w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white">
            {/* food-item-counter */}
            <img
              className="w-[30px]"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Icon decrement"
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-[30px]"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Icon increment"
            />
          </div>
        )}
      </div>
      <div className="p-5">
        {/* food-item-info */}
        <div className="flex justify-between items-center mb-[10px]">
          {/* food-item-name-rating */}
          <p className="text-[20px] font-medium">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="rating" />
        </div>
        <p className="text-medium-grey text-xs">{description}</p>
        {/* food-item-description */}
        <p className="text-tomato text-[22px] font-medium mt-[10px]">
          €{price}
        </p>
        {/* food-item-price */}
      </div>
    </div>
  );
};
