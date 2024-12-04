import React from 'react'
import './MessagesList.css'
import Message from '../Message/Message'


const MessagesList = ({ messages }) => {
  // JSX de los mensajes
  let messagesListJSX = messages.map(
    (message, index) => {
      return <Message
        emisor={message.emisor}
        hora={message.hora}
        id={message.id}
        status={message.status}
        texto={message.texto}
        key={index} />
    }
  )


  return (
    <div className='chat-messages-container'>
      {messagesListJSX}
    </div>
  )
}

export default MessagesList