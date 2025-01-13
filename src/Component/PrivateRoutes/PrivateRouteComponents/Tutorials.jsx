import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Contex } from '../../ContexApi/Contex';


const Tutorial = () => {
  const navigate = useNavigate();
  const {theme} = useContext(Contex)

  return (
    <div className={`${theme === 'dark' ? '' : ''} min-h-screen py-10 px-5`}>
      <div className='max-w-5xl mx-auto'>
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Welcome to the Tutorial Page!
      </h1>
      <p className="text-center mb-8">
        Here are some tutorials to help you master this German language.
      </p>

      {/* Videos Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Video 1 */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/TytGj8xiPyY?si=YfiDsyo6vaQyne4L"
            title="Tutorial Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 2 */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/1Syub-r9Z4s?si=Hhw4KZDv2DIOETRI"
            title="Tutorial Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 3 */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/EW1sFwv7mYw?si=gg3fFkVafUS_7bj5"
            title="Tutorial Video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 4 */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/pvdkkeR1mg8?si=MC0lr2FRgINa3Yyo"
            title="Tutorial Video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 5 */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/f7Wxd7IRfh4?si=T_ORO2_nrdhlDl1P"
            title="Tutorial Video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Video 6 */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/51rMzzVmy30?si=npMVC__3d8zGMa-V"
            title="Tutorial Video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 7 */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/l930KOnff8g?si=4uyplBCSN_hjO5OV"
            title="Tutorial Video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 8 */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/AHUeUxdynIs?si=nncpcBW68Obxawqj"
            title="Tutorial Video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
      </div>

      {/* Navigation Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate('/lesson')}
          className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-200"
        >
          Learn Vocabularies
        </button>
      </div>
      </div>
    </div>
  );
};

export default Tutorial;
