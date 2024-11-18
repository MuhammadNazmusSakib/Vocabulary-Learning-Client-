import React from 'react';
import { useNavigate } from 'react-router-dom';

const LessonsPage = () => {
  const navigate = useNavigate();

  // List of 10 lessons
  const lessons = Array.from({ length: 10 }, (_, index) => ({
    lesson_no: index + 1,
    title: `Lesson ${index + 1}`,
  }));

  // Handle card click to navigate to the lesson detail page
  const handleCardClick = (lessonNo) => {
    navigate(`/lesson/${lessonNo}`);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-12">Let’s Learn</h1>

      {/* Lessons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
        {lessons.map((lesson) => (
          <div
            key={lesson.lesson_no}
            className="cursor-pointer bg-blue-100 hover:bg-blue-200 rounded-lg shadow-md p-6 flex items-center justify-center text-xl font-semibold"
            onClick={() => handleCardClick(lesson.lesson_no)}>
            {lesson.title}
          </div>
        ))}
      </div>

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
  );
};

export default LessonsPage;
