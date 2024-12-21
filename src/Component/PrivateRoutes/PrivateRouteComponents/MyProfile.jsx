import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Contex } from '../../ContexApi/Contex';

const MyProfile = () => {
  const { user, theme } = useContext(Contex); // User data from Context API
  const navigate = useNavigate();

  return (
    <div className={`${theme === 'dark' ? '' : 'bg-blue-200'} min-h-screen`}>

      {/* Profile Information Card */}
      <div className="flex justify-center py-8">
        <div className="bg-blue-100 shadow-lg rounded-lg p-6">
          <div className="flex flex-col">
            {/* Profile Photo */}
            <img
              src={user?.photoURL}
              alt="User"
              className="w-32 h-32 rounded-lg sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-96 lg:h-56 object-cover"
            />
            <h2 className="text-gray-800 text-xl font-semibold mt-4">{user?.displayName || 'Not provided'}</h2>
            <p className="text-gray-600">{user?.email || 'Not provided'}</p>
            <p className="text-gray-700 text-lg mt-2">
              <strong>Created Time:</strong> {user?.metadata.creationTime || 'Not provided'}
            </p>
            <p className="text-gray-700 text-lg mt-2">
              <strong>Last SignIn Time:</strong> {user?.metadata.lastSignInTime || 'Not provided'}
            </p>
          </div>

          {/* Update Button */}
          <div className="mt-6">
            <button
              onClick={() => navigate('/update-profile')}
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Update Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;


