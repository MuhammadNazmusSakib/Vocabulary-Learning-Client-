import React from 'react';

const vocabularies = [
  {
    id: "1",
    word: "Hallo",
    pronunciation: "hah-loh",
    meaning: "Hello",
    example: "Hallo! Wie geht es dir?"
  },
  {
    id: "2",
    word: "Danke",
    pronunciation: "dahn-kuh",
    meaning: "Thank you",
    example: "Danke für die Hilfe!"
  },
  {
    id: "3",
    word: "Haus",
    pronunciation: "house",
    meaning: "House",
    example: "Das Haus ist groß."
  }
];

const VocabularyCard = () => {
  const handlePronounce = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "de-DE"; // Set language to German
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Speak Up Your Vocabularies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {vocabularies.map((vocab) => (
          <div
            key={vocab.id}
            onClick={() => handlePronounce(vocab.word)}
            className="p-6 border rounded-lg shadow-lg cursor-pointer hover:bg-blue-100 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{vocab.word}</h2>
            <p className="text-gray-600 italic">Pronunciation: {vocab.pronunciation}</p>
            <p className="text-gray-600">Meaning: {vocab.meaning}</p>
            <p className="text-gray-600 mt-2">Example: {vocab.example}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabularyCard;
