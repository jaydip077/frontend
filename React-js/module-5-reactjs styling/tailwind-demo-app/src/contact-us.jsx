import React from "react";

export default function Contact() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-12 px-4 md:px-8">
      
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 md:p-10">
        
        {/* Heading */}
        <h1 className="text-white font-bold text-center text-3xl md:text-5xl underline underline-offset-8 mb-6">
          Contact Us
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          
          {/* Left Section */}
          <div className="text-white space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Get in Touch
            </h2>
            
            <p className="text-blue-100">
              Have questions or need help? We're here for you anytime.
            </p>

            <div className="space-y-3 text-sm md:text-base">
              <p>📍 Rajkot, Gujarat</p>
              <p>📞 +91 9876543210</p>
              <p>📧 contact-us@gmail.com</p>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
              Send Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
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