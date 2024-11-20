import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {

    useEffect(() => {
        AOS.init({
          duration: 2000, // Animation duration in milliseconds
          once: false,     // Whether animation should happen only once
        });
      }, []);

    return (
        <section className="bg-blue-600 py-16 px-6">
            <div data-aos="zoom-in" className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div data-aos="fade-left" className="bg-white shadow-lg p-6 rounded-lg">
                        <p className="text-gray-600">
                            "We have fun, they are learning, and in turn their writing is enhanced with the new vocabulary they have been practicing. Everyone benefits from this well-rounded digital learning program."
                        </p>
                        <div className='text-left mt-5'>
                            <p className='text-lg text-blue-400 font-semibold italic'>Elementary school language arts teacher</p>
                            <p className="text-lg font-semibold italic">Coeur d'Alene, ID
                            </p>
                        </div>
                    </div>
                    {/* Testimonial 2 */}
                    <div data-aos="zoom-in" className="bg-white shadow-lg p-6 rounded-lg">
                        <p className="text-gray-600">
                            "Lingo Bingo works through synonyms, antonyms, and sentence usage. It makes students learn the word for life, not just regurgitate it for a test and then purge it from their memory."
                        </p>
                        <div className='text-left mt-5'>
                            <p className='text-lg text-blue-400 font-semibold italic'>Elementary school language arts teacher</p>
                            <p className="text-lg font-semibold italic">Tucson, AZ</p>
                        </div>
                    </div>
                    {/* Testimonial 3 */}
                    <div data-aos="fade-right" className="bg-white shadow-lg p-6 rounded-lg">
                        <p className="text-gray-600">
                            "Students don't just memorize definitions. They are reading relevant literature and informational text and deciphering the different nuances of a word's meaning to truly understand words at a deeper level."
                        </p>
                        <div className='text-left mt-5'>
                            <p className='text-lg text-blue-400 font-semibold italic'>High school English teacher</p>
                            <p className="text-lg font-semibold italic">Tuckahoe, NY</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Testimonials