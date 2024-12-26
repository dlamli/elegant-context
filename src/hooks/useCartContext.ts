import { useContext } from "react";

import { CartContext } from "../store/ShoppingCartContext";

export const useCartContext = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext)
    throw new Error("useCartContext must be used within a CartContextProvider");

  return {
    // Variables
    items: cartContext.items,
    // Methods
    addItemToCart: cartContext.addItemToCart,
    updateCartItemQuantity: cartContext.updateCartItemQuantity,
  };
};
