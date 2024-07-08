import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SideNav from '../../Components/SideNav'
import Settings from './Settings'
import Resumes from './Resumes'

const Dashboard = () => {
  return (
    <div className='bg-black w-full h-screen'>
      <div className='flex w-full h-full py-2'>
        <SideNav />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/resumes" />} />
          <Route path='/resumes' element={<Resumes />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard