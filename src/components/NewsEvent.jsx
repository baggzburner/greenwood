import React from "react";
import img1 from "../assets/debate.jpg"
import img2 from "../assets/sports.jpg"
import img3 from "../assets/parent.jpg";

function NewsEvents() {
  const newsData = [
    {
      title: "Inter-School Debate Championship",
      date: "Sept 10, 2025",
      description:
        "Greenwood students will represent the school in the upcoming regional debate competition.",
      image: img1, // replace with your image path
    },
    {
      title: "Sports Day 2025",
      date: "Oct 3, 2025",
      description:
        "A full-day event with athletics, football, and basketball matches showcasing student talent.",
      image: img2,
    },
    {
      title: "Parent-Teacher Conference",
      date: "Nov 15, 2025",
      description:
        "An important meeting to discuss student progress and future academic strategies.",
      image: img3,
    },
  ];

  return (
    <section className="bg-white py-16 px-6" id="news-events">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          News & Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsEvents;
