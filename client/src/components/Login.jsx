import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && role) {
      console.log(email, password, role);
      
    } else {
      alert("All fields are required");
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
        <h3 className='text-2xl font-semibold text-center mb-6'>Sign in to your account</h3>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
            <input
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              type='text'
              id="email"
              placeholder='Enter Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
            <input
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              type='password'
              id="password"
              placeholder='Enter Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="role" className='block text-sm font-medium text-gray-700'>Role</label>
            <select
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              name='role'
              id='role'
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">- Select -</option>
              <option value="donor">DONOR</option>
              <option value="reciever">RECIEVER</option>
              <option value="both">BOTH</option>
            </select>
          </div>
          <button
            className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
