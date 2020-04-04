import React from "react";
import Register from "../components/register";

import logo from "../images/logo.svg";

import "../css/global.css";

const Navbar = () => (
  <div className="flex items-center justify-between w-full h-20 font-mono">
  
    <div className="flex w-12 ml-8">
      <a href="/">
        <img className="mb-0" src={logo} />
      </a>
    </div>
  
    <ul class="flex items-center">
      <li class="mr-8 mb-0">
        <a class="text-base hover:text-green-700" href="about">
          About
        </a>
      </li>
      <li class="mr-8 mb-0">
        <a class="text-base hover:text-green-700" href="about#contact">
          Contact
        </a>
      </li>
      <Register siteURL="register" />
    </ul>
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
