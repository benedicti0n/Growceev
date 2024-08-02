"use client"

import Button from '@/common/Button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react'

function Navbarr() {

  const path = usePathname();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full top-0 flex justify-between md:px-32 px-5 py-4  bg-white fixed z-10'>
      
      <Image src={"/growceevLogo.png"} alt='growceevlogo' width={40} height={40}/>

      <div className='md:flex gap-10 flex items-center justify-center'>

        <ul className='md:flex gap-10 hidden'>

            <li className='text-[16px] text-justify cursor-pointer text-black' onClick={() => handleScroll('home')}>
            
                Home
                
            </li>

            <li className='text-[16px] text-justify cursor-pointer text-black' onClick={() => handleScroll('testimonials')}>
              
                Testimonials
              
            </li>

            <li className='text-[16px] text-justify cursor-pointer text-black' onClick={() => handleScroll('services')}>
              
                Services
              
              </li>
              
            <li className='text-[16px] text-justify cursor-pointer text-black' onClick={() => handleScroll('home')}>
              
                Blog
              
            </li>
            
        </ul>
        <div className='cursor-pointer mr-2'>
          <Button name={"Let's Talk"} color={"black"}/>
        </div>
      </div>

    </div>
  )
}

export default Navbarr