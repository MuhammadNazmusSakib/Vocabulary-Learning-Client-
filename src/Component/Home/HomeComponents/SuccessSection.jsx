import React, { useContext, useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Contex } from '../../ContexApi/Contex';

const SuccessSection = () => {

    const {theme} = useContext(Contex)

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true,     // Whether animation should happen only once
        });
      }, []);

    return (
        <section className={`${theme === 'dark' ? '' : 'bg-blue-100 '}py-16 px-6 md:px-12 lg:px-24`}>
            <div data-aos="zoom-in" className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Our Achievements</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* User Count */}
                    <div className="flex flex-col items-center border border-slate-300 rounded-xl p-5 bg-white shadow-lg">
                        <CountUp end={2500} duration={3} delay={0} suffix="+" className="text-5xl font-bold text-blue-600" />
                        <p className="text-lg text-gray-700 mt-2">Happy Users</p>
                    </div>
                    {/* Lesson Count */}
                    <div className="flex flex-col items-center border border-slate-300 rounded-xl p-5 bg-white shadow-lg">
                        <CountUp end={150} duration={3} delay={0} suffix="+" className="text-5xl font-bold text-green-600" />
                        <p className="text-lg text-gray-700 mt-2">Lessons</p>
                    </div>
                    {/* Vocabulary Count */}
                    <div className="flex flex-col items-center border border-slate-300 rounded-xl p-5 bg-white shadow-lg">
                        <CountUp end={1500} duration={3} delay={0} suffix="+" className="text-5xl font-bold text-purple-600" />
                        <p className="text-lg text-gray-700 mt-2">Vocabulary Words</p>
                    </div>
                    {/* Tutorial Count */}
                    <div className="flex flex-col items-center border border-slate-300 rounded-xl p-5 bg-white shadow-lg">
                        <CountUp end={75} duration={3} delay={0} suffix="+" className="text-5xl font-bold text-red-600" />
                        <p className="text-lg text-gray-700 mt-2">Tutorials</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessSection;
