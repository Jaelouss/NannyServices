import { Header } from "@components";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
