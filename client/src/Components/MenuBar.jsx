import React, { useEffect, useRef, useState } from 'react';
import { PlusIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleMenu }) => {
    const { setAuthUser } = useAuthContext();
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const sidebarRef = useRef(null);

    const handleAccountClick = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleLogout = () => {
        localStorage.removeItem('user-jwt-token');
        setAuthUser(null);
        navigate('/');
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            toggleMenu();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={sidebarRef} className={`sm:hidden fixed z-10 top-0 left-0 h-full bg-gray-900 text-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{ width: '35%' }}>
            <nav className='flex flex-col w-full px-5 text-white h-full'>
                <div className='flex items-center gap-2 h-[8%] border-b-[0.1px] border-gray-500'>
                    <XMarkIcon className='size-4' onClick={toggleMenu} />
                    <span className='text-xs font-normal'>Menu</span>
                </div>
                <div className='flex pl-2 flex-col gap-3 py-3 h-[70%] border-b-[0.1px] border-gray-500'>
                    <Link to={'/dashboard/resumes'} className='flex items-center gap-2 hover:bg-[#1c1c1c]'>
                        <span className='text-[10px] font-light'>Resume</span>
                    </Link>
                    <Link to={'/dashboard/settings'} className='flex items-center gap-2 hover:bg-[#1c1c1c]'>
                        <span className='text-[10px] font-light'>Settings</span>
                    </Link>
                </div>
                <div className='relative text-white'>
                    <div className='flex items-center gap-1 py-2 hover:bg-[#1c1c1c] cursor-pointer' onClick={handleAccountClick}>
                        <UserCircleIcon className='size-4' />
                        <span className='text-[12px]'>Account</span>
                    </div>
                    {isDropdownVisible && (
                        <div className='absolute bottom-full mb-2 w-full bg-gray-800 border border-gray-700 rounded-md'>
                            <Link to={'/dashboard/settings'}>
                                <div className='block px-4 py-2 text-[10px] text-white hover:bg-gray-700'>Settings</div>
                            </Link>
                            <div onClick={handleLogout} className='block px-4 py-2 text-[10px] text-white hover:bg-gray-700 cursor-pointer'>Logout</div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
