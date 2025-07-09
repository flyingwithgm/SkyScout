const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner py-4">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} SkyScout - Flight & Airport Tracker</p>
        <p className="text-sm mt-1">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer
