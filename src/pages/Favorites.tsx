/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FavoriteProduct } from "@/features/listFavorites";
import React from "react";
import { useSelector } from "react-redux";

export default function Favorites() {
  const favorites :any = useSelector((state: { favorites: { items: any[] } }) => {
    console.log("state", state);
    return state.favorites;
  });
  console.log("Favorites", favorites);
  return (
    <div>
      {favorites?.map((item: FavoriteProduct) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
          <p>Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
        </div>
      ))}
    </div>
  );
}
