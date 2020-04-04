import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import mentorship from "../images/mentorship.svg";

import "../css/global.css";

const bodyColor = {
  background: "rgb(82,140,109)",
  background:
    "linear-gradient(180deg, rgba(82,140,109,0.9990371148459384) 0%, rgba(104,211,145,1) 100%)"
};

const RegisterPage = () => (
  <div className="flex flex-col">
    <Navbar />
    <div className="flex justify-center w-full">
      <img src={mentorship}/>
    </div>
    

    <div
      className="flex flex-col w-full h-auto pb-12 bg-base"
      style={bodyColor}
    >
     
    </div>
    <div >
      <Footer />
    </div>
  </div>
);

export default RegisterPage;
