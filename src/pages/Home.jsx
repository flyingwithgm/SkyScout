import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiArrowRight } from 'react-icons/fi'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to <span className="text-blue-600 dark:text-blue-400">SkyScout</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Track flights, explore airports, and check weather conditions all in one place.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Flight Search</h2>
        <div className="flex">
          <input
            type="text"
            placeholder="Search by flight number or route..."
            className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg flex items-center">
            <FiSearch className="mr-2" />
            Search
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/flights" className="bg-blue-100 dark:bg-blue-900 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Track Flights</h3>
            <FiArrowRight className="text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-sm text-blue-600 dark:text-blue-300 mt-2">View all active flights</p>
        </Link>
        
        <Link to="/airports" className="bg-green-100 dark:bg-green-900 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">Explore Airports</h3>
            <FiArrowRight className="text-green-600 dark:text-green-400" />
          </div>
          <p className="text-sm text-green-600 dark:text-green-300 mt-2">Find airport information</p>
        </Link>
        
        <Link to="/weather" className="bg-purple-100 dark:bg-purple-900 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">Check Weather</h3>
            <FiArrowRight className="text-purple-600 dark:text-purple-400" />
          </div>
          <p className="text-sm text-purple-600 dark:text-purple-300 mt-2">View airport weather conditions</p>
        </Link>
      </div>
    </div>
  )
}

export default Home
