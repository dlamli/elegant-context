export type DummyProducts = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

export type ShoppingCartItem = {
  id: string;
  name: string | undefined;
  price: number | undefined;
  quantity: number;
};

export interface ShoppingCart {
  items: ShoppingCartItem[];
}

export interface CartProps {
  items: ShoppingCartItem[];
  onUpdateItemQuantity: (id: string, quantity: number) => void;
}

export interface CartModalProps {
  cartItems: ShoppingCartItem[];
  title: string;
  actions: React.ReactNode;
  onUpdateCartItemQuantity: (id: string, quantity: number) => void;
}

export interface HeaderProps {
  cart: ShoppingCart;
  onUpdateCartItemQuantity: (id: string, quantity: number) => void;
}

export interface ProductProps {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
  onAddToCart: (id: string) => void;
}

export interface ShopProps {
  onAddItemToCart: (id: string) => void;
}