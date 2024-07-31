import Button from '@/common/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Navbarr() {
  return (
    <div className='w-full top-0 flex justify-between md:px-32 px-5 py-4  bg-white fixed z-10'>
      
      <Image src={"/growceevLogo.png"} alt='growceevlogo' width={40} height={40}/>
       {/* <svg className="cursor-pointer" width="70" height="30" viewBox="0 0 70 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_13_115)">
          
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.96591 11.2C5.43849 11.2 4.93267 10.9893 4.55973 10.6142C4.18679 10.2391 3.97727 9.73043 3.97727 9.2V0H0V9.2C0 12.5136 2.67114 15.2 5.96591 15.2H10.3409V11.2H5.96591ZM17.8977 4C17.4277 4 16.9622 4.09312 16.5279 4.27403C16.0936 4.45495 15.699 4.72012 15.3666 5.05442C15.0342 5.38871 14.7705 5.78557 14.5907 6.22234C14.4108 6.65911 14.3182 7.12724 14.3182 7.6C14.3182 8.07276 14.4108 8.54089 14.5907 8.97766C14.7705 9.41443 15.0342 9.81129 15.3666 10.1456C15.699 10.4799 16.0936 10.745 16.5279 10.926C16.9622 11.1069 17.4277 11.2 17.8977 11.2C18.8471 11.2 19.7576 10.8207 20.4288 10.1456C21.1001 9.47045 21.4773 8.55478 21.4773 7.6C21.4773 6.64522 21.1001 5.72955 20.4288 5.05442C19.7576 4.37928 18.8471 4 17.8977 4ZM10.3409 7.6C10.3409 3.4028 13.7244 0 17.8977 0C22.0711 0 25.4545 3.4028 25.4545 7.6C25.4545 11.7972 22.0711 15.2 17.8977 15.2C13.7244 15.2 10.3409 11.7972 10.3409 7.6ZM60.8523 4C59.9029 4 58.9924 4.37928 58.3211 5.05442C57.6499 5.72955 57.2727 6.64522 57.2727 7.6C57.2727 8.55478 57.6499 9.47045 58.3211 10.1456C58.9924 10.8207 59.9029 11.2 60.8523 11.2C61.8016 11.2 62.7121 10.8207 63.3834 10.1456C64.0547 9.47045 64.4318 8.55478 64.4318 7.6C64.4318 6.64522 64.0547 5.72955 63.3834 5.05442C62.7121 4.37928 61.8016 4 60.8523 4ZM53.2955 7.6C53.2955 3.4028 56.6789 0 60.8523 0C65.0256 0 68.4091 3.4028 68.4091 7.6C68.4091 11.7972 65.0256 15.2 60.8523 15.2C56.6789 15.2 53.2955 11.7972 53.2955 7.6ZM33.8068 0C29.6335 0 26.25 3.4028 26.25 7.6C26.25 11.7972 29.6335 15.2 33.8068 15.2H44.9432C45.7263 15.2 46.4816 15.08 47.1919 14.8576L49.3182 16L51.6123 11.6784C52.195 10.5783 52.4999 9.35091 52.5 8.1044V7.6C52.5 3.4028 49.1165 0 44.9432 0H33.8068ZM48.5227 7.6C48.5227 6.64522 48.1456 5.72955 47.4743 5.05442C46.803 4.37928 45.8925 4 44.9432 4H33.8068C33.3367 4 32.8713 4.09312 32.437 4.27403C32.0027 4.45495 31.6081 4.72012 31.2757 5.05442C30.9433 5.38871 30.6796 5.78557 30.4997 6.22234C30.3199 6.65911 30.2273 7.12724 30.2273 7.6C30.2273 8.07276 30.3199 8.54089 30.4997 8.97766C30.6796 9.41443 30.9433 9.81129 31.2757 10.1456C31.6081 10.4799 32.0027 10.745 32.437 10.926C32.8713 11.1069 33.3367 11.2 33.8068 11.2H44.9432C45.8877 11.2 46.794 10.8246 47.4645 10.1555C48.135 9.48642 48.5154 8.57792 48.5227 7.628V7.6Z" fill="#283841"/>
        <path d="M70 1C70 1.26522 69.8952 1.51957 69.7088 1.70711C69.5223 1.89464 69.2694 2 69.0057 2C68.742 2 68.4891 1.89464 68.3026 1.70711C68.1161 1.51957 68.0114 1.26522 68.0114 1C68.0114 0.734784 68.1161 0.48043 68.3026 0.292893C68.4891 0.105357 68.742 0 69.0057 0C69.2694 0 69.5223 0.105357 69.7088 0.292893C69.8952 0.48043 70 0.734784 70 1Z" fill="#283841"/>
        </g>
        <defs>
        <clipPath id="clip0_13_115">
        <rect width="70" height="16" fill="white"/>
        </clipPath>
        </defs>
        </svg> */}

      <div className='md:flex gap-10 flex items-center justify-center'>

        <ul className='md:flex gap-10 hidden'>

            <li className='text-[16px] text-justify cursor-pointer text-black'>
              <Link href="#home">
                Home
              </Link>
            </li>

            <li className='text-[16px] text-justify cursor-pointer text-black'>
              <Link href="#testimonials">
                Testimonials
              </Link>
            </li>

            <li className='text-[16px] text-justify cursor-pointer text-black'>
              <Link href="#services">
                Services
              </Link>
              </li>
              
            <li className='text-[16px] text-justify cursor-pointer text-black'>
              <Link href="#blog">
                Blog
              </Link>
            </li>
            
            {/* <div className="cursor-pointer hover:bg-gray-300 duration-500 border border-black rounded-[24px] flex justify-center items-center px-5">
            <p className='text-[16px] text-justify text-black'>Lets Talk</p>
            <HiArrowLongRight size={25}/>
            </div> */}

            
        </ul>
        <div className='cursor-pointer mr-2'>
          <Button name={"Let's Talk"} color={"black"}/>
        </div>
      </div>

    </div>
  )
}

export default Navbarr