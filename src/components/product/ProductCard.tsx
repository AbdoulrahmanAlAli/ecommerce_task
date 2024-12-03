'use client';

import { Product } from "@prisma/client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import EditProduct from "./EditProduct";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [edit, setEdit] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${product.id}`);
      toast.success("Product deleted successfully.");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete the product.");
    }
  };

  return (
    <div className="block max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
        {product.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
      <p className="text-red-400 font-semibold">Price: ${product.price}</p>

      <div className="flex gap-4 justify-between items-center">
        <button
          type="button"
          onClick={() => setEdit(true)}
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm sm:text-base px-6 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-4"
        >
          Edit Product
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm sm:text-base px-6 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-4"
        >
          Delete Product
        </button>
      </div>

      <EditProduct setEdit={setEdit} edit={edit} product={product} />
    </div>
  );
};

export default ProductCard;
