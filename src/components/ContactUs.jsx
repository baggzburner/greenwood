import React from "react";

function ContactUs() {
  return (
    <section className="bg-gray-900 py-16 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-300 mb-4">
              Have any questions or need more information? Reach out to us
              through the details below or use the form.
            </p>
            <ul className="text-gray-300">
              <li className="mb-3">
                📍 Greenwood Secondary School, Nairobi, Kenya
              </li>
              <li className="mb-3">📞 +254 700 123 456</li>
              <li className="mb-3">📧 info@greenwoodschool.ac.ke</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
