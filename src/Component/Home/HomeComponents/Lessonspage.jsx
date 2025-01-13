import React, { useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/image/main-logo.png'
import { Contex } from '../../ContexApi/Contex';

const LessonsPage = () => {
  const navigate = useNavigate();
  const { theme } = useContext(Contex)


  return (
    <section className={`${theme === 'dark' ? '' : ''}`}>
      <div className="container mx-auto py-10 px-4">
        {/* Page Title */}
        <div className="flex items-center text-4xl font-bold justify-center gap-3 mb-12">
          <h1>Let’s Learn with Lingo Bingo</h1>
          <img src={logo} className='w-14' />
        </div>

        {/* Lessons Section */}
        <section className={`${theme === 'dark' ? 'text-black' : ''} py-16 px-3 md:px-6`}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
              {/* Lesson 1 */}
              <Link to={`/lesson/easy`}>
                <div className="bg-white h-full shadow-xl border rounded-lg overflow-hidden">
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
              </Link>
              {/* Lesson 2 */}
              <Link to={`/lesson/medium`}>
                <div className="bg-white shadow-xl border rounded-lg overflow-hidden">
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
              </Link>
              {/* Lesson 3 */}
              <Link to={`/lesson/difficult`}>
                <div className="bg-white shadow-xl border rounded-lg overflow-hidden">
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
              </Link>
              {/* Lesson 4 */}
              <div className="bg-white shadow-xl border rounded-lg overflow-hidden">
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


        {/* Tutorial Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Learn the Alphabet</h2>
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/TytGj8xiPyY?si=YfiDsyo6vaQyne4L"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full md:w-3/4 lg:w-1/2"
            ></iframe>
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg"
            onClick={() => navigate('/tutorials')}>
            View More Tutorials
          </button>
        </div>
      </div>
    </section>
  );
};

export default LessonsPage;
