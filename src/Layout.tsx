// src/components/Layout.tsx
import { lazy } from "react";
import { Outlet } from "react-router-dom";
const Navbar = lazy(() => import("./components/Navbar"));

const Layout = () => {
  return (
    <div className="layout w-full bg-black">
      <header className="w-full fixed top-0 z-20 bg-transparent">
        <Navbar />
      </header>
      <main className="relative">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
