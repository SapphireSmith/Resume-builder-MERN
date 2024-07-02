import React, { useState } from 'react'
import { GoogleIcon } from '../../assets/icons'
import { Link } from 'react-router-dom'
import useRegister from '../../hooks/useRegister';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { register } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault()
    await register(name, email, password, confirmPassword);
  }



  return (
    <div className="flex justify-center h-screen items-center flex-wrap text-slate-800">
      <div className="flex w-full">

        <div className="my-auto mx-auto flex flex-col justify-center px-6  md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:text-left md:leading-tight">Create your free account</p>
          <p className="mt-4 text-center font-medium md:text-left">
            Already have an account?
            <Link to={'/login'} >
              <a href="" className="whitespace-nowrap font-semibold text-blue-700"> Login here</a>
            </Link>
          </p>
          <button className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2"><img className="mr-2 h-5" src={GoogleIcon}  /> Get started with Google</button>
          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">Or use email instead</div>
          </div>
          <form className="flex flex-col items-stretch pt-5 md:pt-4"
            onSubmit={handleSubmit}>
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value) }}
                  id="login-name" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Name" />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                  id="login-email" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input type="password" id="login-password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value) }}
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password (minimum 8 characters)" />
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input type="password"
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value) }}
                  id="confirm-login-password" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password (minimum 8 characters)" />
              </div>
            </div>
            <button type="submit" className=" w-full rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register