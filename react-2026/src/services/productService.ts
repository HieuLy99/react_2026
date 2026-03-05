import type { Product } from "../pages/page.type";
import https from "./http";

export async function getProducts(): Promise<Product[]> {
  const { data } = await https.get("/products");
  return data;
}
