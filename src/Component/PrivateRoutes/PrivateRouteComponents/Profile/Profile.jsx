import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileBar from './ProfileBar'

const Profile = () => {
    return (
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div className="lg:w-1/5 p-4 border-r-2">
                <ProfileBar />
            </div>

            {/* Main Content */}
            <div className="lg:w-4/5">
                <Outlet />
            </div>
        </div>
    )
}

export default Profile