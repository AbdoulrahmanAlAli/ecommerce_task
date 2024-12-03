import AuthLeft from "@/components/auth/AuthLeft";
import Link from "next/link";
import React from "react";
import LoginForm from "./LoginForm";

const LoginPage = () => {


  return (
    <div className="w-[100%] h-[100vh] block lg:flex">
      <AuthLeft />
      <div className="w-[100%] lg:w-[60%] h-[100%]">
        <div className="h-[100%] flex flex-col justify-center items-center">
            <div className="text-center">
                <p className="text-3xl text-black font-bold">Sign In</p>
                <p className=" text-sm text-slate-500">
                    Do not have an account?
                    <Link
                    href="/register"
                    className="text-lg text-teal-600 hover:text-teal-950 transition cursor-pointer">
                    Sign up
                    </Link>
                </p>
            </div>
            <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// <div>
//             <p className="text-3xl text-black font-bold">Sign In</p>
//             <p className=" text-sm text-slate-500">
//               Do not have an account?
//               <Link
//                 href="/register"
//                 className="text-lg text-teal-600 hover:text-teal-950 transition cursor-pointer">
//                 Sign up
//               </Link>
//             </p>
//           </div>
