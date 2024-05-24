import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { FoodItem } from "../FoodItem/FoodItem";

export const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="mt-[30px]">
      {/* food-display */}
      <h2 className="text-h2 font-semibold">Top dishes near you</h2>
      <div className="grid grid-cols-auto-fill-240 mt-[30px] gap-y-[30px] gap-x-[50px]">
        {/* food-display-list */}
        {food_list.map((item, index) => {
          {
            console.log(category, item.category);
          }
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
