import type { Product } from "./page.type";
import CardComponent from "../components/CardComponent";
import { useProducts } from "../hook/useProducts";

export default function Home() {
  const { data }: { data: Product[] | undefined } = useProducts();

  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center items-center p-8">
        {data?.map((product: Product) => (
          <CardComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
