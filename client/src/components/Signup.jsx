import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    bloodGroup: '',
    address: '',
    district: '',
    state: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="mt-1 border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              id="age"
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter Age"
              className="mt-1 border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender:
            </label>
            <div className="mt-1 flex items-center">
              <input
                id="male"
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="male" className="mr-4 text-sm font-medium text-gray-700">
                Male
              </label>
              <input
                id="female"
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="female" className="mr-4 text-sm font-medium text-gray-700">
                Female
              </label>
              <input
                id="other"
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === 'Other'}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="other" className="text-sm font-medium text-gray-700">
                Other
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">
              Blood Group
            </label>
            <input
              id="bloodGroup"
              type="text"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              placeholder="Enter Blood Group"
              className="mt-1 border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              className="mt-1 border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="district" className="block text-sm font-medium text-gray-700">
              District
            </label>
            <input
              id="district"
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="Enter District"
              className="mt-1 border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              id="state"
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter State"
              className="mt-1 border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone"
              className="mt-1 border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="mt-1 border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="mt-1 border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="mt-1 border border-gray-300 px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
