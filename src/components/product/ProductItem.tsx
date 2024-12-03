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
    <div className="w-[100%] p-4">
      <div className="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all">
        <h5 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
          {product.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {product.description}
        </p>
        <p className="text-red-500 font-semibold mt-2">
          Price: ${product.price}
        </p>

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
    </div>
  );
};

export default ProductItem;
