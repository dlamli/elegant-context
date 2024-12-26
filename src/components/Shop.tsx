import { ShopProps } from "../libs/types.js";

export default function Shop({ children }: ShopProps) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {children}
      </ul>
    </section>
  );
}
