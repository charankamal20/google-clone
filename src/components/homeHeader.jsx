import React from 'react'
import Link from "next/link"
import { TbGridDots } from "react-icons/tb";


function HomeHeader() {
  return (
    <header className='flex justify-end p-5 text-sm '>
        <div className='flex items-center space-x-4'>
            <Link className="hover:underline" href="https://mail.google.com">
                Gmail
            </Link>
            <Link className="hover:underline" href="https://image.google.com">
                Images
            </Link>
            <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2'/>
            <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md transition hover:brightness-105 hover:shadow-md'>Sign In</button>
        </div>
    </header>
  );
}

export default HomeHeader;