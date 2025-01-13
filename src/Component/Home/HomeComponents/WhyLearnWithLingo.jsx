import React from "react";

const WhyLearnWithLingo = () => {
  return (
    <div className="p-8 gap-8 bg-purple-100">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-7">
      {/* Left Section - Image */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src="https://i.ibb.co.com/RhqCZS9/Learning-languages-bro.png"
          alt="Language learning illustration"
          className="max-w-full rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>

      {/* Right Section - Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left text-gray-800">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Why learn a language with Lingo Bingo?
        </h2>
        <p className="text-sm uppercase font-semibold text-gray-500 mb-2">
          An interactive community
        </p>
        <h3 className="text-xl lg:text-2xl font-semibold mb-4">
          Learn more together
        </h3>
        <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
          Go beyond the textbook. Practice pronunciation, gain cultural
          insights, and exchange local language tips with our global community
          of learners.
        </p>
        {/* <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-300">
          Start Learning
        </button> */}
      </div>
    </div>
    </div>
  );
};

export default WhyLearnWithLingo;
