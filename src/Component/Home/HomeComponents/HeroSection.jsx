import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div>
        <div className="pt-20 pb-10 bg-purple-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Let's Learn a Language with fun</h1>
          <p className="text-lg font-medium mb-8">
            Explore diverse voices and celebrate creativity through lessons, tutorials, and friends.
          </p>
          <Link to="/discover-programs">
            <button className="px-6 py-3 text-white bg-gradient-to-tr from-blue-600 to-purple-500 font-semibold rounded-md hover:bg-purple-600 transition">
              Start Learning
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection