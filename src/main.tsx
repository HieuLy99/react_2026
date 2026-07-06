import { createRoot } from "react-dom/client";
import "animate.css/animate.min.css";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store/store";
import { Provider } from "react-redux";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient} >
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>,
);
