import { Navigate, Outlet } from "react-router";
import Header from "./Header";

function ProtectedRoutes() {
  const auth = { token: true };
  return auth.token ? (
    <Header isLoggedIn={true}>
      <Outlet />
    </Header>
  ) : (
    <Header isLoggedIn={false}>
      <Navigate to="/login" />
    </Header>
  );
}

export default ProtectedRoutes;
