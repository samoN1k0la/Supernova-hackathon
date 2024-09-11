import React from 'react'
import Header from './Header'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Calendar.css'

const CalendarPage = () => {
  return (
    <>
      <Header />
      <div className='calendarWrapper'>
        <Calendar calendarType='gregory' className='calendar' />
        <div className='noticeWrapper'>
          <FontAwesomeIcon icon="fa-solid fa-circle-plus" className='addNotice cursor-pointer pb-[15px] pl-[170px]' />
          <div className="napomena text-center pt-[3.5em]">
            <p className='napomena_text font-semibold opacity-60'>Nema napomena</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CalendarPage