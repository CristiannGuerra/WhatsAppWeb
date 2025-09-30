import React, { useContext } from 'react'
import './ChatScreen.css'
import { IoLockClosed } from "react-icons/io5";
import { useParams } from 'react-router-dom'
import { ContactsContext } from '../../Context/ContactsContext'
import { MessagesList } from '../../Components'
import ChatHeader from '../../Components/ChatHeader/ChatHeader'
import ChatFooter from '../../Components/ChatFooter/ChatFooter'
import coverImg from '../../public/assets/WhatsApp-cover-img.png'
import { useMediaQuery } from 'react-responsive';
import MobileChatFooter from '../../Components/MobileChatFooter/MobileChatFooter';
import MobileChatHeader from '../../Components/MobileChatHeader/MobileChatHeader';


const ChatScreen = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })

  const { getContactById } = useContext(ContactsContext)

  const { contact_id } = useParams()

  const contactChat = getContactById(contact_id)

  return (
    <>
      {
        !contactChat
          ?
          <div className="cover">
            <div className="cover-content">
              <img src={coverImg} />
              <h1>Download WhatsApp for Windows</h1>
              <div>
                Make calls, share your screen and get a faster experience when you download the Windows app.
              </div>
              <button className='btn-get'>Get from Microsoft Store</button>
            </div>
            <div className='encrypted-msg'>
              <IoLockClosed />
              <span>Your personal messages are end-to-end encrypted</span>
            </div>
          </div>
          :
          <div className='messageslist'>
            {isTabletOrMobile ? <MobileChatHeader /> : <ChatHeader ContactData={contactChat} />}
            <MessagesList messages={contactChat.mensajes} />
            {isTabletOrMobile ? <MobileChatFooter /> : <ChatFooter />}
          </div>
      }
    </>
  )
}

export default ChatScreen