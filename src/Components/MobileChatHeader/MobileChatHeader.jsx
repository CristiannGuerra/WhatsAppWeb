import React, { useContext } from 'react'
import './MobileChatHeader.css'
import { ContactsContext } from '../../Context/ContactsContext'
import { useNavigate, useParams } from 'react-router-dom'

import { MdVerified } from "react-icons/md"; /* => Verified Profile IMG */
import { HiDotsVertical } from "react-icons/hi"; /* => Nav Btn IMG */
import { HiMiniVideoCamera } from "react-icons/hi2"; /* => VideoCamera IMG */
import { IoCallOutline } from 'react-icons/io5';
import { MdArrowBack } from 'react-icons/md';

const MobileChatHeader = () => {
  const { getContactById } = useContext(ContactsContext)
  const { contact_id } = useParams()
  const contactFound = getContactById(contact_id)

  const { nombre, profilePicture, isVerified } = contactFound

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/')
  }

  console.log(profilePicture)


  return (
    <div className='mobile-chat-header'>
      <MdArrowBack onClick={handleGoBack} />
      <div className='user-info'>
        <div className='user-avatar-and-name'>
          <img src={profilePicture} alt="IMG" className='user-avatar' />
          <div className='user-username'>
            <span>{nombre}</span>
            {isVerified && <MdVerified className='verified-profile' />}

          </div>
        </div>
        <div className='user-actions'>
          <HiMiniVideoCamera />
          <IoCallOutline />
          <HiDotsVertical />
        </div>
      </div>
    </div>
  )
}

export default MobileChatHeader