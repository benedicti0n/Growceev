import React from 'react'

function PageTwo() {

    const itemCount = 6;

  const items = [];

  for(let i=0; i < itemCount; i++){
      items.push(
        <div className='px-5 py-6 border border-gray-400 rounded-lg flex flex-col'>
        <h2 className='text-lg font-semibold mb-4'>
          &quot;Growceev helped me to take my business to the next level&quot;
        </h2>
        <div className='flex mt-3 mb-5 gap-3 items-center'>
          <img src="/profile.jpeg" alt="profile" className='w-10 h-10 rounded-full' />
          <div className="flex flex-col">
            <p className='text-gray-700 text-[16px]'>John Doe</p>
            <p className='text-gray-500 text-[15px]'>XYZ Company</p>
          </div>
        </div>
      </div>
      )
  }

  return (
    <div className="min-h-screen w-full flex justify-center py-6 mt-10 items-center md:px-12 px-5">
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {items}
        </div>
    </div>
  )
}

export default PageTwo