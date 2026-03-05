
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