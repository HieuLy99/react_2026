export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: ratingType;
  title: string;
}

export type ratingType = {
  rate: number;
  count: number;
};

export interface Cart {
  id: number;
  userId: number;
  products: Product[];
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}
