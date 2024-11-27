export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subCategory: string;
  imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = 'womens' | 'mens' | 'kids';