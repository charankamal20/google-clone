"use client"

import React from 'react'
import { RxCross2 } from "react-icons/rx"
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react'

function SearchBox() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const searchTerm = searchParams.get("searchTerm");
    const [term, setTerm] = useState(searchTerm || "");

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!term.trim()) return;

      router.push(`/search/web?searchTerm=${term}`);
    } 
    
    return (
      
      <form onSubmit={handleSubmit} className="flex max-w-3xl border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow items-center">
          <input value={term} onChange={(e) => setTerm(e.target.value)} className='focus:outline-none w-full' type="text" />
          <RxCross2
            onClick={() => setTerm("")} 
            className="text-2xl cursor-pointer text-gray-500 sm:mr-2"/>
          <BsFillMicFill className="hidden md:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
          <AiOutlineSearch onClick={handleSubmit} className="text-2xl text-blue-500 md:inline-flex hidden cursor-pointer" /> 
      </form>
    ) 
}

export default SearchBox;