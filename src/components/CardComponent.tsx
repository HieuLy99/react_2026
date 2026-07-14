import type { Product } from "../pages/page.type";
import CardDetailComponent from "./CardDetailComponent";

export default function CardComponent({
  product,
  key,
}: {
  product: Product;
  key: number;
}) {

  const { id, title, price, image, rating } = product;

  return (
    <CardDetailComponent
      product={product}
      id={id}
      rate={rating.rate}
      price={price}
      image={image}
      title={title}
      key={key}
    />
  );
}
