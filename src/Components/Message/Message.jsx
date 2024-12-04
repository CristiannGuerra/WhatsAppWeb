import React from 'react'
import './Message.css'
// Status Messages WP
import { BsClockHistory } from "react-icons/bs";
import { BsCheck2All, BsCheck2 } from "react-icons/bs";

const Message = ({ emisor, hora, id, texto, status }) => {
  // Mapeamos los componentes para cada estado
  const statusMap = {
    "no-recibido": <BsCheck2 />,
    "no-visto": <BsCheck2All />,
    "visto": <BsCheck2All style={{ color: "var(--read-check-color)" }} />,
    "no-enviado": <BsClockHistory />
  }

  const statusJSX = statusMap[status]



  return (
    <div className={`message ${emisor}`}>
      <span className='message-text'>{texto}</span>
      <div className='message-data'>
        <span className='message-time'>{hora}</span>
        <span className='message-status'>{statusJSX}</span>
      </div>
    </div>
  )
}

export default Message