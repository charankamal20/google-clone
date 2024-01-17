import React from 'react'
import HomeHeader from '@/components/homeHeader';
import HomeSearch from '@/components/homeSearch';
import Image from "next/image"; 

function Home() {
  return (
    <div>
      {/* Header Section */}
      <HomeHeader />
      {/* Body */}
      <div className='flex flex-col items-center mt-24'>
        <Image
          width="300"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
        />
        <HomeSearch />
      </div>
    </div>
  );
}

export default Home;