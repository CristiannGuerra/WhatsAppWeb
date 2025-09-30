import React, { useContext, useState } from 'react'
import './ChatsList.css'
import Chat from '../Chat/Chat'
import { HiDotsVertical, HiSearch } from "react-icons/hi";
import { LuMessageSquarePlus } from "react-icons/lu";
import { MdOutlineArchive } from "react-icons/md";
import { ContactsContext } from '../../Context/ContactsContext';
import { useMediaQuery } from 'react-responsive';



const ChatsList = ({ style }) => {
  // Media Query
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })

  const { contactsData } = useContext(ContactsContext)

  const [filter, setFilter] = useState("all")

  const handleToggleFavorites = () => {
    setFilter("favorites")
  }

  const handleToggleUnread = () => {
    setFilter("unread")
  }

  const handleToggleGroups = () => {
    setFilter("groups")
  }

  const handleToggleAll = () => {
    setFilter("all")
  }

  const filterContacts = (contacts, filter) => {
    switch (filter) {
      case 'favorites':
        return contacts.filter((contact) => contact.isFav)
      case 'groups':
        return contacts.filter((contact) => contact.isGroup)
      case 'unread':
        return contacts.filter((contact) => {
          return contact.mensajes.some((mensaje) => { return mensaje.status === 'no-visto' && mensaje.emisor !== 'YO' })
        })
      default:
        return contacts
    }
  }

  const filteredContacts = filterContacts(contactsData, filter)


  let chatJSX = filteredContacts.map(
    (chat, index) => {
      let lastMessage = chat.mensajes[chat.mensajes.length - 1]

      return <Chat
        id={chat.id}
        profilePicture={chat.profilePicture}
        nombre={chat.nombre}
        key={index}
        lastMessage={lastMessage}
        isVerified={chat.isVerified}
      />
    }
  )


  return (
    <div className='main-section' style={!isTabletOrMobile ? { width: style } : {}}>
      {/* Header */}
      <div className='header'>
        <h1 className='header-title'>Chats</h1>
        <div className='header-icons-container'>
          <LuMessageSquarePlus className='header-icon' />
          <HiDotsVertical className='header-icon' />
        </div>
      </div>
      {/* Nav Btn */}
      <div className='nav-buttons'>
        <div className='search-container'>
          <HiSearch className='nav-search-btn' />
          <input className='nav-input' type="text" name="" id="" placeholder='Search' />
        </div>
        {/* Chips */}
        <div className='chips-container'>
          <span className={`chip ${filter === 'all' ? 'active-chip' : ''}`} onClick={handleToggleAll}>All</span>
          <span className={`chip ${filter === 'unread' ? 'active-chip' : ''}`} onClick={handleToggleUnread}>Unread</span>
          <span className={`chip ${filter === 'favorites' ? 'active-chip' : ''}`} onClick={handleToggleFavorites}>Favorites</span>
          <span className={`chip ${filter === 'groups' ? 'active-chip' : ''}`} onClick={handleToggleGroups} >Groups</span>
        </div>
        {/* Archive btn */}
        <button className='btn-archived'>
          <div className='archived-title-wrapper' >
            <MdOutlineArchive />
            <span>Archived</span>
          </div>
          <div className='archived-messages unread-messages'>
            3
          </div>
        </button>
      </div>
      {/* Chats List */}
      <div className='chats-list'>
        {chatJSX}
      </div>
    </div>
  )
}

export default ChatsList