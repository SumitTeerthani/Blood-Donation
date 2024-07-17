import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-red-600 mb-6">Welcome to LifeSave</h1>
          <p className="text-xl text-gray-700">Connecting donors and recipients to save lives.</p>
        </div>
        
        {/* Who We Are Section */}
        <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row md:items-center p-6 space-y-6 md:space-y-0 md:space-x-6 w-full md:w-1/2 mx-auto mb-8">
          <div className="md:w-1/2">
            <img src="/whoweare.avif" alt="Who We Are" className="w-full h-auto rounded-md"/>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Who We Are</h3>
            <p className="text-gray-700">
              We are a team of dedicated college graduates passionate about making a difference in the world. 
              Through this blood donation platform, we aim to connect donors and recipients to save lives.
            </p>
          </div>
        </div>
        
        {/* What We Do Section */}
        <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row md:items-center p-6 space-y-6 md:space-y-0 md:space-x-6 w-full md:w-1/2 mx-auto">
        <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">What We Do</h3>
            <p className="text-gray-700">
              Our mission is to create a seamless and efficient way for people to donate and receive blood. 
              By leveraging technology, we aim to make the process easier and more accessible for everyone.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/whatwedo.jpeg" alt="What We Do" className="w-full h-auto rounded-md"/>
          </div>
          
        </div>
        
    </div>
  );
}
