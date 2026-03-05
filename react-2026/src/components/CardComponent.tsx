import type { Product } from "../pages/page.type";

export default function CardComponent({
  product,
  key,
}: {
  product: Product;
  key: number;
}) {

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
      className="border p-4 rounded-lg shadow-md mb-4 mt-4 flex flex-col w-50"
    >
      <div className="w-full flex flex-col items-center h-50">
        <div className=" w-30 overflow-hidden bg-black flex justify-center-safe align-items-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover mb-4"
          />
        </div>
      </div>
      <div>
        <h3 className="w-30">{product.title}</h3>
        {displayStar(product.rating.rate)}
        <p>{product.rating.rate}</p>
        <p>${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
