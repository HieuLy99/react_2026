import CardDetailComponent from "@/components/CardDetailComponent";
import type { FavoriteProduct } from "@/features/listFavorites";
import { useSelector } from "react-redux";

export default function Favorites() {
  const favorites: FavoriteProduct[] = useSelector(
    (state: { favorites: FavoriteProduct[] }) => {
      return state.favorites;
    },
  );
  return (
    <div className="flex">
      {favorites
        ? favorites.map((item: FavoriteProduct) => (
            <CardDetailComponent
              key={item.id}
              product={item}
              id={item.id}
              rate={item.rating.rate}
              price={item.price}
              image={item.image}
              title={item.title}
            />
          ))
        : null}
    </div>
  );
}
