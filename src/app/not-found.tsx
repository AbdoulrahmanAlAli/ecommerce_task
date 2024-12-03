import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <section className='w-[100%] h-[90vh] flex justify-center items-center flex-col'>
        <h1 className='text-7xl text-gray-800 font-bold'>404</h1>
        <p className='text-gray-500 text-3xl mt-2 mb-5'>
            Page Not Found
        </p>
        <Link href='/' className='text-xl underline text-blue-700'>
            Go to home page
        </Link>
    </section>
  ) 
}

export default NotFoundPage