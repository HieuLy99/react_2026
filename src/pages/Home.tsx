import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import { useProducts } from "../hook/useProducts";
import type { Product } from "./page.type";
import women_clothing from "../assets/images/women_clothing.jpg";
import men_clothing from "../assets/images/men_clothing.jpg";
import jewelery from "../assets/images/jewelery.jpg";
import electronics from "../assets/images/electronics.jpg";

function HomeContent({
  data,
  isLoading,
  isError,
}: {
  data: Product[] | undefined;
  isLoading: boolean;
  isError: boolean;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoryList = useMemo(
    () => Array.from(new Set((data ?? []).map((p) => p.category))),
    [data],
  );

  const filtered = useMemo(
    () =>
      selectedCategory
        ? (data ?? []).filter((p) => p.category === selectedCategory)
        : (data ?? []),
    [data, selectedCategory],
  );

  return (
    <div>
      <section className="border-y border-white/10 py-30 bg-[linear-gradient(90deg,oklch(0.1_0_0/0.8)_0%,oklch(0.35_0_0/0.8)_55%)]">
        <div
          className="text-start text-4xl font-semibold  bg-inherit pl-16 "
          style={{ background: "none" }}
        >
          <span
            className="font-extrabold text-[60px] tracking-tighter"
            style={{ background: "none" }}
          >
            LIMITED
          </span>
          <span className="text-[#E66C4E]" style={{ background: "none" }}>
            .
          </span>
          <p
            style={{ background: "none" }}
            className="text-[#E66C4E] italic text-[70px] font-light tracking-tighter"
          >
            Never repeated.
          </p>
          <div className="bg-[#E66C4E] text-black py-2 px-4  hover:bg-[#c15a3d] transition-colors duration-300 w-40 text-center cursor-pointer text-xs uppercase">
            Shop the drop
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center h-18 sticky top-18 z-9999 ">
        {categoryList?.map((category) => (
          <div
            key={category}
            className={`border mb-2 mt-2 flex flex-col
            w-full h-full justify-end pl-4 pb-1 uppercase tracking-tighter
             border-y border-white/10
             text-[#E66C4E]
             text-[20px]
             shadow-lg
            cursor-pointer hover:font-light hover:text-lg transition-colors duration-300 ${
              selectedCategory === category ? "ring-2 ring-black" : ""
            }`}
            onClick={() => {
              setSelectedCategory(category);
            }}
            style={{
              backgroundImage: `url(${
                category === "men's clothing"
                  ? men_clothing
                  : category === "women's clothing"
                    ? women_clothing
                    : category === "jewelery"
                      ? jewelery
                      : electronics
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {category}
          </div>
        ))}
      </div>

      <section className="border-y border-white/10 py-12">
        <h2 className="text-center text-4xl font-semibold italic">
          Small runs<span className="text-[#E66C4E]">.</span> No restocks
          <span className="text-[#E66C4E]">.</span> Built to outlast the season
          <span className="text-[#E66C4E]">.</span>
        </h2>
      </section>
      <div className="flex font-light ">
        <div className="uppercase w-full"></div>
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
  }: { data: Product[] | undefined; isLoading: boolean; isError: boolean } =
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
