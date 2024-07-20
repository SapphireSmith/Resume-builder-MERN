import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import MenuBar from '../../Components/MenuBar';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const Settings = () => {

  const { setAuthUser } = useAuthContext()
  const [accountEditable, setAccountEditable] = useState(false);
  const [securityEditable, setSecurityEditable] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [originalAccountData, setOriginalAccountData] = useState({});
  const [originalSecurityData, setOriginalSecurityData] = useState({});
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  const navigate = useNavigate();

  const [accountData, setAccountData] = useState({
    name: '',
    email: '',
    username: ''
  });

  const [securityData, setSecurityData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('user-jwt-token');
        const response = await axios.get('http://localhost:4000/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Store the original data
        setOriginalAccountData({
          name: response.data.name,
          email: response.data.email,
          username: response.data.username
        });

        setOriginalSecurityData({
          newPassword: '',
          confirmPassword: ''
        });

        // Set the account data for display
        setAccountData({
          name: response.data.name,
          email: response.data.email,
          username: response.data.username
        });
      } catch (error) {
        if (error.response && error.response.data.message === 'Token has expired') {
          // Clear the token and redirect to the home page
          alert('login again session expired')
          localStorage.removeItem('user-jwt-token');
          setAuthUser(null)
          navigate('/');
        } else {
          // Handle other errors
          console.error('Error fetching profile:', error);
        }
      }
    };

    fetchData();
  }, [navigate]);

  const handleInputChange = (section, field, value) => {
    if (section === 'account') {
      setAccountData({ ...accountData, [field]: value });
      if (!accountEditable) setAccountEditable(true);
    } else if (section === 'security') {
      setSecurityData({ ...securityData, [field]: value });
      if (!securityEditable) setSecurityEditable(true);
    } else if (section === 'delete') {
      setDeleteConfirmation(value);
    }
  };

  const handleSave = async (section) => {
    if (section === 'account') {
      setAccountEditable(false);
      // Save account data logic here
    } else if (section === 'security') {
      if (securityData.newPassword !== securityData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      try {
        const token = localStorage.getItem('user-jwt-token');
        await axios.post(
          'http://localhost:4000/api/user/update-password',
          {
            newPassword: securityData.newPassword,
            confirmPassword: securityData.confirmPassword
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert('Password updated successfully');
        setSecurityEditable(false);
        // Clear the form fields
        setSecurityData({ newPassword: '', confirmPassword: '' });
      } catch (error) {
        if (error.response && error.response.data.message === 'Token has expired') {
          // Clear the token and redirect to the home page
          alert('session expired login again')
          localStorage.removeItem('user-jwt-token');
          setAuthUser(null)
          navigate('/');
        } else {
          // Handle other errors
          console.error('Error updating password:', error);
        }
      }
    }
  };

  const handleDiscard = (section) => {
    if (section === 'account') {
      setAccountData(originalAccountData);
      setAccountEditable(false);
    } else if (section === 'security') {
      setSecurityData(originalSecurityData);
      setSecurityEditable(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirmation !== 'Delete') {
      alert('Please type "Delete" to confirm');
      return;
    }

    try {
      const token = localStorage.getItem('user-jwt-token');
      await axios.post(
        'http://localhost:4000/api/user/account-delete',
        {
          confirmationText: deleteConfirmation
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem('user-jwt-token');
      setAuthUser(null)
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data.message === 'Token has expired') {
        // Clear the token and redirect to the home page
        localStorage.removeItem('user-jwt-token');
        setAuthUser(null)
        navigate('/');
      } else {
        // Handle other errors
        console.error('Error deleting account:', error);
      }
    }
  };

  return (
    <div className="w-full h-full text-white">
      <nav className='flex gap-2 items-center w-full p-[15px] px-3 text-xl md:text-2xl lg:text-3xl font-semibold'>
        <Bars3BottomLeftIcon className='size-4 sm:hidden' onClick={toggleMenu} />
        <h2>Settings</h2>
      </nav>

      <MenuBar isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <div className="px-6">
        <div className="border-b-[0.1px] border-gray-500 pb-4">
          <h3 className="text-xl font-semibold mb-2">Account</h3>
          <div className="grid my-8 grid-cols-1 sm:grid-cols-2 gap-4">
            {['name', 'email', 'username'].map((field) => (
              <div key={field} className="flex flex-col items-start">
                <label htmlFor={field} className="w-full capitalize mb-2">{field}</label>
                <div className='flex w-full'>
                  <input
                    id={field}
                    type={field === 'email' ? 'text' : 'text'}
                    className={`w-full p-2 rounded-md text-white bg-black border-[0.1px] border-gray-500 ${field === 'email' ? 'bg-[#777777] text-[#dbdbdb]' : ''}`}
                    value={accountData[field]}
                    onChange={(e) => handleInputChange('account', field, e.target.value)}
                    disabled={field === 'email'} // Disable email field
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

        <div className=" mt-2  border-b-[0.1px] border-gray-500 pb-8">
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
                onClick={() => handleSave('security')}
              >
                Save
              </button>
              <button
                className="px-5 py-2 hover:bg-[#1c1c1c] rounded-md"
                onClick={() => handleDiscard('security')}
              >
                Discard
              </button>
            </div>
          )}
        </div>

        <h3 className="mt-2 text-xl font-semibold mb-2 text-red-500">Danger Zone</h3>
        <div className="flex flex-col pb-4 border-b-[0.1px] gap-3 border-gray-500">
          <div className='flex w-full'>
            <input
              type="text"
              className="w-full sm:w-3/4 p-2 rounded-md text-white bg-black border-[0.1px] border-gray-500"
              placeholder="Type 'Delete' to confirm"
              value={deleteConfirmation}
              onChange={(e) => handleInputChange('delete', 'confirmationText', e.target.value)}
            />
            <button
              className="ml-2 px-4 py-2 bg-red-600 rounded-md"
              onClick={handleDeleteAccount}
            >
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
