import { useState } from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import "./App.css"
import "./index.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Calendar from './components/Calendar'
import Literature from './components/Literature'
import Faq from './components/Faq'
import Chat from './components/Chat'
import Forum from './components/Forum'

library.add(fas);

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
        <Route path='/calendar' element={ <Calendar /> } />
        <Route path='/literature' element={ <Literature /> } />
        <Route path='/extracirricural' element={ <Faq /> } />
        <Route path='/forum' element={ <Forum /> } />
        <Route path='/chat' element={ <Chat /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
