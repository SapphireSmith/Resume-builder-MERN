import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import MenuBar from '../../Components/MenuBar';

const Settings = () => {
  const [accountEditable, setAccountEditable] = useState(false);
  const [securityEditable, setSecurityEditable] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [accountData, setAccountData] = useState({
    name: 'dummy_name',
    email: 'dummy_email',
    username: 'dummy_username'
  });
  const [securityData, setSecurityData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (section, field, value) => {
    if (section === 'account') {
      setAccountData({ ...accountData, [field]: value });
      if (!accountEditable) setAccountEditable(true);
    } else if (section === 'security') {
      setSecurityData({ ...securityData, [field]: value });
      if (!securityEditable) setSecurityEditable(true);
    }
  };

  const handleSave = (section) => {
    if (section === 'account') {
      setAccountEditable(false);
      // Save account data logic here
    } else if (section === 'security') {
      setSecurityEditable(false);
      // Save security data logic here
    }
  };

  const handleDiscard = (section) => {
    if (section === 'account') {
      setAccountData({
        name: 'dummy_name',
        email: 'dummy_email',
        username: 'dummy_username'
      });
      setAccountEditable(false);
    } else if (section === 'security') {
      setSecurityData({
        newPassword: '',
        confirmPassword: ''
      });
      setSecurityEditable(false);
    }
  };

  return (
    <div className="w-full h-full  text-white">
      <nav className='flex gap-2 items-center w-full p-[15px] px-3 text-xl md:text-2xl lg:text-3xl font-semibold'>
        <Bars3BottomLeftIcon className='size-4 sm:hidden' onClick={toggleMenu} />
        <h2>Settings</h2>
      </nav>

      <MenuBar isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <div className="px-6">
        <div className="border-b-[0.1px] border-gray-500 pb-4">
          <h3 className="text-xl font-semibold mb-2">Account</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['name', 'email', 'username'].map((field) => (
              <div key={field} className="flex flex-col items-start">
                <label htmlFor={field} className="w-full capitalize mb-2">{field}</label>
                <div className='flex w-full'>
                  <input
                    id={field}
                    type="text"
                    className="w-full p-2 rounded-md text-white bg-black border-[0.1px] border-gray-500 "
                    value={accountData[field]}
                    onChange={(e) => handleInputChange('account', field, e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
          {accountEditable && (
            <div className="flex justify-end space-x-4 mt-4 animate-slide-in">
              <button
                className="px-8 py-2 bg-white hover:bg-gray-300 text-black rounded-md"
                onClick={() => handleSave('account')}
              >
                Save
              </button>
              <button
                className="px-5 py-2 hover:bg-[#1c1c1c] rounded-md"
                onClick={() => handleDiscard('account')}
              >
                Discard
              </button>
            </div>
          )}
        </div>

        <div className="border-b-[0.1px] border-gray-500 pb-4">
          <h3 className="text-xl font-semibold mb-2">Security</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['newPassword', 'confirmPassword'].map((field) => (
              <div key={field} className="flex flex-col items-start">
                <label htmlFor={field} className="w-full capitalize mb-2">
                  {field === 'newPassword' ? 'New Password' : 'Confirm Password'}
                </label>
                <div className='flex w-full'>
                  <input
                    id={field}
                    type="password"
                    className="w-full p-2 rounded-md text-white bg-black border-[0.1px] border-gray-500 "
                    placeholder={field === 'newPassword' ? 'Enter new password' : 'Confirm new password'}
                    value={securityData[field]}
                    onChange={(e) => handleInputChange('security', field, e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
          {securityEditable && (
            <div className="flex justify-end space-x-4 mt-4 animate-slide-in">
              <button
                className="px-8 py-2 bg-white hover:bg-gray-300 text-black rounded-md"
                onClick={() => handleSave('account')}
              >
                Save
              </button>
              <button
                className="px-5 py-2 hover:bg-[#1c1c1c] rounded-md"
                onClick={() => handleDiscard('account')}
              >
                Discard
              </button>
            </div>
          )}
        </div>

        <h3 className="text-xl font-semibold mb-2 text-red-500">Danger Zone</h3>
        <div className="flex flex-col pb-4 border-b-[0.1px] gap-3 border-gray-500">
          <div className='flex w-full'>
            <input
              type="text"
              className="w-full sm:w-3/4 p-2 rounded-md text-white bg-black border-[0.1px] border-gray-500 "
              placeholder={`Delete`}
            />
            <button className="ml-2 px-4 py-2 bg-red-600 rounded-md">
              Delete
            </button>
          </div>
          <label className='text-sm text-gray-300'>Type <strong>Delete</strong> to confirm deleting your account</label>
        </div>
      </div>
    </div>
  );
};

export default Settings;
