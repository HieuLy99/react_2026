## 1️⃣ Cài đặt

```
npm install @tanstack/react-query
```

## 2️⃣ Setup ở root (bắt buộc)

main.jsx hoặc index.jsx

```
import React from "react";
import ReactDOM from "react-dom/client";s
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

👉 Bước này chỉ làm 1 lần.

## 3️⃣ Tạo function gọi API

Ví dụ backend của bạn:

```
GET /api/products?q=abc&page=1
```

Tạo file api.js

```
export async function fetchProducts({ q, page }) {
  const res = await fetch(
    `/api/products?q=${encodeURIComponent(q)}&page=${page}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
```

## 4️⃣ Dùng useQuery trong component

```
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./api";
import { useState } from "react";

export default function HomePage() {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", { q, page }],
    queryFn: () => fetchProducts({ q, page }),
    keepPreviousData: true, // giữ data cũ khi đổi page
    staleTime: 60_000, // cache 1 phút
  });

  return (
    <>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search..."
      />

      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}

      <div>
        {data?.items?.map((p) => (
          <div key={p.id}>{p.title}</div>
        ))}
      </div>
    </>
  );
}
```

## 🧠 Giải thích quan trọng

queryKey ["products", { q, page }]

👉 React Query sẽ cache theo key này 👉 Nếu Header và ProductGrid cùng dùng key
giống nhau → chỉ gọi API 1 lần

keepPreviousData

Khi đổi page:

Không bị giật trắng

Giữ data cũ tới khi data mới về
