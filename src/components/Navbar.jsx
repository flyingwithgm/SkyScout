import { Link } from 'react-router-dom'
import { FiHome, FiMapPin, FiCloud, FiInfo, FiSun, FiMoon } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">SkyScout</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <FiHome />
              <span>Home</span>
            </Link>
            <Link to="/flights" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <FiMapPin />
              <span>Flights</span>
            </Link>
            <Link to="/airports" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <FiMapPin />
              <span>Airports</span>
            </Link>
            <Link to="/weather" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <FiCloud />
              <span>Weather</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <FiInfo />
              <span>About</span>
            </Link>
          </div>
          
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
