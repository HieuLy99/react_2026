/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Product } from "../pages/page.type";
import https from "./http";

export async function getProducts(): Promise<Product[]> {
  const { data } = await https.get("/products");
  return data;
}

//Add a new product

export async function addNewProduct(
  updatedFields: Partial<Product>,
): Promise<Product> {
  const { data } = await https.post("/products", updatedFields);
  return data;
}

//Get a single product

export async function getProductById(id: number): Promise<Product> {
  const { data } = await https.get(`/products/${id}`);
  console.log("data in getProductById", data);
  return data;
}

//Update a product

export async function updateProduct(
  id: number,
  updatedFields: Partial<Product>,
): Promise<Product> {
  const { data } = await https.put(`/products/${id}`, updatedFields);
  return data;
}

//Delete a product

export async function deleteProduct(id: number): Promise<void> {
  await https.delete(`/products/${id}`);
}
