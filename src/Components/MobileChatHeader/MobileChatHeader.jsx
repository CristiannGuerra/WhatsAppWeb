import React, { useContext } from 'react'
import './MobileChatHeader.css'
import { ContactsContext } from '../../Context/ContactsContext'
import { useParams } from 'react-router-dom'

const MobileChatHeader = () => {
  const { getContactById } = useContext(ContactsContext)
  const { contact_id } = useParams()
  const contactFound = getContactById(contact_id)

  const {nombre, profilePicture} = contactFound

  

  return (
    <div className='mobile-chat-header'>
      <div className='back-button'>back</div>
      <div className='user-info'>
        <div className='user-avatar-and-name'>
          <img srcSet={profilePicture} alt="" className='user-avatar' />
          <div className='user-username'>{nombre}</div>
        </div>
        <div className='user-actions'>
          <div className='videocall'>camera</div>
          <div className='phonecall'>call</div>
          <div className='settings'>dots</div>
        </div>
      </div>
    </div>
  )
}

export default MobileChatHeader