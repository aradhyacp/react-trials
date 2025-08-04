import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <div className="test">Helllo Context api 101</div>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
