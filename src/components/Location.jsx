import React from "react";

function Location() {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Location</h2>
        <p className="mb-8 text-lg">
          Greenwood Secondary School is conveniently located in a serene
          environment, easily accessible by road and close to the community.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Greenwood Secondary School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.824039745828!2d36.82194631538063!3d-1.292065999050907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d25d6b1cbd%3A0x4b2f4b8d3b90c1f!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1616147594743!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;
