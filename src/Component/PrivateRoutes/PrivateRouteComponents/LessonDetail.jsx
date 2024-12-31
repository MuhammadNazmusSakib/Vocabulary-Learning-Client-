import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logo from '../../../assets/image/main-logo.png'
import { RiUserVoiceFill } from 'react-icons/ri';
import axios from 'axios'
import { Contex } from '../../ContexApi/Contex';
import Swal from 'sweetalert2'
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const LessonDetail = () => {
  const { user } = useContext(Contex)
  const { difficulty } = useParams();
  const navigate = useNavigate();
  const [vocabularies, setVocabularies] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [allChecked, setAllChecked] = useState(false)
  const [completedWords, setCompletedWords] = useState(new Set()); // Track completed words
  const previousCompletedWords = useRef(new Set())
  const axiosSecure = useAxiosSecure()
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    // axios.get(`https://vocabulary-learning-server-taupe.vercel.app/allVocabulary/difficulty/${difficulty}`, {withCredentials: true})
    // .then(res => setVocabularies(res.data))

    axiosSecure.get(`allVocabulary/difficulty/${difficulty}`)
    .then(res => setVocabularies(res.data))
    . finally(() => {
      setLoading(false)
    })
  }, [difficulty])

  // Fetch completed words from the server based on user
  useEffect(() => {
    const fetchCompletedWords = async () => {
      try {
        // const response = await axios.get(`https://vocabulary-learning-server-taupe.vercel.app/completedWords/email/${user?.email}`, {withCredentials: true});
        const response = await axiosSecure.get(`completedWords/email/${user?.email}`)
        const storedWords = response.data.map((word) => word.wordId);
        setCompletedWords(new Set(storedWords));
        previousCompletedWords.current = new Set(storedWords); // Sync the previous state
      } catch (error) {
        console.error('Error fetching completed words:', error);
      }
    };

    fetchCompletedWords();
  }, []);

  // Send only newly added words to the backend when completedWords is updated
  useEffect(() => {
    // Find newly added words by comparing with previous state
    const newlyAddedWords = Array.from(completedWords).filter(wordId => !previousCompletedWords.current.has(wordId));

    if (newlyAddedWords.length > 0) {
      const sendCompletedWords = async () => {
        try {
          // Construct the payload for only newly added words
          const completedWordsData = newlyAddedWords.map((wordId) => ({
            wordId, // Word ID
            difficulty, // Difficulty level
            email: user?.email
          }));

          // Send newly added words to the backend
          // const response = await axios.post('https://vocabulary-learning-server-taupe.vercel.app/completedWords', completedWordsData);
          const response = await axiosSecure.post('completedWords', completedWordsData)
          // console.log("Server Response:", response.data);

          // Update the ref to the current state of completedWords
          previousCompletedWords.current = new Set(completedWords);

          if (response.data.insertedCount > 0) {
            Swal.fire({
              title: "Completed!",
              text: "Added to complete list!",
              icon: "success"
            });
          }
        } catch (error) {
          console.error("Error sending completed words:", error);
        }
      };

      sendCompletedWords();
    }
  }, [completedWords, difficulty]);

  // Toggle individual word completion------------------------

  const toggleWordCompletion = (id) => {
    setCompletedWords((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
        // Send DELETE request to the server
        axiosSecure
          // .delete(`https://vocabulary-learning-server-taupe.vercel.app/completedWords/${id}`)
          .delete(`completedWords/${id}`)
          .then((res) => {
            // console.log(res.data)
            if (res.data.deletedCount > 0) {
              // Clear all completed states
              previousCompletedWords.current = new Set(newSet)
              Swal.fire({
                icon: "error",
                title: "Removed!",
                text: "Removed from Completed List!",
              });
            }
          })
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }




  // Mark all as complete/incomplete---------------------------
  const toggleAllCheckbox = () => {
    setAllChecked((prev) => !prev);
    if (!allChecked) {
      // Mark all as complete
      const allIds = vocabularies.map((word) => word._id);
      setCompletedWords(new Set(allIds));
    } else {
      setCompletedWords(new Set());
      // Send DELETE requests for all words
      const allIds = vocabularies.map((word) => ({
        wordId: word._id,
        email: user?.email, // Ensure email is included for backend filtering
      }))
      // console.log(allIds)
      axiosSecure
        // .post(`https://vocabulary-learning-server-taupe.vercel.app/completedWords/deleteAll`, allIds)
        .post(`completedWords/deleteAll`, allIds)
        .then((res) => {
          // console.log(res.data)
          if (res.data.deletedCount > 0) {
            
            // Clear all completed states
            previousCompletedWords.current = new Set()
            Swal.fire({
              icon: "error",
              title: "Removed!",
              text: "Removed from Completed List!",
            });
          }
        })
        .catch((error) => console.error(`Error deleting word :`, error));

    }
  };
  // console.log(completedWords)


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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    )
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
        <input
          type="checkbox"
          checked={allChecked}
          onChange={toggleAllCheckbox}
          className="checkbox checkbox-primary" />
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
                <input
                  type="checkbox"
                  checked={completedWords.has(word._id)}
                  onChange={() => toggleWordCompletion(word._id)}
                  className="checkbox checkbox-primary" />
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
