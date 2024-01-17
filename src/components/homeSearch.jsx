"use client"

import React from 'react';
import {useRouter} from "next/navigation";
import {useState} from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import {BsFillMicFill} from "react-icons/bs";


function HomeSearch() {
    
    const [input, setInput] = useState();
    const router = useRouter();
    const [randomSearchLoading, setRandomSearchLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!input.trim()) return;

        router.push(`/search/web?searchTerm=${input}`);
    }

    const randomSearch = async () => {
        const response = await fetch("https://random-word-api.herokuapp.com/word")
        .then((res) => res.json())
        .then((data) => data[0]);

        if(!response) return;
        
        setRandomSearchLoading(true);
        router.push(`/search/image?searchTerm=${response}`);
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="flex w-full sm:max-w-xl lg:max-w-2xl mx-auto mt-5 focus-within:shadow-md rounded-full hover:shadow-md transition-shadow max-w-[90%] border border-gray-200 px-5 py-3">
            <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
            <input onChange={(e) => setInput(e.target.value)} className="flex-grow focus:outline-none" type="text" />
            <BsFillMicFill />
        </form>
        <div className='flex flex-col sm:flex-row mt-8 space-y-2 sm:space-y-0 sm:space-x-4 justify-center'>
            <button onClick={handleSubmit} className='btn'>Google Search</button>
            <button disabled={randomSearchLoading} onClick={randomSearch} className='disabled:opacity-50 btn flex justify-center items-center'>
                { randomSearchLoading ? (
                    <img className='h-6 text-center' src="loader.svg" alt="loading..." />
                
                    ) : (
                    "I'm Feeling Lucky"
                )}
            </button>
        </div>
        </>
    );
}

export default HomeSearch;