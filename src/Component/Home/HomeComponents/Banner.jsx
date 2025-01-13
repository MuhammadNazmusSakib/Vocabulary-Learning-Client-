import React, { useContext } from "react";
import { Contex } from "../../ContexApi/Contex";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const {user} = useContext(Contex)
  const navigate = useNavigate()

  const GoToLearning = () => {
    if (!user) {
     navigate('/login')
     return
    }
    else {
      navigate('/lesson')
    }
  }

  
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-500 text-white font-sans">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between p-8 ">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          New language, new opportunities, new you
        </h1>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
          Get access to compact lessons from the experts and connect with a
          community of native speakers to help you master words faster.
        </p>
        <button onClick={() => GoToLearning()} className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-300 transition duration-300">
          Learn for free
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="https://i.ibb.co.com/zFQG9Mj/busuu-header-hello.png"
          alt="Language learning illustration"
          className="max-w-full w-[80%] sm:w-[60%] lg:w-full rounded-lg"
        />
      </div>
      </div>
    </div>
  );
};

export default Banner;
