import React from 'react'
import './NavMenu.css'
import { BiSolidMessageSquareDetail, BiAperture } from "react-icons/bi";
import { MdOutlineGroups, MdCall } from "react-icons/md";

const NavMenu = () => {
    return (
        <nav className='nav-menu'>
            <div>
                <div className='img-wrapper btn-selected'>
                    <BiSolidMessageSquareDetail />
                </div>
                <span className='btn-selected-text'>Chats</span>
            </div>
            <div>
                <div className='img-wrapper'>
                    <BiAperture />
                </div>
                <span>Updates</span>
            </div>
            <div>
                <div className='img-wrapper'>
                    <MdOutlineGroups />
                </div>
                <span>Communities</span>
            </div>
            <div>
                <div className='img-wrapper'>
                    <MdCall />
                </div>
                <span>Calls</span>
            </div>
        </nav>
    )
}

export default NavMenu