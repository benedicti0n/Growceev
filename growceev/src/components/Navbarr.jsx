"use client"

import Button from '@/common/Button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Navbarr() {

  const path = usePathname();

  const [activeSection, setActiveSection] = useState('');

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = ['home', 'testimonials', 'services', 'blog'];
      let active = '';
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            active = section;
          }
        }
      });
      setActiveSection(active);
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);
  

  return (
    <div className='w-full top-0 flex justify-between md:px-48 px-5 py-4 bg-white fixed z-10'>
      
      <Image src={"/growceevLogo.png"} alt='growceevlogo' width={40} height={40}/>

      <div className='md:flex gap-10 flex items-center justify-center'>

        <ul className='md:flex gap-10 hidden'>

        <li 
            className={`text-[16px] text-justify cursor-pointer text-black relative ${activeSection === 'home' ? 'active' : ''}`} 
            onClick={() => handleScroll('home')}
          >
            Home
          </li>
          <li 
            className={`text-[16px] text-justify cursor-pointer text-black relative ${activeSection === 'testimonials' ? 'active' : ''}`} 
            onClick={() => handleScroll('testimonials')}
          >
            Testimonials
          </li>
          <li 
            className={`text-[16px] text-justify cursor-pointer text-black relative ${activeSection === 'services' ? 'active' : ''}`} 
            onClick={() => handleScroll('services')}
          >
            Services
          </li>
          <li 
            className={`text-[16px] text-justify cursor-pointer text-black relative ${activeSection === 'blog' ? 'active' : ''}`} 
            onClick={() => handleScroll('blog')}
          >
            Blog
          </li>
            
        </ul>
        <div className='cursor-pointer mr-2'>
          <Button name={"Let's Talk"} color={"black"}/>
        </div>
      </div>

      <style jsx>{`
        .active::after {
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          background-color: black;
          position: absolute;
          bottom: -0.8px;
          left: 0;
        }
      `}</style>

    </div>
  )
}

export default Navbarr