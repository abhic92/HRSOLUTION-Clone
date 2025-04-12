import React from 'react';
import contactpic from "../assets/contactpic.avif";

const ContactPage = () => {
  return (
    <div className="bg-gray-100 py-16 min-h-screen flex items-center justify-center">
      <div className="max-w-md bg-white rounded-lg shadow-xl overflow-hidden flex">
        {/* Image Section (Left - Adjust width as needed) */}
        <div className="w-1/2">
          <img
            src={contactpic} // Replace with the actual URL of your image
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section (Right) */}
        <div className="w-1/2 p-8">
          <div className="text-blue-600 mb-4">
            <h2 className="text-3xl font-semibold">Get in Touch</h2>
            <p className="mt-2 text-lg text-gray-600">
              Feel free to contact us for any kind of HR solution. We will get back to you
              at the earliest with the support you need.
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus-shadow-outline"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus-shadow-outline"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone number</label>
              <input
                type="tel"
                id="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus-shadow-outline"
                placeholder="Phone number"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus-shadow-outline"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus-shadow-outline w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;