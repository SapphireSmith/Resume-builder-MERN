import React, { useState } from 'react';
import { PlusIcon, Bars3Icon, Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import MenuBar from '../../Components/MenuBar';
import { Link } from 'react-router-dom';

const Resumes = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full h-full text-white'>
      <nav className='flex items-center gap-3 w-full p-[15px] px-3 text-xl md:text-2xl lg:text-3xl font-semibold'>
        <Bars3BottomLeftIcon className='size-4 sm:hidden' onClick={toggleMenu} />
        <h2>Resumes</h2>
      </nav>

      <MenuBar isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <div className={`p-4 overflow-y-auto transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-50' : 'opacity-100'}`}>
        <div className='w-full flex flex-col gap-2'>
          <Link to={'/dashboard/resume/create'}>
            <div className='flex cursor-pointer flex-row hover:bg-[#1c1c1c] w-full justify-between text-[#c0c0c0] p-4'>
              <div className='flex justify-center gap-4 items-center'>
                <PlusIcon className='size-4 sm:size-6 gap-3' />
                <p className='hover:text-white text-sm sm:text-base delay-75 duration-150'>Create a new resume</p>
              </div>
              <p className='hover:text-white text-sm sm:text-base delay-75 duration-150'>Build from scratch</p>
              <Bars3Icon className='size-4 sm:size-6' />
            </div>
          </Link>
        </div>
        {/* Repeat similar blocks as needed */}
      </div>
    </div>
  );
};

export default Resumes;
