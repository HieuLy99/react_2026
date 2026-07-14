/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import type { Product } from "../pages/page.type";
import { useProducts } from "../hook/useProducts";
import { useMemo, useState } from "react";
import shoppingCard from "../assets/shoppingCard.svg";
import acc from "../assets/acc.svg";

export default function HeaderComponent() {
  const navigate = useNavigate();
  const {
    data,
    isLoading,
    isError,
  }: { data: Product[] | undefined; isLoading: any; isError: any } =
    useProducts();
  const [searchText, setSearchText] = useState("");
  const listButton = [
    { name: "Home", navigateTo: "/" },
    { name: "Products", navigateTo: "/products" },
    { name: "About", navigateTo: "/about" },
    { name: "Contact", navigateTo: "/contact" },
    { name: "Favorites", navigateTo: "/favorites" },
  ];

  const button = (name: string, navigateTo: string) => {
    return (
      <button
        className="flex-1 text-base font-extralight cursor-pointer hover:font-light hover:text-lg transition-colors duration-300"
        onClick={() => navigate(navigateTo)}
      >
        {name}
      </button>
    );
  };
  const filteredProducts = useMemo(() => {
    if (!searchText.trim()) return [];
    return data?.filter((p) =>
      p.title.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [data, searchText]);

  const handleViewDetailProduct = (id: number) => {
    setSearchText("");
    navigate(`/products?id=${id}`);
  };

  console.log("===> 123", data, isLoading, isError);
  return (
    <div className="flex w-full sticky top-0 ">
      <div className="flex flex-1 font-[1000] align-middle items-center text-2xl tracking-tighter cursor-pointer pl-8"
        onClick={() => navigate("/")}
      >
        FAKESTORE<span className="text-[#E66C4E]">.</span>{" "}
      </div>
      <div className="flex flex-2 items-center gap-4  ">
        {listButton.map((item) => button(item.name, item.navigateTo))}
        <div className="relative">
          <input
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search..."
          />
          <div className="absolute  bg-white w-full max-h-60 overflow-y-auto">
            {filteredProducts?.map((p) => (
              <div
                className="border-solid border-2 cursor-pointer  "
                onClick={() => handleViewDetailProduct(p.id)}
                key={p.id}
              >
                {p.title}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row justify-end content-center gap-2">
        <button className="flex-1 justify-end content-center flex items-center">
          <div
            className="flex-1 flex content-end"
            onClick={() => navigate("/cart?part=shopping-cart")}
          >
            <img
              src={shoppingCard}
              alt="login"
              className="h-8 w-8 flex flex-1 justify-end"
            />
          </div>
          <div
            className="flex-1 flex content-start"
            onClick={() => navigate("/login")}
          >
            <img
              src={acc}
              alt="login"
              className="h-8 w-8 flex flex-1 justify-start"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
