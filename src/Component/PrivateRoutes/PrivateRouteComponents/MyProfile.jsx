import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Contex } from '../../ContexApi/Contex';
import { FaUserEdit } from 'react-icons/fa';

const MyProfile = () => {
  const { user, theme } = useContext(Contex); // User data from Context API
  const navigate = useNavigate();

  return (
    <div className={`${theme === 'dark' ? '' : ''} min-h-screen`}>

      {/* Profile Information Card */}
      <div className="p-6 border-b-2">
        {/* Profile Image */}
        <div className="relative flex flex-col">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-full h-fit rounded-lg sm:w-96 sm:h-56 object-cover"
          />
          <button onClick={() => navigate('update-profile')} className='absolute bg-gray-300 p-1 rounded-full top-4 right-4'>
            <FaUserEdit className='cursor-pointer text-3xl' />
          </button>
        </div>

        {/* Profile Info */}
        <div className="mt-2">
          <p className=" text-lg">
            <strong> {user?.displayName || 'Not provided'}</strong>
          </p>
          <p className="text-lg mt-2">
            <strong></strong> {user?.email || 'Not provided'}
          </p>
          <p className="text-lg mt-2">
            <strong></strong>Joined {new Date(user?.metadata.creationTime).toLocaleString('en-US', {
              month: 'short',
              year: 'numeric'
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;


{/* Update Button */ }
{/* <div className="mt-6">
  <button
    onClick={() => navigate('update-profile')}
    className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
  >
    Update Information
  </button>
</div> */}


