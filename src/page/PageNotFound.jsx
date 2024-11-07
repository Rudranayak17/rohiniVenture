import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
      <button 
        onClick={goHome}
        className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-lg transition-colors duration-200"
      >
        Go Home
      </button>
    </div>
  )
}

export default PageNotFound
