import { useQuery } from "@tanstack/react-query";
// import { useProductsParams } from "../context/ProductsParamsContext";
import { getProducts } from "../services/productService";

export function useProducts() {
//   const { params } = useProductsParams();
//   console.log('params in useProducts', params);
  
  return useQuery({
    queryKey: ["products"], // Auto refetch khi params thay đổi
    queryFn: () => getProducts(),
    staleTime: 1000 * 60 * 5, // 5 phút
    retry: false, // Tắt retry để dễ debug lỗi
  });
}