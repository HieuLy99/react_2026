import {
  addToFavorites,
  removeFromFavorites,
  type FavoriteProduct,
} from "@/features/listFavorites";
import { cn } from "@/lib/utils";
import type { Product } from "@/pages/page.type";
import type { AppDispatch } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DisplayStarComponent from "./DisplayStarComponent";
import { MdAttachMoney, MdOutlineFavorite } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";

export default function CardDetailComponent({
  product,
  id,
  rate,
  price,
  image,
  title,
}: {
  product?: Product;
  id: number;
  rate: number;
  price: number;
  image: string;
  title: string;
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const favorites: FavoriteProduct[] = useSelector(
    (state: { favorites: FavoriteProduct[] }) => {
      return state.favorites;
    },
  );
  const hasInFavorites =
    !!product && favorites.some((item) => item.id === product.id);
  const handleToggleFavorite = () => {
    if (!product) return;
    if (hasInFavorites) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };
  const handleAddToCart = (product?: Product) => {
    // Handle add to cart functionality
    console.log("Add to cart:", product);
  };
  const isProductInFavorites =
    !!product && favorites.some((item) => item.id === product.id);
  return (
    <div
      className={cn(
        "border p-4 rounded-lg shadow-md mb-4 mt-4 border-y border-[#E66C4E] cursor-pointer",
        "flex flex-col w-50 h-80 relative font-extralight",
      )}
    >
      <div className="absolute z-100 top-1 left-1">
        <button
          onClick={handleToggleFavorite}
          className="text-large hover:bg-[#E66C4E] hover:text-white transition-colors duration-300 text-[#E66C4E] rounded-full p-2"
        >
          {isProductInFavorites ? <MdOutlineFavorite /> : <MdFavoriteBorder />}
        </button>
      </div>
      <div
        className="flex flex-col items-center pb-4 overflow-hidden"
        onClick={() => {
          navigate(`/products?id=${id}`);
        }}
      >
        <div className="h-40 rounded-sm overflow-hidden flex justify-center-safe align-items-center shadow-[0px_6px_24px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.08)]">
          <img src={image} alt={title} className="object-contain mb-4 h-40" />
        </div>
      </div>
      <div>
        <p className="text-xs">{title}</p>

        <div className="flex gap-2 items-center text-sm mb-4">
          {<DisplayStarComponent rate={rate} />}
          <p>{rate}</p>
        </div>
        <div className="flex gap-4 justify-between bg-none text-sm ">
          <p className="flex items-center gap-1">
            <MdAttachMoney />
            <span className="font-light text-sm">{price.toFixed(2)}</span>
          </p>
          <div
            onClick={() => handleAddToCart(product)}
            className="cursor-pointer flex items-center gap-1 border border-[#E66C4E] p-1 rounded-md hover:bg-[#E66C4E] hover:text-white transition-colors duration-300 text-[#E66C4E]"
          >
            <FaCartPlus />
          </div>
        </div>
      </div>
    </div>
  );
}
