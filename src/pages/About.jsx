const About = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">About SkyScout</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          SkyScout is designed to provide travelers, aviation enthusiasts, and professionals with 
          comprehensive flight tracking, airport information, and weather data all in one place.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Our goal is to make air travel information accessible and easy to understand for everyone.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Features</h2>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
          <li>Real-time flight tracking (coming soon)</li>
          <li>Comprehensive airport information</li>
          <li>Detailed weather conditions for airports</li>
          <li>User-friendly interface</li>
          <li>Dark mode for comfortable night-time use</li>
        </ul>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Future Plans</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          We're constantly working to improve SkyScout. Here's what we have planned:
        </p>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
          <li>Integration with live flight data APIs</li>
          <li>Real-time weather updates</li>
          <li>Flight delay predictions</li>
          <li>Mobile app development</li>
          <li>User accounts for saving favorite flights and airports</li>
        </ul>
      </div>
    </div>
  )
}

export default About
