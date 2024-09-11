import React from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Forum.css'

const Forum = () => {
  return (
    <div>
      <Header />
      <div className='flex forum_wrapper'>
        <p className='font-bold text-3xl'>Forum</p>
        <div className='flex topics_wrapper'>
          <div className='prva_tema'>Tema 1</div>
          <div>Tema 2</div>
          <div>Tema 3</div>
          <div>Tema 4</div>
        </div>
      </div>
      <div className="shadow-lg mx-10">
        <div className='naslov bg-design-green'>
          <p>Pitanje?</p>
        </div>
        <div className='wrapper'>

          <div className='opis'>
            <p>
              Odgovor
            </p>
            <div className='forum_ikonice cursor-pointer mt-1'>
              <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
              <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
              <FontAwesomeIcon icon="fa-solid fa-message" />
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-lg mx-10 mt-10">
        <div className='naslov bg-design-green'>
          <p>Pitanje?</p>
        </div>
        <div className='wrapper'>

          <div className='opis'>
            <p>
              Odgovor
            </p>
            <div className='forum_ikonice cursor-pointer mt-1'>
              <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
              <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
              <FontAwesomeIcon icon="fa-solid fa-message" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forum