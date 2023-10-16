import { Outlet } from "react-router-dom";
import AppBar from "../Header/Header";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
