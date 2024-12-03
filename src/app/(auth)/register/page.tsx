import AuthLeft from '@/components/auth/AuthLeft'
import Link from 'next/link'
import React from 'react'
import RegisterForm from './RegisterForm'

const RegisterPage = () => {
  return (
    <div className="w-[100%] h-[100vh] block lg:flex">
      <AuthLeft />
      <div className="w-[100%] lg:w-[60%] h-[100%]">
        <div className="h-[100%] flex flex-col justify-center items-center">
            <div className="text-center">
                <p className="text-3xl text-black font-bold">Sign up</p>
                <p className=" text-sm text-slate-500">
                    Already have an account?
                    <Link
                    href="/login"
                    className="text-lg text-teal-600 hover:text-teal-950 transition cursor-pointer">
                    Sign in
                    </Link>
                </p>
            </div>
            <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
