import React from "react";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
const Services = () => {
  return (
    <>
      <Header></Header>
      <h2 className="px-4 mt-2 font-semibold text-xl">NUESTROS SERVICIOS</h2>
      <CardContainer></CardContainer>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  );
};

export default Services;
