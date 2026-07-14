/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import { useProducts } from "../hook/useProducts";
import type { Product } from "./page.type";
// import BannerComponent from "../components/BannerComponent";

function HomeContent({
  data,
  isLoading,
  isError,
}: {
  data: Product[] | undefined;
  isLoading: any;
  isError: any;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoryList = useMemo(
    () => Array.from(new Set((data ?? []).map((p) => p.category))),
    [data]
  );

  const filtered = useMemo(
    () => (selectedCategory ? (data ?? []).filter((p) => p.category === selectedCategory) : data ?? []),
    [data, selectedCategory]
  );

  return (
    <div>
      <div className="flex justify-center items-center h-80 ">
        {categoryList?.map((category) => (
          <div
            key={category}
            className={`border shadow-md mb-4 mt-4 flex flex-col
            w-full h-full justify-end pl-4 pb-2 uppercase font-light tracking-tighter
            cursor-pointer hover:font-light hover:text-lg transition-colors duration-300 ${
              selectedCategory === category ? "ring-2 ring-black" : ""
            }`}
            onClick={() => {
              setSelectedCategory(category);
            }}
          >
            {category}
          </div>
        ))}
      </div>
      <div className='flex font-light '>
        <div className='uppercase w-full'>
          This Drop
        </div>
      </div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error loading products.</div>}
      <div className="flex flex-wrap gap-4 justify-center items-center px-50">
        {filtered.map((product: Product) => (
          <CardComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const {
    data,
    isLoading,
    isError,
  }: { data: Product[] | undefined; isLoading: any; isError: any } =
    useProducts();

  const location = useLocation();

  return (
    <HomeContent
      key={location.key}
      data={data}
      isLoading={isLoading}
      isError={isError}
    />
  );
}
