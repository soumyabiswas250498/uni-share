import { Navigate, Outlet } from "react-router";
import Header from "./Header";

function AuthRoutes() {
  const auth = { token: true };
  return auth.token ? (
    <Header isLoggedIn={true}>
      <Navigate to="/" />
    </Header>
  ) : (
    <Header isLoggedIn={false}>
      <Outlet />
    </Header>
  );
}

export default AuthRoutes;
