// Get all carts
import type { Cart } from "../pages/page.type";
import https from "./http";

export async function getCarts(): Promise<Cart[]> {
  const { data } = await https.get("/carts");
  return data;
}

// Get a single cart by ID
export async function getCartById(id: number): Promise<Cart> {
  const { data } = await https.get(`/carts/${id}`);
  return data;
}

// Add a new cart
export async function addNewCart(cartData: Partial<Cart>): Promise<Cart> {
  const { data } = await https.post("/carts", cartData);
  return data;
}

// Update a cart
export async function updateCart(
  id: number,
  updatedFields: Partial<Cart>,
): Promise<Cart> {
  const { data } = await https.put(`/carts/${id}`, updatedFields);
  return data;
}

// Delete a cart
export async function deleteCart(id: number): Promise<void> {
  await https.delete(`/carts/${id}`);
}
