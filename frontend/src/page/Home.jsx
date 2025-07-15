import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Feature1 from "../components/Feature1";
import Feature2 from "../components/Feature2";
import Feature3 from "../components/Feature3";
import Feature4 from "../components/Feature4";
import Footer from "../components/Footer";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <Services />
      <Feature />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Footer />
    </div>
  );
};

export default Home;
