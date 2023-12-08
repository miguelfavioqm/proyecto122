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
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/EuWVJnv3QSQ"
        title="Lugares Turísticos de BOLIVIA 🇧🇴 | 15 Imperdibles"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="m-auto"
      ></iframe>
      <Footer></Footer>
    </>
  );
};

export default Home;
