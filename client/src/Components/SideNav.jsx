import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DocumentTextIcon, Cog6ToothIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useAuthContext } from '../context/AuthContext';

const MenuBar = () => {
  const { setAuthUser } = useAuthContext();
  let navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleAccountClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('user-jwt-token');
    navigate('/');
    setAuthUser(null);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='hidden sm:flex flex-col w-[23%] px-5 text-white h-full'>
      <div className='flex items-center h-[8%] border-b-[0.1px] border-gray-500'>
        <Link className='min-[638px]:text-xs min-[700px]:text-sm  min-[874px]:text-[17px] min-[1035px]:text-xl font-medium' to={'/'}>Resume Builder</Link>
      </div>
      <div className='flex flex-col gap-2 py-3 h-[70%] border-b-[0.1px] border-gray-500'>
        <Link to={'/dashboard/resumes'}>
          <div className='flex items-center min-[638px]:text-[9px] min-[700px]:text-[11px] lg:text-base gap-2 py-3 pl-5 hover:bg-[#1c1c1c]'>
            <DocumentTextIcon className='min-[638px]:size-2 min-[700px]:size-3 lg:size-4' />
            <span>Resumes</span>
          </div>
        </Link>
        <Link to={'/dashboard/settings'}>
          <div className='flex items-center min-[638px]:text-[9px] min-[700px]:text-[11px] lg:text-base gap-2 py-3 pl-5 hover:bg-[#1c1c1c]'>
            <Cog6ToothIcon className='min-[638px]:size-2 min-[700px]:size-3 lg:size-4' />
            <span>Settings</span>
          </div>
        </Link>
      </div>
      <div className='relative text-white' ref={dropdownRef}>
        <div className='flex items-center min-[638px]:text-[9px] min-[700px]:text-[11px] lg:text-base gap-2 py-3 pl-5 hover:bg-[#1c1c1c] cursor-pointer' onClick={handleAccountClick}>
          <UserCircleIcon className='min-[638px]:size-2 min-[700px]:size-3 lg:size-5' />
          <span>Account</span>
        </div>
        {isDropdownVisible && (
          <div className='absolute bottom-full mb-2 w-full bg-gray-800 border border-gray-700 rounded-md'>
            <Link to={'/dashboard/settings'}>
              <div className='block px-4 py-2 text-sm text-white hover:bg-gray-700'>Settings</div>
            </Link>
            <div onClick={handleLogout} className='block px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer'>Logout</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuBar;
