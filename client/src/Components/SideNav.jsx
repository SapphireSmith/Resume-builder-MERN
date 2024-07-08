import React from 'react'
import { Link } from 'react-router-dom'
import { DocumentTextIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

const SideNav = () => {
  return (
    <div className='flex flex-col w-[23%] px-5 text-white'>

      <div className='flex items-center h-[8%] border-b-[0.1px] border-gray-500'>
        <a className='text-xl font-medium'><Link to={'/'}>Resume Builder</Link></a>
      </div>

      <div className='flex flex-col gap-2 py-3 h-[70%] border-b-[0.1px] border-gray-500'>
        <Link to={'/dashboard/resumes'}>
          <a className='flex items-center gap-2 py-3 pl-5 hover:bg-[#1c1c1c]'>
            <DocumentTextIcon className='size-4' />
            <span>Resumes</span>
          </a>
        </Link>
        <Link to={'/dashboard/settings'}>
          <a className='flex items-center gap-2 py-3 pl-5 hover:bg-[#1c1c1c]'>
            <Cog6ToothIcon className='size-4' />
            <span>Settings</span>
          </a>
        </Link>
      </div>

      <div className='text-white'>
        account
      </div>

    </div>
  )
}

export default SideNav