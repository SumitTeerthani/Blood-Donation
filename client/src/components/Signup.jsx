import React, { useState } from 'react'

export default function Signup() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
  return (
    <div>
      <h1>Register</h1>
      <input type='text' placeholder='Enter Full Name' onChange={(e)=>{setName(e.target.value)}}></input>
      <input type='text' placeholder='Enter Email Id' onChange={(e)=>{setEmail(e.target.value)}}></input>
      <input type='text' placeholder='Enter Phone Number' onChange={(e)=>{setPhone(e.target.value)}}></input>
    </div>
  )
}
