import React from "react";
import About from "../../component/About";
import Account from "../../component/Account";
import EcoSystem from "../../component/EcoSystem";
import Opener from "../../component/Opener";
import Partners from "../../component/Partners";
import Product from "../../component/Product";
import Sidebar from "../../component/Sidebar";

export const Home = () => {
  return (
    <div>
      <Sidebar />
      <Opener />
      <About />
      <EcoSystem />
      <Product />
      <Account />
      <Partners />
    </div>
  );
};

export default Home;
