import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Chat.css'

const Chat = () => {
  return (
    <div className='chat rounded-full text-5xl px-2 py-1 cursor-pointer'>
      <FontAwesomeIcon icon="fa-solid fa-comment-dots" className='rounded-full' />
    </div>
  )
}

export default Chat