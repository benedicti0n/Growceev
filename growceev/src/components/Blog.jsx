import React from 'react';
import { PinContainer } from './ui/3d-pin';

function Blog() {
  const Container = [
    {
      id: 1,
      blog: "Blog 1",
      title: "New title for a blog",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt mollitia quam animi voluptatum. Quas corrupti magni vero quam expedita?",
      imageUrl: "",
      bg: "bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
    },
    {
      id: 2,
      blog: "Blog 2",
      title: "New title for a blog",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt mollitia quam animi voluptatum. Quas corrupti magni vero quam expedita?",
      imageUrl: "",
      bg: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
    },
    {
      id: 3,
      blog: "Blog 3",
      title: "New title for a blog",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt mollitia quam animi voluptatum. Quas corrupti magni vero quam expedita?",
      imageUrl: "",
      bg: "bg-gradient-to-r from-blue-400 via-teal-300 to-green-400"
    },
    {
      id: 4,
      blog: "Blog 4",
      title: "New title for a blog",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt mollitia quam animi voluptatum. Quas corrupti magni vero quam expedita?",
      imageUrl: "",
      bg: "bg-gradient-to-r from-purple-700 via-pink-600 to-red-500"
    },
    {
      id: 5,
      blog: "Blog 5",
      title: "New title for a blog",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt mollitia quam animi voluptatum. Quas corrupti magni vero quam expedita?",
      imageUrl: "",
      bg: "bg-gradient-to-r from-green-300 via-yellow-300 to-pink-400"
    },
    {
      id: 6,
      blog: "Blog 6",
      title: "New title for a blog",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt mollitia quam animi voluptatum. Quas corrupti magni vero quam expedita?",
      imageUrl: "",
      bg: "bg-gradient-to-r from-indigo-500 via-purple-400 to-blue-300"
    }
  ];

  return (
    <div id='blog' className='w-full h-screen flex justify-center items-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[70%] h-[80%]'>
        {Container.map((container) => (
          <div key={container.id} className="h-[400px] w-full gap-4 flex items-center justify-center">
            <PinContainer
              title={container.blog}
              href={container.imageUrl}
            >
              <div className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[22rem] ">
              <div className="flex flex-1 w-full rounded-lg mt-2 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                <h3 className="max-w-xs !pb-2 !m-0 pt-4 font-bold text-base text-black">
                {container.title}
                </h3>
                <div className="text-base">
                  <span className="text-slate-500 ">{container.description}</span>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
