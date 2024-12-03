import React from "react";
import Logo from "../logo/Logo";
import Navbar from "./Navbar";
import Tools from "./Tools";
const Header = () => {
  return (
    <div
      className={`h-[60px] bg-[#FFFFFF] flex justify-center items-center border-b-2`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="ml-1">
          <Logo />
        </div>
        <Navbar />
        <Tools />
      </div>
    </div>
  );
};

export default Header;
