import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">About Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to <span className="font-semibold text-blue-600">Lingo Bingo</span>, your go-to platform for mastering vocabulary in multiple languages! Our mission is to make language learning enjoyable, interactive, and accessible for everyone. Whether you’re a beginner or an advanced learner, we provide you with the tools and resources needed to expand your language skills efficiently.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          We understand that building a strong vocabulary is crucial for effective communication. That’s why we’ve designed our platform with engaging features that make it easier to remember words and phrases. With our intuitive learning system, users can explore vocabulary by topic, difficulty level, or lesson, making the journey to fluency both fun and structured.
        </p>
        <h3 className="text-4xl font-bold text-gray-800 mb-8">How It Works</h3>
        <p className="text-lg text-gray-700 mb-6">
          Getting started is simple:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-6">
          <li>Create an account or log in to access personalized learning features.</li>
          <li>Choose a language and start with basic lessons or specific topics of interest.</li>
          <li>Learn at your own pace using our interactive flashcards, quizzes, and practice exercises.</li>
          <li>Track your progress and improve your vocabulary daily with our curated lessons.</li>
        </ul>
        <p className="text-lg text-gray-700">
          Our goal is to empower you with the language skills you need to communicate confidently in any situation. Start your journey today, and see how fun language learning can be with <span className="font-semibold text-blue-600">Lingo Bingo</span>!
        </p>
      </div>
    </section>
  );
};

export default About;