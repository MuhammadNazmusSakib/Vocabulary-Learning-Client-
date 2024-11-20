import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/main-logo.png'
import { Contex } from '../ContexApi/Contex';

const Header = () => {

    const { user, logOut } = useContext(Contex)

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };



    return (
        <header className="bg-white shadow-md py-4 px-6">
            <div className="container mx-auto flex items-center justify-between">
                {/* Navbar Start: Logo */}
                <div>
                    <Link to="/" className="text-2xl font-bold text-gray-800">
                        <div className="flex items-center">
                            <img src={logo} className='w-10' />
                            <h1>Lingo Bingo</h1>
                        </div>
                    </Link>
                </div>

                {/* Navbar Center: Links for larger screens */}
                <nav className="hidden lg:flex space-x-6">
                    <Link to="/" className="font-semi-bold hover:text-blue-600">Home</Link>
                    <Link to="/lesson" className="font-semi-bold hover:text-blue-600">Start Learning</Link>
                    <Link to="/tutorials" className="font-semi-bold hover:text-blue-600">Tutorials</Link>
                    <Link to="/about-us" className="font-semi-bold hover:text-blue-600">About Us</Link>
                </nav>


                {/* Navbar End: Login Button */}
                <div className="hidden lg:flex">
                    {
                        user ? (
                            <>
                                <div className="relative inline-block text-left">
                                    {/* Trigger Button */}
                                    <button
                                        onClick={toggleDropdown}
                                        className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <img src={user?.photoURL} className='rounded-full w-6 h-6 mr-3' />
                                        <p>My profile</p>
                                        <svg
                                            class="-mr-1 ml-2 h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    {/* Dropdown Menu */}
                                    {isOpen && (
                                        <div
                                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            role="menu"
                                            aria-orientation="vertical"
                                        >
                                            <div className="py-1" role="none">
                                                {/* Dropdown Items */}
                                                <Link to="/my-profile"
                                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    role="menuitem"
                                                >
                                                    <svg
                                                        className="mr-2 h-5 w-5 text-gray-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M10 0a5 5 0 100 10A5 5 0 0010 0zm0 12a8.01 8.01 0 00-7.938 7.03A8 8 0 0018 20a8.01 8.01 0 00-8-8z" />
                                                    </svg>
                                                    My Profile
                                                </Link>
                                                <Link to="/dashboard"                                                    
                                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    role="menuitem"
                                                >
                                                    <svg
                                                        className="mr-2 h-5 w-5 text-gray-400"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M4 4a1 1 0 011-1h10a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                                    </svg>
                                                    Dashboard
                                                </Link>

                                            </div>
                                        </div>
                                    )}
                                </div>
                                <button onClick={logOut} className="btn bg-blue-500 text-white ml-4 py-1 px-4 rounded hover:bg-blue-600">
                                    LogOut
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                Login
                            </Link>
                        )
                    }

                </div>

                {/* Burger Button for small screens */}
                <div className="lg:hidden flex items-center">
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

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden mt-3 bg-white shadow-md rounded-md p-4">
                    <ul className="space-y-4">
                        <li>
                            <Link to="/" className="block text-gray-600 hover:text-blue-600">Home</Link>
                        </li>
                        <li>
                            <Link to="/lesson" className="block text-gray-600 hover:text-blue-600">Start Learning</Link>
                        </li>
                        <li>
                            <Link to="/tutorials" className="block text-gray-600 hover:text-blue-600">Tutorials</Link>
                        </li>
                        <li>
                            <Link to="/about-us" className="block text-gray-600 hover:text-blue-600">About Us</Link>
                        </li>
                        {
                            user ? (
                                <>
                                    <li>
                                        <Link to="/my-profile" className="text-gray-600 hover:text-blue-600">
                                            My Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <button onClick={logOut} className="block text-gray-600 hover:text-blue-600">
                                            LogOut
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <Link to="/login" className="block text-gray-600 hover:text-blue-600">
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
