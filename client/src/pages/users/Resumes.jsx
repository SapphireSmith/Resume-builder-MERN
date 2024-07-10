import React from 'react';
import { PlusIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Resumes = () => {
  return (
    <div className='w-full h-full text-white'>
      <nav className='w-full p-[15px] px-3 text-xl md:text-2xl lg:text-3xl font-semibold'>
        <h2>Resumes</h2>
      </nav>
      <div className='p-4 overflow-y-auto'>
        <div className=' w-full flex felx-col gap-2'>
          <div className='flex cursor-pointer flex-row hover:bg-[#1c1c1c] w-full justify-between text-[#c0c0c0] p-4'>
            <div className='flex justify-center gap-4 items-center'>
              <PlusIcon className=' size-4 sm:size-6 gap-3' />
              <p className='hover:text-white text-sm sm:text-base delay-75 duration-150'>Create a new resume</p>
            </div>
            <p className='hover:text-white text-sm sm:text-base delay-75 duration-150'>Build from scratch</p>
            <Bars3Icon className='size-4 sm:size-6' />
          </div>
        </div>
        <div className=' w-full flex felx-col gap-2'>
          <div className='flex cursor-pointer flex-row hover:bg-[#1c1c1c] w-full justify-between text-[#c0c0c0] p-4'>
            <div className='flex justify-center gap-4 items-center'>
              <PlusIcon className=' size-4 sm:size-6 gap-3' />
              <p className='hover:text-white text-sm sm:text-base delay-75 duration-150'>Create a new resume</p>
            </div>
            <p className='hover:text-white text-sm sm:text-base delay-75 duration-150'>Build from scratch</p>
            <Bars3Icon className='size-4 sm:size-6' />
          </div>
        </div>

        <div className=' w-full flex felx-col gap-2'>
          <div className='flex cursor-pointer flex-row hover:bg-[#1c1c1c] w-full justify-between text-[#c0c0c0] p-4'>
            <div className='flex justify-center gap-4 items-center'>
              <PlusIcon className=' size-4 sm:size-6 gap-3' />
              <p className='hover:text-white text-sm sm:text-base delay-75 duration-150'>Create a new resume</p>
            </div>
            <p className='hover:text-white text-sm sm:text-base delay-75 duration-150'>Build from scratch</p>
            <Bars3Icon className='size-4 sm:size-6' />
          </div>
        </div>

        <div className=' w-full flex felx-col gap-2'>
          <div className='flex cursor-pointer flex-row hover:bg-[#1c1c1c] w-full justify-between text-[#c0c0c0] p-4'>
            <div className='flex justify-center gap-4 items-center'>
              <PlusIcon className=' size-4 sm:size-6 gap-3' />
              <p className='hover:text-white text-sm sm:text-base delay-75 duration-150'>Create a new resume</p>
            </div>
            <p className='hover:text-white text-sm sm:text-base delay-75 duration-150'>Build from scratch</p>
            <Bars3Icon className='size-4 sm:size-6' />
          </div>
        </div>

        <div className=' w-full flex felx-col gap-2'>
          <div className='flex cursor-pointer flex-row hover:bg-[#1c1c1c] w-full justify-between text-[#c0c0c0] p-4'>
            <div className='flex justify-center gap-4 items-center'>
              <PlusIcon className=' size-4 sm:size-6 gap-3' />
              <p className='hover:text-white text-sm sm:text-base delay-75 duration-150'>Create a new resume</p>
            </div>
            <p className='hover:text-white text-sm sm:text-base delay-75 duration-150'>Build from scratch</p>
            <Bars3Icon className='size-4 sm:size-6' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resumes;
