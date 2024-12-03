import React from 'react'
import ImageAuth from '../../../public/authImage.png'
import Image from 'next/image'
import Logo from '@/components/logo/Logo'

const AuthLeft = () => {
  return (
    <div className='hidden lg:block w-[40%] h-[100%] bg-[#F3F5F7]'>
        <div className='w-[100%] h-[10%] flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center'>
                <Logo />
            </div>
        </div>
        <div className='w-[100%] h-[90%] flex justify-center items-center'>
            <Image src={ImageAuth} alt='authimage' width={500} height={500} />
        </div>
    </div>
  )
}

export default AuthLeft
