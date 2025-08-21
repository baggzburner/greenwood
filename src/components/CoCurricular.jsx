import React from "react";
import { FaFootballBall, FaBookOpen, FaMusic, FaUsers } from "react-icons/fa";

function CoCurricular() {
  const activities = [
    {
      icon: <FaFootballBall className="text-4xl text-green-500 mb-3" />,
      title: "Sports",
      description: "Football, basketball, athletics and more to nurture talent and teamwork.",
    },
    {
      icon: <FaBookOpen className="text-4xl text-blue-500 mb-3" />,
      title: "Clubs & Societies",
      description: "Debate, drama, science and other clubs to build leadership and creativity.",
    },
    {
      icon: <FaMusic className="text-4xl text-pink-500 mb-3" />,
      title: "Music & Arts",
      description: "Choir, band, drama, and cultural activities to grow artistic expression.",
    },
    {
      icon: <FaUsers className="text-4xl text-yellow-500 mb-3" />,
      title: "Community Service",
      description: "Engaging students in projects that foster responsibility and compassion.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6" id="co-curricular">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Co-Curricular Activities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition text-center"
            >
              <div className="flex justify-center">{activity.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-600 text-sm">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoCurricular;
