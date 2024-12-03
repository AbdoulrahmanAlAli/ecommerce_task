import React from "react";
import { cookies } from "next/headers";
import { verifyTokenForPage } from "@/utils/verifyToken";
import ShoppingCart from "@/components/shopping/ShoppingCart";
const ShoppingCartPage = async () => {
  const token = (await cookies())?.get("jwtToken")?.value || "";
  const payload = verifyTokenForPage(token);

 

  return (
    <div>
      <ShoppingCart payload={payload} />
    </div>
  );
};

export default ShoppingCartPage;
