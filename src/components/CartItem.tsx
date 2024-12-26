import { useCartContext } from "../hooks/useCartContext";

export default function CartItem() {
  const { items, updateCartItemQuantity } = useCartContext();

  return (
    <>
      {items.map((item) => {
        const formattedPrice = `$${(item.price ?? 0).toFixed(2)}`;

        return (
          <li key={item.id}>
            <div>
              <span>{item.name}</span>
              <span> ({formattedPrice})</span>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => updateCartItemQuantity(item.id, -1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateCartItemQuantity(item.id, 1)}>
                +
              </button>
            </div>
          </li>
        );
      })}
    </>
  );
}
