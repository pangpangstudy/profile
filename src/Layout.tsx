// src/components/Layout.tsx
import { lazy, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Navbar = lazy(() => import("./components/Navbar"));

const Layout = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="App layout w-full bg-black">
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
