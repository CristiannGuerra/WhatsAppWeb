import React from 'react'
import './Chat.css'
import { MdVerified } from "react-icons/md";
// Status Messages WP
import { BsClockHistory } from "react-icons/bs";
import { BsCheck2All, BsCheck2 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Chat = ({ nombre, id, profilePicture, lastMessage, isVerified }) => {
    // Utilizamos Navigate para las rutas
    const navigate = useNavigate()

    // Mapeamos los componentes para cada estado
    const statusMap = {
        "no-recibido": <BsCheck2 />,
        "no-visto": <BsCheck2All />,
        "visto": <BsCheck2All style={{ color: "var(--read-check-color)" }} />,
        "no-enviado": <BsClockHistory />
    }

    const statusJSX = statusMap[lastMessage.status]


    return (
        <div className="chat-item" onClick={() => navigate(`/${id}`)} >
            {/* Left Side */}
            <img className='chat-avatar' src={profilePicture} alt="Avatar" />
            {/* Right Side */}
            <div className='chat-container'>
                {/* Top */}
                <div className='chat-title-container'>
                    <div className='title-wrapper'>
                        <span className='chat-title'>{nombre}</span>
                        {isVerified && <MdVerified className='verified-profile' />}
                    </div>
                    <span className='chat-time'>{lastMessage.hora}</span>
                </div>
                {/* Bottom */}
                <div className='chat-bottom'>
                    {/* Sent status */}
                    <span className='chat-status'>{statusJSX}</span>
                    {/* Last Message in chat */}
                    <span className='last-msg'>{lastMessage.texto}</span>
                </div>
            </div>
        </div>
    )
}

export default Chat