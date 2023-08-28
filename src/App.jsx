import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
 
// et pour me faciliter la vie au lieu de taper l’url dans les parenthèse 
// je vais utiliser la propriete d’axios dans mon App.js le port est celui du backend
// cela evite de toujours devoir tout retaper on aura juste a ecrire le endpoint ex: /register
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true 

const App = () => {
  return (
    <UserContextProvider>
      <Navbar/>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
