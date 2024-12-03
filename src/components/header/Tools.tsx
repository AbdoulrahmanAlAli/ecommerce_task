import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { verifyTokenForPage } from "@/utils/verifyToken";
import Link from "next/link";
import { cookies } from "next/headers";
import LogoutButton from "./LogoutButton";

const Tools = async () => {
  const token = (await cookies())?.get("jwtToken")?.value || "";
  const payload = verifyTokenForPage(token);

  return (
    <div className="flex justify-between items-center space-x-6">
      <Link href='/shopping_cart' className="text-2xl cursor-pointer">
        <AiOutlineShopping />
      </Link>
      <div className="flex justify-between items-center text-2xl cursor-pointer">
        <div className="hidden md:block">
          <IoIosSearch />
        </div>
        <div className="block md:hidden">
          <HiOutlineMenuAlt4 />
        </div>
        {payload ? (
          <>
            <LogoutButton />
          </>
        ) : (
          <Link href="/login" className="text-2xl ml-4 cursor-pointer">
            <IoPersonOutline />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Tools;
