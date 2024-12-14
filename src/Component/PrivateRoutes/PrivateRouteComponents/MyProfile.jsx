import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Contex } from '../../ContexApi/Contex';

const MyProfile = () => {
  const { user, theme } = useContext(Contex); // User data from Context API
  const navigate = useNavigate();

  return (
    <div className={`${theme === 'dark' ? '' : 'bg-blue-200'} min-h-screen`}>
      {/* Cover Section */}
      <div className={`${theme === 'dark' ? 'bg-blue-300' : 'bg-blue-500'} px-3 h-48 flex items-center justify-center text-white`}>
        <h1 className="text-4xl font-bold">Welcome, {user?.displayName || 'User'}!</h1>
      </div>

      {/* Profile Information Card */}
      <div className="flex justify-center mt-8">
        <div className="bg-blue-100 shadow-lg rounded-lg p-6 w-96">
          <div className="flex flex-col items-center">
            {/* Profile Photo */}
            <img
              src={user?.photoURL}
              alt="User"
              className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
            />
            <h2 className="text-gray-800 text-xl font-semibold mt-4">{user?.displayName || 'Not provided'}</h2>
            <p className="text-gray-600">{user?.email || 'Not provided'}</p>
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


