import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Header';
import "./Dashboard.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

const Dashboard = () => {

    return (
        <>
            <Header />
            <div className='w-screen'>
                <div className="dashboard_title pt-7 pl-[3.7em]">
                    <p className='font-semibold text-xl'>Dashboard</p>
                </div>
                <div className='container'>
                    <div className='box bg-design-orange shadow-lg'>
                        <p className='text-center font-semibold text-white pt-2'>Aktivnih učenika</p>
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-graduation-cap" className='text-5xl opacity-40 pt-2 text-white' />
                            <p className='pt-6 pr-1 text-white text-3xl font-bold' >120</p>
                        </div>
                    </div>
                    <div className='box bg-design-green shadow-lg'>
                        <p className='text-center font-semibold text-white pt-2'>Aktivnih profesora</p>
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-user-tie" className='text-5xl opacity-40 pt-2 text-white' />
                            <p className='pt-6 pr-1 text-white text-3xl font-bold' >32</p>
                        </div>
                    </div>
                    <div className='box bg-design-pink shadow-lg'>
                        <p className='text-center font-semibold text-white pt-2'>Ukupno predavanja</p>
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-book-open" className='text-5xl opacity-40 pt-2 text-white' />
                            <p className='pt-6 pr-1 text-white text-3xl font-bold' >64</p>
                        </div>
                    </div>
                    <div className='box bg-design-purple shadow-lg'>
                        <p className='text-center font-semibold text-white pt-2'>Ukupno materijala</p>
                        <div>
                            <FontAwesomeIcon icon="fa-solid fa-file-lines" className='text-5xl opacity-40 pt-2 text-white' />
                            <p className='pt-6 pr-1 text-white text-3xl font-bold' >102</p>
                        </div>
                    </div>
                </div>
                <Calendar calendarType='gregory' className='calendar' />
            </div>
        </>
    )
}

export default Dashboard