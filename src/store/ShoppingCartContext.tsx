import { createContext } from "react";
import { ShoppingCart } from "../libs/types";

const initialCart = {
  items: [],
  addItemToCart: () => {},
  updateCartItemQuantity: () => {},
};

export const CartContext = createContext<ShoppingCart>(initialCart);
