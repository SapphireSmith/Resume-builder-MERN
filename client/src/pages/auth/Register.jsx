import React from 'react'
import { GoogleIcon } from '../../assets/icons'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div class="flex justify-center h-screen items-center flex-wrap text-slate-800">
      <div class="flex w-full">

        <div class="my-auto mx-auto flex flex-col justify-center px-6  md:justify-start lg:w-[28rem]">
          <p class="text-center text-3xl font-bold md:text-left md:leading-tight">Create your free account</p>
          <p class="mt-4 text-center font-medium md:text-left">
            Already have an account?
            <Link to={'/login'} >
              <a href="" class="whitespace-nowrap font-semibold text-blue-700"> Login here</a>
            </Link>
          </p>
          <button class="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2"><img class="mr-2 h-5" src={GoogleIcon} alt /> Get started with Google</button>
          <div class="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div class="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">Or use email instead</div>
          </div>
          <form class="flex flex-col items-stretch pt-5 md:pt-4">
            <div class="flex flex-col pt-4">
              <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input type="text" id="login-name" class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Name" />
              </div>
            </div>
            <div class="flex flex-col pt-4">
              <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input type="email" id="login-email" class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
              </div>
            </div>
            <div class="mb-4 flex flex-col pt-4">
              <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input type="password" id="login-password" class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password (minimum 8 characters)" />
              </div>
            </div>
            <div class="mb-4 flex flex-col">
              <div class="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input type="password" id="login-password" class="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password (minimum 8 characters)" />
              </div>
            </div>
            <button type="submit" class=" w-full rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition hover:bg-blue-700 focus:ring-2">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register