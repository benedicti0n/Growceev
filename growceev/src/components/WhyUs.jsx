import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

function WhyUs() {
  const table1 = [
    {
      id: 1,
      content: (
        <div className="flex justify-center items-center gap-3">
          <FaCheckCircle className="text-green-500" size={25} />
          <div className="block space-y-2">
            <p>Comprehensive strategy</p>
            <p>development and in-depth pre-</p>
            <p>SEO research</p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex gap-3 justify-center items-center">
          <FaCheckCircle className="text-green-500" size={25} />
          <div className="block space-y-2">
            <p>Highly skilled,</p>
            <p>certified team with a proven</p>
            <p>agency-focused work ethic</p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex gap-3 justify-center items-center">
          <FaCheckCircle className="text-green-500" size={25} />
          <div className="block space-y-2">
            <p>Transparent pricing</p>
            <p> and full data ownership</p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="flex gap-3 justify-center items-center">
          <FaCheckCircle className="text-green-500" size={25} />
          <p>Measurable and guaranteed results</p>
        </div>
      ),
    },
  ];
  
  const table2 = [
    {
      id: 1,
      content: (
        <div className="flex gap-3 justify-center items-center">
          <FaCircleXmark className="text-red-500" size={25} />
          <p>Outsourcing of work.</p>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex gap-3 justify-center items-center">
          <FaCircleXmark className="text-red-500" size={25} />
          <p>Untrained and Intern Level Team</p>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex gap-3 justify-center items-center">
          <FaCircleXmark className="text-red-500" size={25} />
          <div className="block space-y-2">
            <p>Hidden fees and holding data</p>
            <p>hostage on their own accounts</p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="flex gap-3 justify-center items-center">
          <FaCircleXmark className="text-red-500" size={25} />
          <div className="block space-y-2">
            <p>No performance milestone model</p>
            <p>when it comes to SEO</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center py-10">
      <h1 className="text-center text-7xl tracking-wide font-semibold mt-20 pt-10">Why Us?</h1>
      <div className="w-[800px] h-[600px] flex justify-between items-center mt-20">
        {/* Table 1 */}
        <div className="w-[45%] h-full flex flex-col space-y-8 items-start">
        <h2 className='font-bold flex justify-center items-center text-lg ml-10'>Growceev</h2>
          {table1.map((t1) => (
            <div key={t1.id}>
              {t1.content}
            </div>
          ))}
        </div>

        {/* Table 2 */}
        <div className="w-[45%] h-full flex flex-col space-y-[59px] items-start">
        <h2 className='font-bold text-lg flex justify-center items-center ml-10'>Other Agencies</h2>
          {table2.map((t2) => (
            <div key={t2.id}>
              {t2.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;