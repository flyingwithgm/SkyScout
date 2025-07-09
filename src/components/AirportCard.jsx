const AirportCard = ({ airport }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {airport.name} ({airport.code})
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{airport.city}, {airport.country}</p>
          </div>
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
            {airport.type}
          </span>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-gray-500 dark:text-gray-400">Terminals</p>
            <p className="text-gray-800 dark:text-white font-medium">{airport.terminals}</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400">Runways</p>
            <p className="text-gray-800 dark:text-white font-medium">{airport.runways}</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400">Elevation</p>
            <p className="text-gray-800 dark:text-white font-medium">{airport.elevation}</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400">Timezone</p>
            <p className="text-gray-800 dark:text-white font-medium">{airport.timezone}</p>
          </div>
        </div>
        
        <div className="mt-3">
          <a 
            href={`https://www.google.com/maps?q=${airport.latitude},${airport.longitude}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            View on Map
          </a>
        </div>
      </div>
    </div>
  )
}

export default AirportCard
