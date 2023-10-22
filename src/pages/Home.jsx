import React from "react";
import Hero from "../components/HomeCompo/Hero";
import Client from "../components/HomeCompo/Client";
import Browse from "../components/HomeCompo/Browse";
import Arrivals from "../components/HomeCompo/Arrivals";
import TopSelling from "../components/HomeCompo/TopSelling";
import CustomerTest from "../components/HomeCompo/CustomerTest";

const Home = () => {
  return (
    <div>
      <Hero />
      <Client />
      <Arrivals />
      <TopSelling />
      <Browse /> 
      <CustomerTest />
    </div>
  );
};

export default Home;
