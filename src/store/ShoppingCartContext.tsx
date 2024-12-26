import { createContext, useState } from "react";
import { DummyProducts, ShoppingCart } from "../libs/types";
import { DUMMY_PRODUCTS } from "../dummy-products";

const initialCart = {
  items: [],
  addItemToCart: () => {},
  updateCartItemQuantity: () => {},
};

const initialShoppingCart = {
  items: [],
  addItemToCart: () => {},
  updateCartItemQuantity: () => {},
};

export const CartContext = createContext<ShoppingCart>(initialCart);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [shoppingCart, setShoppingCart] =
    useState<ShoppingCart>(initialShoppingCart);

  function handleAddItemToCart(id: string) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find(
          (product: DummyProducts) => product.id === id
        );
        updatedItems.push({
          id: id,
          name: product?.title,
          price: product?.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(productId: string, amount: number) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  const contextValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
