import React, { useContext } from 'react';
import { Contex } from '../../ContexApi/Contex';

const Dashboard = () => {
  const { user, theme } = useContext(Contex);
  

  return (
    <div className={`${theme === 'dark' ? '' : ''} min-h-screen pl-3`}>

      {/* Profile Information Card */}
      <div className="p-6 border-b-2">
        {/* Profile Image */}
        <div className="flex flex-col">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-32 h-32 rounded-lg sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-96 lg:h-56 object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="mt-6">
          <p className=" text-lg">
            <strong> {user?.displayName || 'Not provided'}</strong>
          </p>
          <p className="text-lg mt-2">
            <strong></strong> {user?.email || 'Not provided'}
          </p>
        </div>
      </div>
      {/* progress -----Working------------------------*/}
      <div className='flex flex-col my-10'>
        <progress className="progress progress-primary w-56" value="40" max="100"></progress>
        <progress className="progress progress-primary w-56 mt-3" value="70" max="100"></progress>
        <progress className="progress progress-primary w-56 mt-3" value="60" max="100"></progress>
      </div>
    </div>
  );
};

export default Dashboard;
