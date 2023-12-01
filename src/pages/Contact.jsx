import React from "react";
import ContactForm from "../components/ContactForm";
import logo from "../assets/LOGO.png";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <>
      <div className="bg-[#CBDAB0]/20 flex items-center p-4 justify-between md:justify-normal flex-col">
        <span className="w-1/5 flex md:items-center md:justify-center absolute top-2 left-2">
          <img className="md:w-14 w-10" src={logo} alt="LOGO" />
        </span>
        <ContactForm></ContactForm>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
