import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/image/assets";

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    // Check if the item with itemId is not in the cart
    if (!cartItems[itemId]) {
      // If not in the cart, add the item with a quantity of 1
      setCartItems((prev) => ({ ...prev, [itemId]: 1 })); // Add a key-value pair: itemId as key, quantity 1 as value
    } else {
      // If the item is already in the cart, increment the quantity by 1
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    // Decrement the quantity of the item with itemId in the cart by 1
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
