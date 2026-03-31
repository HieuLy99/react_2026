/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Product } from "@/pages/page.type";
import shoseDemo from "../assets/images/shose-demo.png";
import shoseDemo1 from "../assets/images/shose-demo1.png";
import shoseDemo2 from "../assets/images/shose-demo2.png";

import { useProducts } from "@/hook/useProducts";
import { useState } from "react";
export default function BannerComponent() {
  const {
    data,
  }: { data: Product[] | undefined; isLoading: any; isError: any } =
    useProducts();
  console.log("data", data);
  const renderBackGround = () => {
    return (
      <>
        <div className="absolute w-full h-[600px] bg-green-600  rounded-full blur-3xl opacity-40 top-[-100px] left-[-100px]"></div>

        <div className="absolute w-[700px] h-[800px]  bg-orange-500 rounded-full blur-3xl opacity-40 bottom-[-100px] right-[-100px]"></div>

        <div className="absolute w-[500px] h-[500px] bg-red-700 rounded-full blur-3xl opacity-30 top-[50%] left-[40%]"></div>
      </>
    );
  };
  const fakeData = [
    {
      id: 1,
      title: "Product 1",
      description: "This is product 1",
      image: shoseDemo,
    },
    {
      id: 2,
      title: "Product 2",
      description: "This is product 2",
      image: shoseDemo1,
    },
    {
      id: 3,
      title: "Product 3",
      description: "This is product 3",
      image: shoseDemo2,
    },
  ];
  const [indexProductShow, setIndexProductShow] = useState(0);
  const handleNextProduct = () => {
    setIndexProductShow((prev) =>
      prev === 0 ? fakeData.length - 1 : prev - 1,
    );
  };
  const handlePrevProduct = () => {
    setIndexProductShow((prev) =>
      prev === 0 ? fakeData.length - 1 : prev - 1,
    );
  };
  return (
    <div>
      <div className="relative min-h-screen bg-black overflow-hidden">
        {renderBackGround()}
        <div className="absolute w-full h-full flex text-white">
          <div className="flex-2 items-center flex justify-center">
            <div className="w-[500px] h-[600px]  rounded-sm pt-10 ">
              <div className="text-6xl font-extrabold">
                {fakeData?.[indexProductShow].title}
              </div>
              <div className="text-2xl">
                {fakeData?.[indexProductShow].description}{" "}
              </div>
              <div>
                <button
                  className="px-4 py-2 bg-blue-500 rounded-md mt-4"
                  onClick={() => handlePrevProduct()}
                >
                  Get Started
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 rounded-md mt-4"
                  onClick={() => handleNextProduct()}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="flex-2">
            <img
              // src={shoseDemo}
              key={fakeData?.[indexProductShow].id}
              src={fakeData?.[indexProductShow].image}
              alt="Banner Image"
              className="absolute z-800 top-[20%] w-[900px] right-[15%] -rotate-20 -scale-x-100 animate__animated  animate__tada"
            />
            <div className="flex-1 items-center flex justify-center z-999">
              <div className="w-full rounded-sm pt-10 text-center  flex flex-col items-center justify-center bg-amber-50">
                <div></div>
                <div className="text-2xl">poem </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
