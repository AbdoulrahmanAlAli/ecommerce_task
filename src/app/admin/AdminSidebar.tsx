'use client'

import AddProduct from "@/components/product/AddProduct";
import React, { useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";

const AdminSidebar = () => {

  const [product, setProduct] = useState(false)

  return (
    <div className="w-[10%] h-[92.4vh] bg-slate-900">
      <div className="w-[100%] h-[100%] flex flex-col items-center pt-4">
        <div className="w-[100%] h-[100%]  space-y-10 flex items-center justify-between flex-col text-white">
          <div className="w-full p-2">
            <div className="w-[100%] flex flex-col justify-between  items-center">
              <AiFillProduct className="text-lg" />
              <p className="mt-2 hidden md:block text-lg font-semibold">
                Products
              </p>
            </div>
          </div>
          <div className="w-full p-2">
            <div className="w-[100%] flex flex-col justify-between  items-center">
              <button onClick={() => setProduct(true)} type="button" className="text-white flex justify-center items-center bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                <FaPlus className="mr-2"/>
                Add Card
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddProduct setProduct={setProduct} product={product} />
    </div>
  );
};

export default AdminSidebar;
