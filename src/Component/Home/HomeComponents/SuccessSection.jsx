import React from 'react';
import CountUp from 'react-countup';

const SuccessSection = () => {
    return (
        <section className="bg-blue-100 py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Achievements</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* User Count */}
                    <div className="flex flex-col items-center border border-slate-300 rounded-xl p-5 bg-white shadow-lg">
                        <CountUp end={2500} duration={3} delay={0} className="text-5xl font-bold text-blue-600" />
                        <p className="text-lg text-gray-700 mt-2">Happy Users</p>
                    </div>
                    {/* Lesson Count */}
                    <div className="flex flex-col items-center border border-slate-300 rounded-xl p-5 bg-white shadow-lg">
                        <CountUp end={150} duration={3} delay={0} className="text-5xl font-bold text-green-600" />
                        <p className="text-lg text-gray-700 mt-2">Lessons</p>
                    </div>
                    {/* Vocabulary Count */}
                    <div className="flex flex-col items-center border border-slate-300 rounded-xl p-5 bg-white shadow-lg">
                        <CountUp end={2000} duration={3} delay={0} className="text-5xl font-bold text-purple-600" />
                        <p className="text-lg text-gray-700 mt-2">Vocabulary Words</p>
                    </div>
                    {/* Tutorial Count */}
                    <div className="flex flex-col items-center border border-slate-300 rounded-xl p-5 bg-white shadow-lg">
                        <CountUp end={75} duration={3} delay={0} className="text-5xl font-bold text-red-600" />
                        <p className="text-lg text-gray-700 mt-2">Tutorials</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessSection;
