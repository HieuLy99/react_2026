import { useNavigate } from "react-router-dom";
import type { Product } from "../pages/page.type";
import { useDispatch } from "react-redux";
import { addToFavorites } from "@/features/listFavorites";

export default function CardComponent({
  product,
  key,
}: {
  product: Product;
  key: number;
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const displayStar = (rate: number) => {
    const fullStars = Math.round(rate);
    const emptyStars = 5 - fullStars;

    return (
      <div className="flex gap-1">
        {Array(fullStars)
          .fill("★")
          .map((_, i) => (
            <span key={`f-${i}`} className="text-yellow-400 text-lg">
              ★
            </span>
          ))}
        {Array(emptyStars)
          .fill("☆")
          .map((_, i) => (
            <span key={`e-${i}`} className="text-gray-300 text-lg">
              ☆
            </span>
          ))}
      </div>
    );
  };

  return (
    <div
      key={key}
      className="border p-4 rounded-lg shadow-md mb-4 mt-4 flex flex-col w-50 h-90 static"
    >
      <div className="absolute z-999">
        <button
          onClick={() => {
            console.log("alo", product);
            dispatch(addToFavorites(product));
          }}
        >
          like
        </button>
      </div>
      <div
        className="flex flex-col items-center pb-4 overflow-hidden"
        onClick={() => {
          navigate(`/products?id=${product.id}`);
        }}
      >
        <div className="h-40 rounded-sm overflow-hidden flex justify-center-safe align-items-center shadow-[0px_6px_24px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.08)]">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain mb-4 h-40"
          />
        </div>
      </div>
      <div>
        <h3 className="text-sm">{product.title}</h3>
        {displayStar(product.rating.rate)}
        <div className="flex gap-4 justify-between bg-none">
          <p>{product.rating.rate}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
