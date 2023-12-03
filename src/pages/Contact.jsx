import React from "react";
import ContactForm from "../components/ContactForm";
import logo from "../assets/LOGO.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Header from "../components/Header";
const Contact = () => {
  return (
    <>
      <Header></Header>
      <div className="bg-[#CBDAB0]/20 flex items-center p-4 justify-between md:justify-normal flex-col">
        <ContactForm></ContactForm>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
