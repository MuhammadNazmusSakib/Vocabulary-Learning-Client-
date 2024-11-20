import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hom = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-center py-10 bg-blue-500 text-white">
        <h1 data-aos="fade-up" className="text-4xl font-bold">
          Welcome to the Home Page
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="mt-4">
          Explore the amazing animations powered by AOS!
        </p>
      </header>
      
      <main className="container mx-auto py-10 px-4">
        <div data-aos="fade-right" className="p-6 mb-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">Feature 1</h2>
          <p className="mt-2">This is the description for the first feature.</p>
        </div>
        
        <div data-aos="fade-left" className="p-6 mb-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">Feature 2</h2>
          <p className="mt-2">This is the description for the second feature.</p>
        </div>
        
        <div data-aos="zoom-in" className="p-6 mb-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">Feature 3</h2>
          <p className="mt-2">This is the description for the third feature.</p>
        </div>
      </main>
    </div>
  );
};

export default Hom;
