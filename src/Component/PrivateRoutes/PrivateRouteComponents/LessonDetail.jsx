import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logo from '../../../assets/image/main-logo.png'
// import { IoLogoTwitter } from 'react-icons/io';
import { RiUserVoiceFill } from 'react-icons/ri';
import { toast } from 'react-toastify';

const LessonDetail = () => {
  const { difficulty } = useParams();
  const navigate = useNavigate();
  const [vocabularies, setVocabularies] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [allChecked, setAllChecked] = useState(false)


  useEffect(() => {
    fetch(`http://localhost:5000/allVocabulary/difficulty/${difficulty}`)
      .then(res => res.json())
      .then(data => setVocabularies(data))
  }, [difficulty])

  // Function to toggle checkbox state
  const toggleCheckbox = () => {
    setAllChecked(!allChecked);
  }

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

  // Pronounce the word when clicked
  const handlePronounce = (word) => {
    const utterance = new SpeechSynthesisUtterance(word)
    utterance.lang = "de-DE"; // Set language to German
    speechSynthesis.speak(utterance)
  }

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Page Title */}
      <div className="flex items-center text-4xl font-bold justify-center gap-3 mb-12">
        <h1>Lesson {difficulty}</h1>
        <img src={logo} className='w-14' />
      </div>
      {/* mark as complete */}
      <div className="flex items-center justify-end gap-3 mb-8">
        <span className="text-xl font-bold">Mark as Complete</span>
        <input type="checkbox" onChange={toggleCheckbox} className="checkbox checkbox-primary" />
      </div>
      {/* Vocabulary Cards */}
      {vocabularies.length > 0 ? (
        <div className="text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {vocabularies.map((word) => (
            <div
              key={word._id}
              className={`cursor-pointer ${getDifficultyColor(
                word.difficulty
              )} rounded-lg shadow-md p-6`}
            >
              <div className='flex items-center place-content-between'>
                <h2 className="text-2xl font-bold">{word.word}</h2>
                <RiUserVoiceFill onClick={() => handlePronounce(word.word)} className='text-red-500 text-2xl' />
              </div>
              <p className="italic">Pronunciation: {word.pronunciation}</p>
              <p>Meaning: {word.meaning}</p>
              <p>Part of Speech: {word.part_of_speech}</p>
              <p>Difficulty: {word.difficulty}</p>

              {/* When to say button */}
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                onClick={() => openModal(word)}
              >
                When to Say
              </button>
              <div className="flex items-center justify-end gap-3 mt-4">
                <span className="font-semibold">Mark as Complete</span>
                <input type="checkbox" checked={allChecked} className="checkbox checkbox-primary" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No data available for this lesson.</p>
      )}

      {/* Modal for "When to Say" */}
      {selectedWord && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg w-11/12 max-w-lg">
            <h2 className="text-3xl font-bold mb-4">{selectedWord.word}</h2>
            <p className="italic"><strong>Pronunciation: </strong>{selectedWord.pronunciation}</p>
            <p>
              <strong>Meaning:</strong> {selectedWord.meaning}
            </p>
            <p>
              <strong>When to say:</strong> {selectedWord.when_to_say}
            </p>
            <p className='flex'>
              <strong>Example:</strong> {selectedWord.example}
              <RiUserVoiceFill onClick={() => handlePronounce(selectedWord.example)} className='text-red-500 text-3xl' />
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
