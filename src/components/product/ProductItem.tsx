"use client";

import { Product } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

type ProductCardProps = {
  product: Product;
};

const DOMAIN = "http://localhost:3000";

const ProductItem = ({ product }: ProductCardProps) => {
  const [cart, setCart] = useState(false);

  const handleAddToCart = async () => {
    try {
      const response = await axios.put(`${DOMAIN}/api/users/addcart`, {
        id: product.id,
      });
      if (response.status === 200) {
        const message = response.data.message;
        if (message === "Product added to cart") {
          toast.success("Product added to cart!");
          setCart(true);
        } else if (message === "Product removed from cart") {
          toast.warn("Product removed from cart!");
          setCart(false);
        }
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message);
    }
  };

  const SetIsInCart = async () => {
    try {
      const response = await axios.get(
        `${DOMAIN}/api/users/addcart/${product.id}`
      );
      const isInCart = response.data.isInCart;
      setCart(isInCart);
    } catch (error) {
      console.log("API call failed:", error);
    }
  };

  useEffect(() => {
    SetIsInCart();
  }, []);

  return (
    <div key={product.id} className=" bg-slate-700 p-6 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/200"
        alt="Product 2"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl text-white font-semibold mb-2">{product.title}</h3>
      <p className="text-white mb-4">${product.price}</p>
      <div className="text-white hover:underline">
        {product.description}
      </div>
      <button
        type="button"
        onClick={handleAddToCart}
        className={`mt-4 focus:outline-none text-white ${
          cart
            ? "bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700"
            : "bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700"
        } focus:ring-4 focus:ring-${
          cart ? "red" : "green"
        }-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-200 ease-in-out dark:focus:ring-${
          cart ? "red" : "green"
        }-900`}>
        {cart ? "Remove From Cart" : "Add To Cart"}
      </button>
    </div>
  );
};

export default ProductItem;
