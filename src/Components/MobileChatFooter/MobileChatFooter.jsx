import React, { useContext, useState } from 'react'
import './MobileChatFooter.css'
import { useParams } from 'react-router-dom';
import { ContactsContext } from '../../Context/ContactsContext';
// IMG
import { MdOutlineEmojiEmotions, MdOutlineCameraAlt, MdSend } from "react-icons/md";
import { PiMicrophoneFill } from "react-icons/pi";
import { BsPaperclip } from "react-icons/bs";

const MobileChatFooter = () => {
  const { addNewMessageToContact } = useContext(ContactsContext)

  const { contact_id } = useParams()

  const [newMessage, setNewMessage] = useState('');


  const handleMessageSubmit = (e) => {
    e.preventDefault()

    addNewMessageToContact(newMessage, contact_id)

    // Limpiar el input
    setNewMessage('')
  }



  return (
    <div className='mobile-chat-footer'>
      <form id='messageInput' onSubmit={handleMessageSubmit} className="chat-form">
        <MdOutlineEmojiEmotions className='input-emoji' />
        <input
          className='mobile-chat-input'
          type="text"
          name="message"
          id="message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Message"
          autoComplete='off'
        />
        <div className='input-actions'>
          <BsPaperclip className='input-paperclip' />
          {(!newMessage.length > 0) && <MdOutlineCameraAlt className='input-camera' />}
        </div>
      </form>
      <button className='mobile-submit-btn' type="submit" form='messageInput'>
        {
          newMessage.length > 0
            ?
            <MdSend />
            :
            <PiMicrophoneFill />
        }
      </button>
    </div>
  )
}

export default MobileChatFooter