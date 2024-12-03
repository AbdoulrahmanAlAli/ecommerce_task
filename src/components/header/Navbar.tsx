import { verifyTokenForPage } from "@/utils/verifyToken";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const token = (await cookies())?.get("jwtToken")?.value || "";
  const payload = verifyTokenForPage(token);

  const admin = payload?.isAdmin;

  return (
    <>
      <div className="hidden md:flex justify-center items-center">
        <ul className="flex justify-between items-center space-x-8">
          <Link className="text-xl hover:text-green-400 transition" href="/">
            Home
          </Link>
          <Link
            className="text-xl hover:text-green-400 transition"
            href="/product">
            Product
          </Link>
          {admin && (
            <Link
              className="text-xl hover:text-green-400 transition"
              href="/admin">
              Dashboard
            </Link>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
