"use client";

import { Product } from "@prisma/client";
import axios from "axios";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

type EditProduct = {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  edit: boolean;
  product: Product
};

const DOMAIN = "http://localhost:3000";

const EditPrroduct = ({ setEdit, edit, product }: EditProduct) => {

  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState<number>(product.price); // Changed initial state to a number

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return toast.error("Title is required");
    if (!description.trim()) return toast.error("Description is required");
    if (price <= 0) return toast.error("Price must be greater than 0");

    try {
      await axios.put(`${DOMAIN}/api/products/${product.id}`, {
        title,
        description,
        price,
      });

      toast.success("Edit product successful");
      setEdit(false);

    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong");
      console.error(error);
    }
  };

  return (
    <div
      className={`absolute ${
        edit ? "left-0" : "left-[-100%]"
      } transition-all top-0 bg-slate-500/50 w-full h-full flex justify-center items-center backdrop-blur-md`}>
      <div className="absolute top-4 right-4">
        <IoMdClose className="text-4xl" onClick={() => setEdit(false)} />
      </div>
      <div className="bg-white w-full max-w-md lg:max-w-lg p-6 rounded-lg shadow-lg mx-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Product</h2>
        <form onSubmit={formSubmitHandler}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-medium mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value, 10) || 0)} // Parse value as an integer
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              min="0"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPrroduct;
