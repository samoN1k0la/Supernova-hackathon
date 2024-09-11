import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Header.css"
import Menu from './Menu'
import classNames from 'classnames'
import Notifications from './Notifications'
import Profile from './Profile'
import Chat from './Chat'


const Header = () => {
    const [clicked, setClicked] = useState(false)
    const [clickedNotif, setClickedNotif] = useState(false)
    const [clickedProfile, setClickedProfile] = useState(false)

    let MenuAnimation = classNames({
        'menuAnimationLeft': true,
    });
    return (
        <div className='header pl-10 py-4 shadow-md'>
            <div onClick={()=>setClicked(prev => !prev)} className="lijevi flex items-center justify-center px-5 text-lg hover:rounded-full hover:bg-white hover:cursor-pointer text-white hover:text-black">
                <FontAwesomeIcon icon="fa-solid fa-bars" />
                <p className='pl-4 font-semibold'>Hackathon</p>
            </div>
            {clicked && <Menu menuTransitionClass={`meni ${MenuAnimation}`} />}
            <div className="desni">
                    <div className="notifikacije_ikonica" onClick={()=>setClickedNotif(prev => !prev)}>
                        <FontAwesomeIcon icon="fa-solid fa-bell" className='text-white hover:text-black hover:cursor-pointer' />
                        
                    </div>
                    {clickedNotif && <Notifications />}
                    
                    <div >
                        <div className="opis">
                            <p>Nikola Lukić</p>
                            <FontAwesomeIcon icon="fa-solid fa-user" onClick={()=>setClickedProfile(prev => !prev)} className='ikonica text-white hover:text-black hover:cursor-pointer' />
                        </div>
                        <p className='skola text-center'>Učenik</p>
                    </div>
                    {clickedProfile && <Profile />}
            </div>
            <Chat />
        </div>
    )
}

export default Header