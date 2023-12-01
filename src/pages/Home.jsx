import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import BestLocations from "../components/BestLocations";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Carrousel></Carrousel>
      <Navigation></Navigation>
      <BestLocations></BestLocations>
      <Footer></Footer>
    </>
  );
};

export default Home;
