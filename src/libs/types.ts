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
  addItemToCart: (id: string) => void;
  updateCartItemQuantity: (product: string, amount: number) => void;
}

export interface CartProps {}

export interface CartModalProps {
  title: string;
  actions: React.ReactNode;
}

export interface HeaderProps {}

export interface ProductProps {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}

export interface ShopProps {
  children: React.ReactNode;
  onAddItemToCart?: (id: string) => void;
}
