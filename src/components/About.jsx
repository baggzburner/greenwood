import React from "react";
import aboutImg from "../assets/about.jpeg"; // Add your about image here

function About() {
  return (
    <section className="bg-gray-100 py-30 px-4 md:px-20 text-center" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image Section */}
        <div>
          <img
            src={aboutImg}
            alt="About Greenwood Secondary School"
            className="rounded-2xl shadow-lg" width={500} height={450}
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            About Greenwood Secondary School
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Greenwood Secondary School, we nurture excellence in academics, 
            sports, and character development. Our dedicated teachers and 
            modern facilities provide students with a supportive and inspiring 
            environment to achieve their full potential.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Founded with the vision of empowering the next generation of leaders, 
            Greenwood Secondary School remains committed to discipline, integrity, 
            and innovation in education.
          </p>

          <a
            href="#more"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
