import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <header className=" p-4 w-full">
        <HeaderComponent />
      </header>

      <main className="flex-1 p-6">
        <Outlet />
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <FooterComponent />
      </footer>
    </div>
  );
}
