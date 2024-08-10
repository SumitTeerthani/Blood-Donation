import React, { useState } from 'react';
import TextInput from './TextInput';

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
        <form onSubmit={handleSubmit}>
          <TextInput
            id="name"
            label="Full Name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Full Name"
            required
          />
          <TextInput
            id="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email Id"
            required
          />
          <TextInput
            id="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            type="password"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
