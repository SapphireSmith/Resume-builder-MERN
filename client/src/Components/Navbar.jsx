import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='text-white  border-gray-500 border-b-[.01rem] flex items-center'>
            <span className='p-5 text-[20px] sm:text-[25px] lg:text-[30px] md:font-semibold font-medium'>
                <Link to={'/'}>
                    Resume Builder
                </Link>
            </span>
        </nav>
    )
}

export default Navbar