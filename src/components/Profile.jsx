import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Profile.css'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate()

  return (
    <div className='profile text-black text-center pt-5'>
        <p className='opacity-70 font-semibold'>Nikola Lukić</p>
        <hr className='horizontal1 mt-5'/>
        <div className='flex m-2 ml-[7em] mt-5 cursor-pointer'>
          <FontAwesomeIcon icon="fa-solid fa-user" className='mt-1 mr-2'/>
          <p>Profil</p>
        </div>
        <div className='mt-[15em] cursor-pointer'>
          <p className='hover:underline' onClick={() => navigate("/")}>Odjava</p>
        </div>
        
    </div>
  )
}

export default Profile