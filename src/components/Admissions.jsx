import React from 'react'

function Admissions() {
  return (
    <section className='py-10 px-6 bg-gray-900 text-center'>
      {/* Title */}
      <h1 className='text-4xl font-extrabold mb-6 text-gray-200'>Admissions</h1>

      <div className='max-w-4xl mx-auto text-left space-y-6'>
        {/* Requirements */}
        <div>
          <h2 className='text-2xl font-semibold mb-2 text-gray-100'>Requirements</h2>
          <p className='text-lg text-gray-300 mb-1'>
            To apply for admission to Greenwood Secondary School, applicants must submit the following:
          </p>
          <ul className='list-disc list-inside text-lg text-gray-300'>
            <li>Completed application form</li>
            <li>Certified copy of birth certificate</li>
            <li>Previous school academic reports</li>
            <li>Passport size photographs</li>
          </ul>
        </div>

        {/* Process */}
        <div>
          <h2 className='text-2xl font-semibold mb-2 text-gray-100'>Admission Process</h2>
          <p className='text-lg text-gray-300 mb-1'>
            The admission process is simple and transparent. Follow these steps:
          </p>
          <ol className='list-decimal list-inside text-lg text-gray-300'>
            <li>Submit the completed application form</li>
            <li>Attend the school interview</li>
            <li>Receive admission confirmation letter</li>
            <li>Pay the school fees to secure enrollment</li>
          </ol>
        </div>

        {/* Fees */}
        <div>
          <h2 className='text-2xl font-semibold mb-2 text-gray-100'>Fees Structure</h2>
          <p className='text-lg text-gray-300'>
            Tuition Fee: KES 50,000/year <br />
            Registration Fee: KES 5,000 <br />
            Uniform & Books: KES 10,000
          </p>
        </div>
      </div>
    </section>
  )
}

export default Admissions
