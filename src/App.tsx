import Header from "./components/Header.js";
import Shop from "./components/Shop.js";
import { DUMMY_PRODUCTS } from "./dummy-products.ts";
import Product from "./components/Product.tsx";
import CartContextProvider from "./store/ShoppingCartContext.tsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
