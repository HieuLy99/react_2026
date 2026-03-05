import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute() {
//   const { user } = useAuth();
  const location = useLocation();

  // eslint-disable-next-line no-constant-condition
  if (true) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}