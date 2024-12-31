import React, { useContext, useEffect, useState } from 'react';
import { Contex } from '../../ContexApi/Contex';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Dashboard = () => {
  const axiosSecure = useAxiosSecure()
  const { user, theme } = useContext(Contex);
  const [countEasy, setCountEasy] = useState([])
  const [countMedium, setCountMedium] = useState([])
  const [countDifficult, setCountDifficult] = useState([])
  const [completedEasy, setCompletedEasy] = useState([])
  const [completedMedium, setCompletedMedium] = useState([])
  const [completedDifficult, setCompletedDifficult] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingAll, setLoadingAll] = useState(true)



  useEffect(() => {
    axiosSecure.get(`allVocabulary`)
      .then(res => {
        setCountEasy(res.data.filter(item => item.difficulty === 'easy').length)
        setCountMedium(res.data.filter(item => item.difficulty === 'medium').length)
        setCountDifficult(res.data.filter(item => item.difficulty === 'difficult').length)
      })
      .finally(() =>  {
        setLoadingAll(false)
      })
  }, [])

  useEffect(() => {
    axiosSecure.get(`completedWords/email/${user?.email}`)
      .then(res => {
        setCompletedEasy(res.data.filter(item => item.difficulty === 'easy').length)
        setCompletedMedium(res.data.filter(item => item.difficulty === 'medium').length)
        setCompletedDifficult(res.data.filter(item => item.difficulty === 'difficult').length)
      })
      .finally(() =>  {
      setLoading(false)
    })
    // console.log('easy: ', completedEasy)
    // console.log('medium: ', completedMedium)
    // console.log('difficult', completedDifficult)

  }, [completedEasy, completedMedium, completedDifficult])

  if (loading || loadingAll) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    )
  }

  const achievements = [
    {
      // icon: "🔥", //  emoji 
      icon: "https://i.ibb.co.com/t3pGkGs/a1a2.jpg",
      title: "Easy",
      level: "Level 1",
      description: `Learn ${countEasy} new words `,
      progress: completedEasy,
      goal: countEasy,
    },
    {
      // icon: "🧙‍♂️", // emoji
      icon: "https://i.ibb.co.com/74Z4scG/B1B2.webp",
      title: "Medium",
      level: "Level 2",
      description: `Learn ${countMedium} new words `,
      progress: completedMedium,
      goal: countMedium,
    },
    {
      // icon: "📜", // emoji
      icon: "https://i.ibb.co.com/Nmjj84j/C1C2.jpg",
      title: "Difficult",
      level: "Level 3",
      description: `Learn ${countDifficult} new words `,
      progress: completedDifficult,
      goal: countDifficult,
    },
  ];


  const ProgressBar = ({ progress, goal }) => {
    const progressPercentage = (progress / goal) * 100;

    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-yellow-500 h-2.5 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    );
  };


  return (
    <div className={`${theme === 'dark' ? '' : ''} min-h-screen pl-3`}>

      {/* Profile Information Card */}
      <div className="p-6 border-b-2">
        {/* Profile Image */}
        <div className="flex flex-col">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-full h-fit rounded-lg sm:w-96 sm:h-56 object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="mt-6">
          <p className=" text-lg">
            <strong> {user?.displayName || 'Not provided'}</strong>
          </p>
          <p className="text-lg mt-2">
            <strong></strong> {user?.email || 'Not provided'}
          </p>
          <p className="text-lg mt-2">
            <strong></strong>Joined {new Date(user?.metadata.creationTime).toLocaleString('en-US', {
              month: 'short',
              year: 'numeric'
            })}
          </p>
        </div>
      </div>
      {/* progress -----Working------------------------*/}

      <div className="p-2 md:p-4 shadow-md rounded-lg max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Achievements</h2>
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mb-4 p-2 md:4 border rounded-lg"
          >
            {/* <div className="text-4xl mr-4">{achievement.icon}</div> */}
            <div>
              <img src={achievement.icon} className='w-20 h-20 object-cover rounded' />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold">{achievement.title}</h3>
              <div className='flex items-center place-content-between mb-1'>
                <p className="text-sm text-gray-500">{achievement.level}</p>
                <div className=" text-sm text-gray-500">
                  {achievement.progress}/{achievement.goal}
                </div>
              </div>

              <ProgressBar progress={achievement.progress} goal={achievement.goal} />
              <p className="text-sm text-gray-500 mt-1">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Dashboard;
