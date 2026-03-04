import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <HeaderComponent/>
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
