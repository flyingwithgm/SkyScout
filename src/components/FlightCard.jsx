const FlightCard = ({ flight }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {flight.flightNumber}
          </h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            flight.status === 'On Time' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              : flight.status === 'Delayed'
              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}>
            {flight.status}
          </span>
        </div>
        
        <div className="flex justify-between items-center my-4">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">From</p>
            <p className="font-bold text-gray-800 dark:text-white">{flight.departure.airport}</p>
            <p className="text-gray-600 dark:text-gray-300">{flight.departure.time}</p>
          </div>
          
          <div className="w-1/3 relative">
            <div className="h-px bg-gray-300 dark:bg-gray-600 w-full absolute top-1/2"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-1">
              <svg className="w-6 h-6 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
              </svg>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">To</p>
            <p className="font-bold text-gray-800 dark:text-white">{flight.arrival.airport}</p>
            <p className="text-gray-600 dark:text-gray-300">{flight.arrival.time}</p>
          </div>
        </div>
        
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>Airline: {flight.airline}</span>
          <span>Duration: {flight.duration}</span>
        </div>
      </div>
    </div>
  )
}

export default FlightCard
