import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <header className=" p-4 w-full sticky top-0 z-9999 shadow-xs">
        <HeaderComponent />
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className=" p-4 text-center">
        <FooterComponent />
      </footer>
    </div>
  );
}
