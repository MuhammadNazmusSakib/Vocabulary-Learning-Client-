import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const LessonDetail = () => {
  const { lesson_no } = useParams();
  const navigate = useNavigate();
  const [vocabularies, setVocabularies] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);

  // Fetch data from JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/updated_german_words_data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setVocabularies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter vocabularies based on lesson_no
  const filteredVocabularies = vocabularies.filter(
    (item) => item.lesson_no === parseInt(lesson_no)
  );

  // Handle modal open/close
  const openModal = (word) => setSelectedWord(word);
  const closeModal = () => setSelectedWord(null);

  // Get background color based on difficulty
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-200';
      case 'medium':
        return 'bg-yellow-200';
      case 'difficult':
        return 'bg-red-200';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Lesson {lesson_no}
      </h1>

      {/* Vocabulary Cards */}
      {filteredVocabularies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {filteredVocabularies.map((word) => (
            <div
              key={word.id}
              className={`cursor-pointer ${getDifficultyColor(
                word.difficulty
              )} rounded-lg shadow-md p-6`}
            >
              <h2 className="text-2xl font-bold">{word.word}</h2>
              <p className="italic">Pronunciation: {word.pronunciation}</p>
              <p>Meaning: {word.meaning}</p>
              <p>Part of Speech: {word.part_of_speech}</p>

              {/* When to say button */}
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                onClick={() => openModal(word)}
              >
                When to Say
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No data available for this lesson.</p>
      )}

      {/* Modal for "When to Say" */}
      {selectedWord && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-lg">
            <h2 className="text-3xl font-bold mb-4">{selectedWord.word}</h2>
            <p>
              <strong>Meaning:</strong> {selectedWord.meaning}
            </p>
            <p>
              <strong>When to say:</strong> {selectedWord.when_to_say}
            </p>
            <p>
              <strong>Example:</strong> {selectedWord.example}
            </p>
            <button
              className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Back to Lessons Button */}
      <div className="flex justify-center mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg"
          onClick={() => navigate('/lesson')}
        >
          Back to Lessons
        </button>
      </div>
    </div>
  );
};

export default LessonDetail;
