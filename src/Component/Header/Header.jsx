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
                    <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
                    <Link to="/lesson" className="text-gray-600 hover:text-blue-600">Start Learning</Link>
                    <Link to="/tutorials" className="text-gray-600 hover:text-blue-600">Tutorials</Link>
                    <Link to="/about-us" className="text-gray-600 hover:text-blue-600">About Us</Link>
                </nav>

                {/* Navbar End: Login Button */}
                <div className="hidden lg:flex">
                    {
                        user ? (
                            <>
                                <Link to="/my-profile" className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-3">
                                    <img src="" alt="" />
                                    <p>My profile</p>
                                </Link>
                                <button onClick={logOut} className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
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
