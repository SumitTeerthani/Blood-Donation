import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url("/contactbg.webp")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen"> {/* Centering vertically and horizontally */}
        <div className="max-w-5xl mx-auto mt-6 flex flex-col md:flex-row bg-white shadow-md rounded-lg p-6">
          
          {/* Contact Information Section */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h1>
            <p className="text-gray-600 mb-8">
              Have questions or need assistance? Get in touch with us. Our team is here to help you with any inquiries or support you need.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <p className="text-gray-700 mb-2">Give us a call at: <span className="text-red-600 font-semibold">+91 9988-7676-54</span></p>
              <p className="text-gray-700 mb-2">Email us at: <span className="text-red-600 font-semibold">lifesave_123@gmail.com</span></p>
              <p className="text-gray-700">Connect with us on social media:</p>
              <div className="flex space-x-4 mt-2">
                <a href="https://facebook.com" className="text-black hover:text-blue-800"><FaFacebook size={24} /></a>
                <a href="https://twitter.com" className="text-black hover:text-blue-600"><FaTwitter size={24} /></a>
                <a href="https://instagram.com" className="text-black hover:text-pink-500"><FaInstagram size={24} /></a>
              </div>
            </div>
          </div>

          {/* Message Form Section */}
          <div className="md:w-1/2 p-6 bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <input type="text" placeholder="Your Name" className="border border-gray-300 px-3 py-2 w-full rounded-md shadow-sm focus:outline-none focus:border-gray-500" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Your Email" className="border border-gray-300 px-3 py-2 w-full rounded-md shadow-sm focus:outline-none focus:border-gray-500" />
              </div>
              <div className="mb-4">
                <input type="text" placeholder="Subject" className="border border-gray-300 px-3 py-2 w-full rounded-md shadow-sm focus:outline-none focus:border-gray-500" />
              </div>
              <div className="mb-4">
                <textarea placeholder="Write your message here..." rows="4" className="border border-gray-300 px-3 py-2 w-full rounded-md shadow-sm focus:outline-none focus:border-gray-500"></textarea>
              </div>
              <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
