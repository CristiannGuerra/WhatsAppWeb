import React, { useContext, useState } from 'react'
import './ChatFooter.css'
import { GoPlus } from "react-icons/go";
import { PiMicrophoneFill } from "react-icons/pi";
import { MdOutlineEmojiEmotions, MdSend } from "react-icons/md";
import { ContactsContext } from '../../Context/ContactsContext';
import { useParams } from 'react-router-dom';

const ChatFooter = () => {
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
        <div className="chat-footer">
            <div className='chat-footer-actions'>
                <MdOutlineEmojiEmotions />
                <GoPlus />
            </div>
            <form onSubmit={handleMessageSubmit} className="chat-form">
                <input
                    className='chat-form-input'
                    type="text"
                    name="message"
                    id="message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    autoComplete='off'
                />
                <button type="submit">
                    {
                        newMessage.length > 0
                            ?
                            <MdSend />
                            :
                            <PiMicrophoneFill />
                    }
                </button>
            </form>
        </div>

    )
}

export default ChatFooter