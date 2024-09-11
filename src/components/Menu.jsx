import React, { useState } from 'react'
import './Menu.css'
import { useNavigate } from 'react-router-dom';


const Menu = ({menuTransitionClass}) => {
    const [window, setWindow] = useState(false);
    const navigate = useNavigate()

    return (
        <div className={`menuContainer ${menuTransitionClass}`}>
            <ul>
                <li onClick={()=>navigate("/dashboard")}>Početna stranica</li>
                <li onClick={()=>navigate("/calendar")}>Kalendar</li>
                <li onClick={()=>navigate("/literature")}>Literatura</li>
                <li onClick={()=>navigate("/extracirricural")}>Vannastavne aktivnosti</li>
                <li onClick={()=>navigate("/forum")}>Forum</li>
            </ul>
        </div>
    )
}

export default Menu