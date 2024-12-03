"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const DOMAIN = "http://localhost:3000";

const LogoutButton = () => {
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      await axios.get(`${DOMAIN}/api/users/logout`);
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.warning("somting went wrong");
      console.log(error);
    }
  };

  return (
    <button
      onClick={logoutHandler}
      type="button"
      className="text-white ml-4 flex justify-center items-center bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
      Log Out
    </button>
  );
};

export default LogoutButton;
