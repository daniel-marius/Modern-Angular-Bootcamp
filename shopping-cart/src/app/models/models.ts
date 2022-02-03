export interface ShoppingCart {
  id: string;
  items: Item[];
  subTotal: number;
}

export interface Item {
  id: string;
  quantity: number;
  sku: Sku;
}

// Stock Keeping Unit
export interface Sku {
  id: string;
  title: string;
  price: number;
}
