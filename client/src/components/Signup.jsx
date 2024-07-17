import React, { useState } from 'react';
import TextInput from './TextInput';
import SelectInput from './SelectInput';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    type: "Donar" // Default type
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    
  };

  const typeOptions = [
    { value: "Donar", label: "Donar" },
    { value: "Receiver", label: "Receiver" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
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
            id="phone"
            label="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            required
          />
          <TextInput
            id="address"
            label="Address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter Address"
            required
          />
          <SelectInput
            id="type"
            label="Select Type"
            value={formData.type}
            onChange={handleChange}
            options={typeOptions}
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
