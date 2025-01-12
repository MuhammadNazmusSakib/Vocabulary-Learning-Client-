import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-blue-900 to-purple-800 text-gray-200 py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                        <p>Email: contact@lingo_bingo.com</p>
                        <p>Phone: +123 000 7890</p>
                        <p>Address: 123 Main St, Anytown, USA</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 hover:text-blue-600"
                            >
                                <FaFacebookF className="h-6 w-6" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 hover:text-blue-600"
                            >
                                <FaTwitter className="h-6 w-6" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 hover:text-blue-600"
                            >
                                <FaInstagram className="h-6 w-6" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 hover:text-blue-600"
                            >
                                <FaLinkedinIn className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Copyright Information */}
                    <div className="flex flex-col items-start">
                        <h2 className="text-xl font-bold mb-4">About Us</h2>
                        <p>
                        Lingo Bingo is a fun and interactive language learning platform designed to help you expand your vocabulary and improve communication.
                        </p>
                    </div>
                </div>
                <p className="mt-10 text-gray-400 text-center">
                    © 2024 Lingo Bingo. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
