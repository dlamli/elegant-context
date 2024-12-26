import { useCartContext } from "../hooks/useCartContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { items } = useCartContext();

  const totalPrice = items.reduce(
    (acc, item) => acc + (item.price ?? 0) * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          <CartItem />
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
