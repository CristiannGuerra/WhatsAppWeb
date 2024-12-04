import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeScreen from './Screens/HomeScreen/HomeScreen'



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/:contact_id' element={<HomeScreen/>}/>
      </Routes>
    </>
  )
}

export default App
