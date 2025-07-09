import { useState, useEffect } from 'react'
import AirportCard from '../components/AirportCard'
import airportsData from '../data/airports.json'

const Airports = () => {
  const [airports, setAirports] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    setAirports(airportsData)
  }, [])

  const filteredAirports = airports.filter(airport => {
    const matchesSearch = airport.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         airport.code.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         airport.city.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filter === 'all' || airport.type === filter
    
    return matchesSearch && matchesFilter
  })

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Airport Directory</h1>
      
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Search airports..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <select
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="International">International</option>
            <option value="Domestic">Domestic</option>
            <option value="Regional">Regional</option>
          </select>
        </div>
      </div>
      
      {filteredAirports.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">No airports found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAirports.map(airport => (
            <AirportCard key={airport.code} airport={airport} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Airports
