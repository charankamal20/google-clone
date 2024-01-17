"use client"

import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {AiOutlineSearch, AiOutlineCamera} from "react-icons/ai";

function SearchHeaderOptions() {
  const pathname = usePathname();
const router = useRouter();
  const searchParam = useSearchParams();
  const searchTerm = searchParam.get("searchTerm");

  const selectTab = (name) => {
    router.push(`/search/${name === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`);
  }  

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm" >
      <div className={`${pathname === '/search/web' && "!text-blue-600 !border-blue-600"} flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2`}>

        <AiOutlineSearch className="text-md"/>
        <p onClick={() => selectTab("All")} className="">All</p>
      </div>

      <div className={`${pathname === '/search/image' && "!text-blue-600 !border-blue-600"} flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2`}>

        <AiOutlineCamera className="text-md"/>
        <p onClick={() => selectTab("Images")} className="">Images</p>
      </div>
    </div>
  )
  
} 

export default SearchHeaderOptions;