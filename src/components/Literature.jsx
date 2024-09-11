import React, { useEffect, useState } from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Literature.css"

const AccordionMenu = () => {
    const [clicked, setClicked] = useState(false)
    const [id, setId] = useState()

    const handleAccordionClick = (elId) => {
        setClicked(prev => !prev)
        if (id) {
            setId(undefined)
        } else {
            setId(elId)
        }
    }

    const numberOfAcc = [
        { id: 1, name: "Matematika" },
        { id: 2, name: "Automatika" },
    ];

    return (
        <div>
            {numberOfAcc.map((el) =>
                <>
                    <div className='accordion' onClick={() => handleAccordionClick(el.id)} key={el.id}>
                        {el.name}
                    </div>
                    <div hidden={el.id !== id} className='accordion-item'>
                        <div className='spacer'>
                            <p>Literatura</p>
                            <FontAwesomeIcon icon="fa-solid fa-download" />
                        </div>
                        <div className='spacer'>
                            <p>Video materijali</p>
                            <FontAwesomeIcon icon="fa-solid fa-download" />
                        </div>
                        
                    </div>
                </>
            )}
        </div>
    )
}

const Literature = () => {

    return (
        <>
            <Header />
            <div>
                <AccordionMenu />
            </div>
        </>
    )
}

export default Literature