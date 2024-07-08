import React from 'react';
import { Resume_Landing_Page } from '../../assets/images';
import Navbar from '../../Components/Navbar';
import { useAuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  let navigate = useNavigate();
  const { authUser } = useAuthContext()

  const handleNavigate = (e) => {
    e.preventDefault()
    if (authUser) {
      // Navigate to dashboard route
      navigate('/dashboard');
    } else {
      // Navigate to login route
      navigate('/login');
    }
  }


  return (
    <div className='w-full bg-black flex flex-col'>
      <Navbar />
      <section className='text-white w-full h-full flex flex-col sm:flex-row'>
        <div className='flex-1 sm:flex-none sm:w-1/2 sm:px-12 px-2 md:px-32 py-9 flex flex-col items-start justify-center'>
          <h1 className='text-[40px] md:text-[50px] font-bold text-left mb-4'>
            <span className='block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text'>
              A free Resume
            </span>
            <span className='block text-yellow-400'>
              Builder
            </span>
          </h1>
          <button onClick={handleNavigate} className='mt-4 px-6 py-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105'>
            Dashboard
          </button>
        </div>
        <div className='flex-1 px-6 py-9 flex justify-center items-center'>
          <img
            className='max-h-[550px] max-w-[400px] w-full h-auto transform transition duration-300 hover:scale-95'
            src={Resume_Landing_Page}
            alt="Resume image"
          />
        </div>
      </section>
      <footer className='text-white text-center py-4'>
        <p className='text-sm'>&copy; 2024 Resume Builder. All rights reserved.</p>
        <div className='mt-2'>
          <a className='text-xs text-blue-400 hover:text-blue-200 px-2'>Privacy Policy</a>
          <span className='text-gray-400'>|</span>
          <a className='text-xs text-blue-400 hover:text-blue-200 px-2'>Terms of Service</a>
        </div>
      </footer>
    </div>
  )
}

export default Home
