import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useNavigation } from "react-router";
import Spinner from "../components/ui/Spinner";

const MainLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Header />
      {isNavigating ? (
        <Spinner />
      ) : (
        <div>
          <Outlet />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
