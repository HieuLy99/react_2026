import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./auth/ProtectedRoute";
import MainLayout from "./layout/MainLayout";
import { ProductsParamsProvider } from "./context/ProductsParamsContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Counter from "./store/testCount";
const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));
const  Favorites = lazy(() => import("./pages/Favorites"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <ProductsParamsProvider>
                <MainLayout />
              </ProductsParamsProvider>
            }
          >
            <Route index element={<Home />} />
            <Route path="/test" element={<Counter />} />
            {/* Group protected routes */}
            <Route path="/products" element={<ProductDetail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route element={<ProtectedRoute />}>
              <Route path="dashboard/*" element={<Dashboard />} />
              <Route path="cart/" element={<Cart />}>
                <Route path="shopping-cart" element={<Dashboard />} />
                <Route path="shipping-details" element={<Dashboard />} />
                <Route path="payment-option" element={<Dashboard />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom"} />
      <ToastContainer position="bottom-right" />
    </BrowserRouter>
  );
}

export default App;
