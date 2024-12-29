import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProfileBar = () => {
  const location = useLocation();

  return (
    <div>
      <div className="hidden lg:flex flex-col">
        <Link
          to="/my-profile"
          className={`${
            location.pathname === '/my-profile' ? 'bg-gray-300 text-black' : ''
          } font-semi-bold py-2 pl-9 hover:bg-slate-200 hover:text-blue-600`}
        >
          My Profile
        </Link>
        <Link
          to="/my-profile/dashboard"
          className={`${
            location.pathname === '/my-profile/dashboard' ? 'bg-gray-300 text-black' : ''
          } font-semi-bold py-2 pl-9 hover:bg-slate-200 hover:text-blue-600`}
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default ProfileBar;
