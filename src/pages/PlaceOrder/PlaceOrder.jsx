import { useContext } from "react";
import { StoreContext } from "../../components/context/StoreContext";

export const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="flex items-start justify-between gap-[50px] mt-[100px]">
      {/* place-order */}
      <div className="w-full max-w-[max(30%,500px)]">
        {/* place-order-left */}
        <p className="text-[30px] font-medium mb-[50px]">
          Delivery Information
        </p>
        {/* title */}
        <div className="flex gap-[10px]">
          {/* multi-fields */}
          <input
            className="mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-tomato"
            type="text"
            placeholder="First name"
          />
          <input
            className="mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-tomato"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-tomato"
          type="email"
          placeholder="Email address"
        />
        <input
          className="mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-tomato"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-[10px]">
          {/* multi-fields */}
          <input
            className="mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-tomato"
            type="text"
            placeholder="city"
          />
          <input
            className="mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-tomato"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-[10px]">
          {/* multi-fields */}
          <input
            className="mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-tomato"
            type="text"
            placeholder="Zip code"
          />
          <input
            className="mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-tomato"
            type="text"
            placeholder="country"
          />
        </div>
        <input
          className="mb-[15px] w-full p-[10px] border-[1px] border-solid border-[#c5c5c5] rounded-[4px] outline-tomato"
          type="number"
          placeholder="Phone"
        />
      </div>
      <div className="w-full max-w-[max(40%,500px)]">
        {/* place-order-right */}
        <div className="flex-1 flex flex-col gap-5">
          {/* cart-total */}
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
          <button className="bg-tomato text-white w-[max(15vw,200px)] py-4 px-0 mt-[30px] rounded-[4px] cursor-pointer">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};
