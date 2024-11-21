import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Contex } from '../../ContexApi/Contex';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
  const { user, setUser, updateUserProfile } = useContext(Contex);
  const [name, setName] = useState(user?.name || '');
  const [photoURL, setPhotoURL] = useState(user?.photo || '');
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // Update profile in Firebase
      await updateUserProfile({ displayName: name, photoURL });
      setUser((prevUser) => ({
        ...prevUser,
        displayName: name,
        photoURL,
      }))
      toast.success('Profile updated successfully!');
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      toast.error('Error updating profile:', error);
      toast.error('Failed to update profile. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-96 p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>

        <form onSubmit={handleUpdate}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-sm font-semibold text-gray-700">
              Photo URL
            </label>
            <input
              id="photoURL"
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter your photo URL"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
