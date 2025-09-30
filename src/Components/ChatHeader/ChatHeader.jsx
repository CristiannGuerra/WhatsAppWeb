import React from 'react'
import './ChatHeader.css'
import { MdVerified, MdOutlineKeyboardArrowDown } from "react-icons/md"; /* => Verified Profile IMG */
import { HiDotsVertical, HiSearch } from "react-icons/hi"; /* => Nav Btn IMG */
import { HiMiniVideoCamera } from "react-icons/hi2"; /* => VideoCamera IMG */

const ChatHeader = ({ ContactData }) => {
    const { nombre, isVerified, isBusinessAcc, profilePicture } = ContactData


    return (
        <nav className='chat-header'>
            <div className='chat-title-container'>
                <img src={profilePicture} alt="IMG" />
                <div className='chat-title-wrapper'>
                    <div className='chat-title'>
                        <h2>{nombre}</h2>
                        {isVerified ? <MdVerified className='verified-profile' /> : ''}
                    </div>
                    {isBusinessAcc ? <span className='is-business'>Business Account</span> : ''}
                </div>
            </div>
            <div className='chat-actions-container'>
                <div className='video-call'>
                    <HiMiniVideoCamera />
                    <MdOutlineKeyboardArrowDown />
                </div>
                <HiSearch />
                <HiDotsVertical />
            </div>
        </nav>
    )
}

export default ChatHeader