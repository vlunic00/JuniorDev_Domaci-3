import { useState } from 'react'
import '../App.css'

function Kontakt(props){

    return(
        <>
        <div className='form-with-title'>
            <p className='title'>Kontakt</p>
            <div className="form">
                <input type="text" className='input' id="email" placeholder='Email adresa...' value={props.email} onChange={props.action}/>
                <p className='error'>{props.error}</p>
            </div>
        </div>
        </>
    )
}

export default Kontakt