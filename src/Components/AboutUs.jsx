import React from 'react';
import pic from '../assets/pic.webp'

const AboutUsGrid = () => {
  return (
    <div className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-2">
          <h2 className="text-4xl font-serif font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-6">
            About Us
          </h2>
          <p className="mt-4 text-lg text-black-700 text-justify leading-relaxed font-serif">
            Chiteki HR Solutions is a fastest growing service-oriented HR Consultancy that helps organizations to manage their human resources more effectively. We provide expert advice, support, and solutions related to human capital management. We work with companies to optimize workforce management, Recruitment, Payroll & Compliance management, Training & Development, PMS (Performance Management System) and improve Employee Engagement. Our primary goal is to create productive and efficient workplaces. We provide professional HR services Solutions for startup to MNC Level.
          </p>
          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Know More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2">
          <img
            src={pic} // Replace with the actual image URL
            alt="Team Collaboration"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsGrid;