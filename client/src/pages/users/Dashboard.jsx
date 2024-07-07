import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SideNav from '../../Components/SideNav'
import Settings from './Settings'
import Resumes from './Resumes'

const Dashboard = () => {
  return (
    <div className='app_dashboard'>
      <div className='flex'>
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