import React, { useLayoutEffect } from "react";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";

function Layout() {
  
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
