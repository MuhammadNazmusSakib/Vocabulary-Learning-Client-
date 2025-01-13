import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/main-logo.png'
import { Contex } from '../ContexApi/Contex';

const Header = () => {

    const { user, logOut, toggleTheme } = useContext(Contex)

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const [isOpen, setIsOpen] = useState(false);

    const profileDropdown = () => {
        setIsOpen(!isOpen)
    }




    return (
        <header className='bg-gradient-to-tr from-blue-600 to-purple-500 sticky top-0 z-50'>
            <div className="max-w-7xl mx-auto text-white">

                <div className="container mx-auto flex items-center justify-between px-4 py-4">
                    {/* Navbar Start: Logo */}
                    <div>
                        <Link to="/" className="text-2xl font-bold ">
                            <div className="flex items-center">
                                <img src={logo} className='w-10' />
                                <h1>Lingo Bingo</h1>
                            </div>
                        </Link>
                    </div>


                    {/* Navbar End: Login Button */}
                    <div className="hidden md:flex items-center gap-5">
                        {
                            user ? (
                                <>
                                    {/* <Link to='my-profile'> */}
                                    <div className="relative group">
                                        {/* Trigger Button */}
                                        <div
                                            onClick={profileDropdown}
                                            className="text-left"
                                        >
                                            <img src={user?.photoURL} className='w-10 h-10 rounded-full border-2 border-white cursor-pointer' />
                                            {/* <p>My profile</p> */}
                                        </div>
                                        {/* Dropdown Menu */}
                                        {
                                            isOpen && (
                                                <div className="absolute right-0 mt-2 w-48 bg-blue-200 shadow-lg rounded-lg group-hover:block">
                                                    <ul className="py-2">
                                                        <li>
                                                            <Link
                                                                to="my-profile"
                                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                                            >
                                                                My Profile
                                                            </Link>
                                                        </li>
                                                        <li className='lg:hidden'>
                                                            <Link to="my-profile/dashboard"
                                                                className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>
                                                                Dashboard
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <span onClick={logOut}
                                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                                            >
                                                                Logout
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )
                                        }
                                    </div>
                                </>
                            ) : (
                                <Link to="/login" className="bg-blue-500 border border-white text-white py-1 px-4 rounded hover:bg-blue-600">
                                    Login
                                </Link>
                            )
                        }

                    </div>

                    {/* Burger Button for small screens */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div onClick={toggleMenu} className="lg:hidden mt-3 shadow-md rounded-md p-4">

                    <ul className="space-y-4">

                        {
                            user ? (
                                <>
                                    <li>
                                        <Link to="/lesson" className="block  hover:text-blue-600">Start Learning</Link>
                                    </li>
                                    <li>
                                        <Link to="/tutorials" className="block  hover:text-blue-600">Tutorials</Link>
                                    </li>
                                    <li>
                                        <Link to="my-profile" className=" hover:text-blue-600">
                                            My Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="my-profile/dashboard" className=" hover:text-blue-600">
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <button onClick={logOut} className="block  hover:text-blue-600">
                                            LogOut
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <Link to="/login" className="block hover:text-blue-600">
                                        Login
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
