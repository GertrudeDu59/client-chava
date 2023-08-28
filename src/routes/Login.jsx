import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'



const Login = () => {

  const navigate = useNavigate()
  const [data, setData] = useState ({
    email: '',
    password: '',
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const {email, password} = data
    try {
        const { data } = await axios.post('/Login' ,{ // relie au authRoutes
          email,
          password
        });
        if(data.error) { // affiche les erreures du back au front
          toast.error(data.error)
        } else {
          setData({}); // reset form
          navigate('/') // vers homepage

        }
    } catch (error) {
      
    }
  }

  return (
    <form onSubmit={loginUser}>
      <label>Email</label>
      <input type="email" placeholder='Your email' autoComplete="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />

      <label>Passeword</label>
      <input type="password" placeholder='Your passeword' autoComplete="new-password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />

      <button type="submit">Login</button>
    </form>
  )
}

export default Login