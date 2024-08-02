'use client'

import Button from '@/common/Button';
import ScrollBtn from '@/common/ScrollBtn';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function PageOne() {

  const textRefs = useRef([]);

  useEffect(() => {
    gsap.from(textRefs.current, {
      x: -100,
      opacity: 0,
      stagger: 0.5,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.to(textRefs.current, {
      x: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 2,
      ease: 'power3.out'
    });
  }, []);

  return (
    <div id='home' className="min-h-screen w-full flex flex-col justify-center py-10 items-center md:px-48 px-5">
        <div className="w-full flex justify-between items-center">
        <div className='flex flex-col mt-[-20px]'>
          <h1 ref={(el) => (textRefs.current[0] = el)} className='text-4xl md:text-[64px] md:leading-[80.64px] font-[500] text-left'>
            Your One Stop
          </h1>
          <h1 ref={(el) => (textRefs.current[1] = el)} className='text-4xl mt-5 md:mt-0 md:text-[64px] md:leading-[80.64px] font-[500] text-left'>
            From SEO to Website
          </h1>
          <p ref={(el) => (textRefs.current[2] = el)} className='text-sm md:text-[20px] md:leading-[25.2px] text-gray-800 font-[400] text-left'>
            Some other sub heading, that you want to add
          </p>
          <div ref={(el) => (textRefs.current[3] = el)} className="w-fit mt-20 px-6 py-3 gap-1 flex justify-center items-center cursor-pointer">
            <Button name="Book Now" color="#0a00c1" />
          </div>
        </div>
            <img  ref={(el) => (textRefs.current[4] = el)} src="/sideImg.jpeg" alt="sideImg" className="w-[457px] h-[457px] hidden md:flex" />
        </div>
        <ScrollBtn />
    </div>
  )
}

export default PageOne