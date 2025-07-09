import { useState, useEffect } from 'react'
import weatherData from '../data/weather.json'

const Weather = () => {
  const [weather, setWeather] = useState([])
  const [selectedAirport, setSelectedAirport] = useState('')

  useEffect(() => {
    setWeather(weatherData)
    if (weatherData.length > 0) {
      setSelectedAirport(weatherData[0].airportCode)
    }
  }, [])

  const selectedWeather = weather.find(w => w.airportCode === selectedAirport) || weather[0]

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Airport Weather</h1>
      
      <div className="mb-6">
        <select
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          value={selectedAirport}
          onChange={(e) => setSelectedAirport(e.target.value)}
        >
          {weather.map(w => (
            <option key={w.airportCode} value={w.airportCode}>
              {w.airportName} ({w.airportCode})
            </option>
          ))}
        </select>
      </div>
      
      {selectedWeather && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {selectedWeather.airportName} ({selectedWeather.airportCode})
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedWeather.city}, {selectedWeather.country}
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-gray-800 dark:text-white">
                  {selectedWeather.temperature}°C
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedWeather.condition}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  {selectedWeather.humidity}%
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Wind Speed</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  {selectedWeather.windSpeed} km/h
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Visibility</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  {selectedWeather.visibility} km
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Pressure</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                  {selectedWeather.pressure} hPa
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Forecast
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {selectedWeather.forecast.map((day, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                    <p className="font-medium text-gray-800 dark:text-white">{day.day}</p>
                    <p className="text-gray-600 dark:text-gray-400">{day.high}° / {day.low}°</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{day.condition}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Weather
