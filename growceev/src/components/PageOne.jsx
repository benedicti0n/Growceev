'use client'

import Button from '@/common/Button';
import ScrollBtn from '@/common/ScrollBtn';
import Link from 'next/link';
import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";


function PageOne() {

  return (
    <div id='home' className="min-h-screen w-full flex flex-col justify-center py-10 items-center md:px-12 px-5">
        <div className="w-full flex justify-between items-center">
            <div className='flex flex-col mt-[-20px]'>
                <h1 className='text-4xl md:text-[64px] md:leading-[80.64px] font-[500] text-left'>Your One Stop</h1>
                <h1 className='text-4xl mt-5 md:mt-0 md:text-[64px] md:leading-[80.64px] font-[500] text-left'>From SEO to Website</h1>
                <p className='text-sm md:text-[20px] md:leading-[25.2px] text-gray-800 font-[400] text-left'>Some other sub heading, that you want to add</p>
                {/* <button className=" w-fit mt-20 rounded-[32px] px-6 py-3 gap-1 flex justify-center items-center bg-black text-white">Book Now <HiArrowLongRight size={20} className='text-white'/>
                </button> */}
                <div className=" w-fit mt-20 px-6 py-3 gap-1 flex justify-center items-cente cursor-pointer">
                  <Button name={"Book Now"} color={"#0a00c1"}/>
                </div>
                
            </div>
            <img src="/sideImg.jpeg" alt="sideImg" className="w-[457px] h-[457px] hidden md:flex" />
        </div>
      <Link href="#testimonials">
        {/* <div className='mt-12 cursor-pointer border border-black rounded-full w-[100px] h-[100px] flex justify-center items-center'>
            <HiArrowLongDown size={30}/>
        </div> */}
        <ScrollBtn />
      </Link>
    </div>
  )
}

export default PageOne