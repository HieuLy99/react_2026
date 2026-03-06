// Login
import https from "./http";

type dataLogin = {
  username: string;
  password: string;
};
export async function login(): Promise<dataLogin> {
  const { data } = await https.post("/auth/login");
  return data;
}
