import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import BestLocations from "../components/BestLocations";
import BlogContainer from "../components/BlogContainer";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Carrousel></Carrousel>
      <Navigation></Navigation>
      <BestLocations></BestLocations>
      <BlogContainer></BlogContainer>
      <Footer></Footer>
    </>
  );
};

export default Home;
