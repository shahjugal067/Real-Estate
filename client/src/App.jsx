import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/Signin'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      
      <Route element={<PrivateRoute />} >
      <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App