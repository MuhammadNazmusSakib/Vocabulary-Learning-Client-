import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const ProfileBar = () => {

    const [active, setActive] = useState(null)
    const clicked = (select) => {
        setActive(select)
    }
    console.log(active)

    return (
        <div>
            <div className="hidden lg:flex flex-col">
                <Link
                    to="/my-profile"
                    className={`${active === 'my-profile' ? 'bg-gray-300 text-black' : ''} font-semi-bold py-2 pl-9 hover:bg-slate-200 hover:text-blue-600`}
                    onClick={() => clicked('my-profile')}
                >My Profile</Link>
                <Link
                    to="/my-profile/dashboard"
                    className={`${active === 'dashboard' ? 'bg-gray-300 text-black' : ''} font-semi-bold py-2 pl-9 hover:bg-slate-200 hover:text-blue-600`}
                    onClick={() => clicked('dashboard')}
                >Dashboard</Link>
            </div>
        </div>
    )
}

export default ProfileBar

