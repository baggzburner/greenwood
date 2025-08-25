import React from 'react'
import { motion } from 'framer-motion'

function Values() {
  return (
    <section className="bg-gray-100 p-10 text-center my-12 rounded-2xl shadow-md">
      <h2 className="text-4xl font-bold text-green-800 mb-12">Our Core Values</h2>

      <div className="container md:flex justify-between items-start gap-10">
        {/* Motto - from left */}
        <motion.div
          className="md:w-1/3 bg-white shadow-lg p-6 rounded-xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Motto</h3>
          <p className="text-lg text-gray-600 italic">
            “Nurturing Excellence, Inspiring Greatness”
          </p>
        </motion.div>

        {/* Vision - from top */}
        <motion.div
          className="md:w-1/3 bg-white shadow-lg p-6 rounded-xl"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Vision</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            To be a leading institution of learning that molds responsible global
            citizens, equipped with knowledge, skills, and values for lifelong
            success.
          </p>
        </motion.div>

        {/* Mission - from right */}
        <motion.div
          className="md:w-1/3 bg-white shadow-lg p-6 rounded-xl"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            To provide holistic education that fosters intellectual curiosity,
            moral integrity, creativity, and resilience, empowering learners to
            achieve academic excellence and contribute positively to society.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Values
