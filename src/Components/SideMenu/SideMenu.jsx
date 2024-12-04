import React from 'react'
import './SideMenu.css'
import { BiSolidMessageSquareDetail, BiAperture, BiRadar, BiSolidUserCircle } from "react-icons/bi";
import { MdOutlineGroups } from "react-icons/md";
import { LuSettings } from "react-icons/lu";




const SideMenu = () => {
  return (
    <div className='sidemenu'>
      <div className='status-wrapper'>
        <div className='status-button-wrapper selected-status'>
          <BiSolidMessageSquareDetail className='status-button' />
          <div className='sidebar-unread-messages'>1</div>
        </div>
        <div className='status-button-wrapper'>
          <BiAperture className='status-button' />
          <div className='sidebar-unseen-status'></div>
        </div>
        <div className='status-button-wrapper'>
          <BiRadar className='status-button' />
        </div>
        <div className='status-button-wrapper'>
          <MdOutlineGroups className='status-button' />
        </div>
      </div>
      <div className='account-settings'>
        <LuSettings />
        <BiSolidUserCircle />
      </div>
    </div>
  )
}

export default SideMenu