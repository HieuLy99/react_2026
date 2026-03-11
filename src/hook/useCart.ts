import { getCarts } from "@/services/cartsService";
import { useQuery } from "@tanstack/react-query";

export function useCarts() {
  return useQuery({
    queryKey: ["carts"],
    queryFn: () => getCarts(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
}
