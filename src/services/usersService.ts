// Get all users
import type { User } from "../pages/page.type";
import https from "./http";

export async function getUsers(): Promise<User[]> {
  const { data } = await https.get("/users");
  return data;
}

// Get a single user by ID          
export async function getUserById(id: number): Promise<User> {
  const { data } = await https.get(`/users/${id}`);
  return data;
}

// Add a new user
export async function addNewUser(userData: Partial<User>): Promise<User> {
  const { data } = await https.post("/users", userData);
  return data;
}

// Update a user
export async function updateUser(
  id: number,
  updatedFields: Partial<User>,
): Promise<User> {
  const { data } = await https.put(`/users/${id}`, updatedFields);
  return data;
}

// Delete a user
export async function deleteUser(id: number): Promise<void> {
  await https.delete(`/users/${id}`);
}   