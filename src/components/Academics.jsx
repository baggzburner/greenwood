import React from 'react'
import academicsData from "../data/academicsData"

function Academics() {
  return (
    <section className='text-center py-10 bg-gray-100' id="academics">
      {/* Title */}
      <h1 className='text-3xl font-bold mb-8 text-gray-500'>ACADEMICS</h1>

      {/* Container for cards */}
      <div className='flex flex-wrap justify-center gap-8'>
        {academicsData.map((data, index) => (
          <div 
            key={index} 
            className='p-12 rounded-lg bg-gray-600 text-white font-bold w-64 md:w-72 lg:w-80'
          >
            <h2 className='text-3xl mb-2'>Year: {data.year}</h2>
            <p className='text-lg mb-2'>Performance: {data.performance}</p>
            <h3 className='text-xl'>Number: {data.number}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Academics
