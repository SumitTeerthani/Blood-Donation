import React from 'react'
import './App.css'
import Signup from './components/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/bank' element={<h1>BLOOD BANK under development...</h1>} />
          <Route path='/donor' element={<h1>DONOR under development...</h1>} />
          <Route path='/reciever' element={<h1>RECIEVER under development...</h1>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/logout' element={<h1>LOGOUT under development...</h1>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<h1>LOGIN under development...</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
