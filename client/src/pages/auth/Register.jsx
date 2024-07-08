import React, { useState } from 'react'
import { GoogleIcon } from '../../assets/icons'
import { Link } from 'react-router-dom'
import useRegister from '../../hooks/useRegister';
import Navbar from '../../Components/Navbar';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { register, loading } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault()
    await register(name, email, password, confirmPassword);
  }



  return (
    <div className='bg-black flex flex-col h-screen w-full'>
      <Navbar />
      <div className="flex items-center mt-12 flex-wrap text-slate-800">
        <div className="flex w-full ">
          <div className="my-auto mx-auto flex flex-col justify-center px-6  md:justify-start lg:w-[28rem]">
            <p className="text-center text-white text-3xl font-bold md:text-left md:leading-tight">Create your free account</p>
            <p className="mt-4 text-white text-center font-medium md:text-left">
              Already have an account?
              <Link to={'/login'} >
                <a href="" className="whitespace-nowrap font-semibold text-blue-700"> Login here</a>
              </Link>
            </p>
            <button className="-2 mt-8 flex items-center justify-center rounded-md  px-4 py-1 outline-none transition hover:border-transparent bg-blue-500 hover:text-gray-400 text-white"><img className="mr-2 h-5" src={GoogleIcon} /> Get started with Google</button>
            <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
              <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-black px-4 text-center text-sm text-white">Or use email instead</div>
            </div>
            <form className="flex flex-col items-stretch pt-5 md:pt-4"
              onSubmit={handleSubmit}>
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    required
                    id="login-name" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Name" />
                </div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    required
                    id="login-email" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
                </div>
              </div>
              <div className="mb-4 flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input type="password" id="login-password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    required
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" />
                </div>
              </div>
              <div className="mb-4 flex flex-col">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input type="password"
                    value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                    required
                    id="confirm-login-password" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Re-enter Password" />
                </div>
              </div>
              <button
                type="submit"
                className={`${loading ? 'cursor-not-allowed' : ''} flex w-full justify-center rounded-md bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
               px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-60`}
                disabled={loading}
              >
                {
                  loading ?
                    <div
                      className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status">
                    </div> :
                    'Register'
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register