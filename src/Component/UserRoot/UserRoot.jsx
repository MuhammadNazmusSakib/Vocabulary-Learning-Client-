import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNavbar from '../UserHeader/UserNavbar'

const UserRoot = () => {
  return (
    <div>
        <UserNavbar/>
        <Outlet/>
    </div>
  )
}

export default UserRoot