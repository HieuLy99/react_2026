/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Product } from "./page.type";
import CardComponent from "../components/CardComponent";
import { useProducts } from "../hook/useProducts";
import BannerComponent from "../components/BannerComponent";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const {
    data,
    isLoading,
    isError,
  }: { data: Product[] | undefined; isLoading: any; isError: any } =
    useProducts();
  console.log("===> ", data);

  const categoryList = Array.from(new Set(data?.map((p) => p.category)));
  console.log("===> categoryList", categoryList);
  const navigate = useNavigate();
  return (
    <div>
      <BannerComponent />
      <div>Shop by Category</div>
      <div className="flex gap-4 justify-center items-center p-8">
        {categoryList?.map((category) => (
          <div
            key={category}
            className="border p-4 rounded-lg shadow-md mb-4 mt-4 flex flex-col w-50"
            onClick={() => {
              navigate(`/products?category=${category}`);
            }}
          >
            {category}
          </div>
        ))}
      </div>
      <div>Featured Products</div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error loading products.</div>}
      <div className="flex flex-wrap gap-4 justify-center items-center p-8">
        {data?.map((product: Product) => (
          <CardComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
