"use client";

import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";


const NavMobile = () => {
  return (
    <div className=" absolute top-0 left-0 w-[100%] h-[100vh] bg-slate-300/10  backdrop-blur-md">
      <div className="w-[100%] h-[100%]">
        <div className="container m-auto h-[10%] w-[100%] flex justify-end items-center">
          <IoClose
            className="text-4xl text-black cursor-pointer"
          />
        </div>
        <div className="w-[100%] h-[80%] flex flex-col justify-center items-center">
          <ul className="flex flex-col justify-between items-center space-y-8">
            <Link
              onClick={}
              className="text-xl hover:text-green-400 transition"
              href="/">
              Home
            </Link>
            <Link
              className="text-xl hover:text-green-400 transition"
              href="/">
              Product
            </Link>
            <Link
              className="text-xl hover:text-green-400 transition"
              href="/">
              Contact Us
            </Link>
            <Link
              className="text-xl hover:text-green-400 transition"
              href="/admin">
              Dashboard
            </Link>
          </ul>
          <div className="flex space-x-6 mt-8 justify-between items-center">
            <Link href="/" className="text-4xl cursor-pointer">
              <IoIosSearch />
            </Link>
          </div>
        </div>
        )
      </div>
    </div>
  );
};

export default NavMobile;
