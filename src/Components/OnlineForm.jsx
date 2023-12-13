import React, { useState } from 'react'
import './OnlineForm.css'

const OnlineForm = () => {
  const [form, setForm] = useState({email: '', password: ''})

  const toSubmit = (e) =>{
    e.preventDefault()
    console.log('Form submitted with:', form)
    setForm({email: '', password: ''});
  }

  const handleTheChange = (e)=>{
    const {name, value} = e.target
    setForm({...form, [name]:value})
  }
  return (
    <div className='formWrap'>
       <h2>LoginForm</h2>
       <form onSubmit={toSubmit}>
       <div className="email">
        <label>Email:</label>
        <input 
        type="email"
        name="email"
        value={form.email}
        onChange={handleTheChange} required
        />
       </div>
       <div className="password">
        <label>Password: </label>
        <input type="password" name="password" value={form.password} onChange={handleTheChange}required/>
       </div>
       <button type="submit">Submit</button>
       </form>
    </div>
  )
}

export default OnlineForm
