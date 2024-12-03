"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";

const DOMAIN = 'http://localhost:3000';

const RegisterForm = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "") return toast.error("Username is required");
    if (email === "") return toast.error("Email si required");
    if (password === "") return toast.error("password si required");

    try {

      await axios.post(`${DOMAIN}/api/users/register`, {username, email, password})
      toast.success('Register successful')
      router.replace("/");
      router.refresh();

    } catch (error: any) {
      toast.error(error?.response?.data.message);
      console.log(error)
    }
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      className="w-[90%] sm:w-[60%] lg:w-[50%] flex flex-col gap-4">
      <input
        type="test"
        placeholder="Username"
        className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-600"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-600"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-600"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="p-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition">
        Sign In
      </button>
    </form>
  );
};

export default RegisterForm;
