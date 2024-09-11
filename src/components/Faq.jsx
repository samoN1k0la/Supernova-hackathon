import React from 'react'
import './Faq.css'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Faq = () => {
  return (
    <>
      <Header />
      <div className='faq'>
        <div className="lijevi1">
          <p>PRIJAVLJENE AKTIVNOSTI</p>
          <hr className='horizontal'/>
          <ul>
            <li><p>Nuke za početnike</p></li>
            <li><p>Blender za početnike</p></li>
          </ul>
        </div>
        <div>
          <div className="desni1 shadow-lg">
            <div className='naslov bg-design-purple'>
              <p>C++ za početnike</p>
              <FontAwesomeIcon icon="fa-solid fa-circle-plus" className='text-xl pt-1 hover:cursor-pointer' />
            </div>
            <div className='wrapper'>

              <div className='opis'>
                <p>
                  Steknite moderno C++ objektno orijentisano programiranje (OOP) i STL veštine. C++14 i C++17 pokriveni. Informacije o C++20 pogledajte ispod.
                </p>
              </div>
            </div>
          </div>
          <div className="desni1 shadow-lg">
            <div className='naslov bg-design-orange'>
              <p>Osnove računarskih mreža</p>
              <FontAwesomeIcon icon="fa-solid fa-circle-plus" className='text-xl pt-1 hover:cursor-pointer' />
            </div>
            <div className='wrapper'>

              <div className='opis'>
                <p>
                Saznajte više o umrežavanju i započnite svoje putovanje do Cisco 200-301 sertifikata.
                </p>
              </div>
            </div>
          </div>
          <div className="desni1 shadow-lg">
            <div className='naslov bg-design-green'>
              <p>SQL od nule</p>
              <FontAwesomeIcon icon="fa-solid fa-circle-plus" className='text-xl pt-1 hover:cursor-pointer' />
            </div>
            <div className='wrapper'>

              <div className='opis'>
                <p>
                Postanite stručnjak za SQL!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq