import React from 'react'

const FeaturedLessons = () => {
    return (
        <section className="bg-blue-100 py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Featured Lessons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Lesson 1 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://i.ibb.co.com/t3pGkGs/a1a2.jpg"
                            alt="Lesson 1"
                            className="w-full h-fit object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">A1, A2 || Basic User</h3>
                            <p className="text-gray-600 mt-4">
                                Start with the basics and build a strong foundation in German vocabulary.
                            </p>
                        </div>
                    </div>
                    {/* Lesson 2 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://i.ibb.co.com/74Z4scG/B1B2.webp"
                            alt="Lesson 2"
                            className="w-full h-fit object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">B1, B2 || Independent User</h3>
                            <p className="text-gray-600 mt-4">
                                Learn useful phrases for everyday conversations in German.
                            </p>
                        </div>
                    </div>
                    {/* Lesson 3 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://i.ibb.co.com/Nmjj84j/C1C2.jpg"
                            alt="Lesson 3"
                            className="w-full h-fit object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">C1, C2 || Proficient User</h3>
                            <p className="text-gray-600 mt-4">
                                Master complex grammar rules to become fluent in German.
                            </p>
                        </div>
                    </div>
                    {/* Lesson 4 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://i.ibb.co.com/SV9MQXq/TEACHER.jpg"
                            alt="Lesson 3"
                            className="w-full h-fit object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold">For Teachers</h3>
                            <p className="text-gray-600 mt-4">
                                Master complex grammar rules to become fluent in German.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default FeaturedLessons