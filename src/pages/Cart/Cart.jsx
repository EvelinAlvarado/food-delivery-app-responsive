import { useContext } from "react";
import { StoreContext } from "../../components/context/StoreContext";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="mt-[100px]">
      {/* cart */}
      <div>
        {/* cart-items */}
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-light-grey text-[max(1vw,12px)] tabletSm:text-[24px]">
          {/* cart-items-title */}
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,12px)] tabletSm:text-[24px] my-[10px] mx-0 text-black">
                  {/* cart-items-title    cart-items-item */}
                  <img className="w-[50px]" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>€{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>€{item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cursor-pointer"
                  >
                    x
                  </p>
                </div>
                <hr className="h-[1px] bg-very-light-grey" />
              </div>
            );
          }
        })}
      </div>
      <div className="mt-20 flex flex-col-reverse tabletSm:grid tabletSm:grid-cols-2 gap-20">
        {/* cart-bottom */}
        <div className=" flex flex-col gap-5">
          {/* cart-total flex-1*/}
          <h2 className="text-2xl font-semibold">Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              {/* cart-total-details */}
              <p>Subtotal</p>
              <p>€{getTotalCartAmount()}</p>
            </div>
            <hr className="my-[10px] mx-0" />
            <div className="flex justify-between text-[#555]">
              {/* cart-total-details */}
              <p>Delivery fee</p>
              <p>€{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="my-[10px] mx-0" />
            <div className="flex justify-between text-[#555]">
              {/* cart-total-details */}
              <b>Total</b>
              <b>
                €{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="bg-tomato text-white py-4 px-0 rounded-[4px] cursor-pointer"
          >
            {/* w-[max(15vw,200px)] */}
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="justify-start ">
          {/* cart-promocode */}

          <p className="text-[#555]">If you have a promo code, enter it here</p>
          <div className="mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
            {/* cart-promocode-input */}
            <input
              className="bg-transparent pl-[10px]"
              type="text"
              placeholder="promo code"
            />
            <button className=" py-4 px-5 bg-black text-white rounded-[4px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
