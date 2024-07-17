import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="bg-red-600 p-4 shadow-lg">
      <ul className="flex space-x-4 justify-center text-white">
        <li className="hover:bg-red-700 px-3 py-2 rounded">
          <Link to='/'>Home</Link>
        </li>
        <li className="hover:bg-red-700 px-3 py-2 rounded">
          <Link to='/bank'>Blood Bank</Link>
        </li>
        <li className="hover:bg-red-700 px-3 py-2 rounded">
          <Link to='/donor'>Donor</Link>
        </li>
        <li className="hover:bg-red-700 px-3 py-2 rounded">
          <Link to='/reciever'>Reciever</Link>
        </li>
        <li className="hover:bg-red-700 px-3 py-2 rounded">
          <Link to='/contact'>Contact Us</Link>
        </li>
        <li className="hover:bg-red-700 px-3 py-2 rounded">
          <Link to='/logout'>Logout</Link>
        </li>
        <li className="hover:bg-red-700 px-3 py-2 rounded">
          <Link to='/signup'>Sign Up</Link>
        </li>
        <li className="hover:bg-red-700 px-3 py-2 rounded">
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}
