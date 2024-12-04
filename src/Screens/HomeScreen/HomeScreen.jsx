import React, { useState } from 'react'
import './HomeScreen.css'
import { SideMenu, ChatsList } from '../../Components'
import { useParams } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import ChatScreen from '../ChatScreen/ChatScreen'
import NavMenu from '../../Components/NavMenu/NavMenu'


const HomeScreen = () => {
  // Media Query
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })

  // Obtener el contact_id de la URL para el renderizado condicional
  const { contact_id } = useParams();


  // Handle Resize window
  const [size, setSize] = useState(400)


  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }


  const handleMouseMove = (e) => {
    const newSize = e.clientX
    setSize(newSize)
  }


  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mousedown', handleMouseDown)
  }


  return (
    <div className="home-screen">
      {!isTabletOrMobile && <SideMenu />}
      {isTabletOrMobile && contact_id ? '' : <ChatsList style={size} />}
      {isTabletOrMobile && !contact_id ? <NavMenu /> : ''}
      {!isTabletOrMobile && <div className='resizer' onMouseDown={handleMouseDown}></div>}
      {isTabletOrMobile && !contact_id ? '' : <ChatScreen />}

    </div>
  )
}

export default HomeScreen