import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
import Navbar from '../../Components/Navbar';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const { login, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }


  return (
    <div className='bg-black flex flex-col h-screen w-full'>
      <Navbar />
      <div className="flex h-screen flex-1 flex-col justify-center px-6 py-10 lg:px-8 bg-black text-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-white bg-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-white bg-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <p className="mt-4 text-center font-medium md:text-left">
              Don't have an account?
              <Link to="/register">
                <a className="whitespace-nowrap font-semibold text-blue-700 hover:text-blue-500">
                  Register here
                </a>
              </Link>
            </p>

            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:from-red-500 hover:to-yellow-400 focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600 ${loading ? 'cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <div className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid  align-[-0.125em] text-primary">
                  </div>
                ) : (
                  'Login'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login