import { useNavigate } from "react-router-dom";

export default function HeaderComponent() {
  const navigate = useNavigate();
  return (
    <div className="flex w-full">
      <div className="flex-1 ">Face store</div>
      <div className="flex flex-2 ">
        <button className="flex-1 text-blue-600/100" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="flex-1 text-blue-600/100" onClick={() => navigate("/products")}>
          Products
        </button>
        <button className="flex-1 text-blue-600/100" onClick={() => navigate("/about")}>
          About
        </button>
        <button className="flex-1 text-blue-600/100" onClick={() => navigate("/contact")}>
          Contact
        </button>
        <div>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="flex-1  flex">
        <button
          className="flex-1 justify-end"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}
