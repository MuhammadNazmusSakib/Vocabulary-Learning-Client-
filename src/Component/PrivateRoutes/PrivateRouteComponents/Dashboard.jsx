import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Contex } from '../../ContexApi/Contex';

const Dashboard = () => {
  const { user } = useContext(Contex); 
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center py-10">
      {/* Welcome Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome, {user?.displayName || 'User'}!</h1>
        <p className="text-gray-600 text-lg mt-2">Here’s your profile information.</p>
      </div>

      {/* Profile Information Card */}
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="mt-6">
          <p className="text-gray-700 text-lg">
            <strong>Name:</strong> {user?.displayName || 'Not provided'}
          </p>
          <p className="text-gray-700 text-lg mt-2">
            <strong>Email:</strong> {user?.email || 'Not provided'}
          </p>
          <p className="text-gray-700 text-lg mt-2">
            <strong>Phone Number:</strong> {user?.phoneNumber || 'Not provided'}
          </p>
          <p className="text-gray-700 text-lg mt-2">
            <strong>Created Time:</strong> {user?.metadata.creationTime || 'Not provided'}
          </p>
          <p className="text-gray-700 text-lg mt-2">
            <strong>Last SignIn Time:</strong> {user?.metadata.lastSignInTime || 'Not provided'}
          </p>
        </div>

        {/* Update Profile Button */}
        <div className="mt-6">
          <button
            onClick={() => navigate('/update-profile')}
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
