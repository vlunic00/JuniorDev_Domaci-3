import { useState } from 'react'
import '../App.css'

function Adresa(props){

    return(
        <>
        <div className='form-with-title'>
            <p className='title'>Adresa</p>
            <div className="form">
                <label id="label" htmlFor="Ime">Ime:</label>
                <input type="text" className='input' placeholder='Ime...' value={props.name} onChange={props.nameInput}/>
                <p className='error'>{props.nameError}</p>

                <label id='label' htmlFor='Država'>Država:</label>
                <select className='selection-box' onChange={e=>props.assignValue(e.target.value)}>
                    <option value="0">Odaberi državu</option>
                    <option value="Hrvatska">Hrvatska</option>
                    <option value="Velika Britanija">Velika Britanija</option>
                    <option value="SAD">SAD</option>
                </select>

                <label id="label" htmlFor="Adresa">Adresa</label>
                <input type="text" className='input' placeholder='Adresa...' value={props.address} onChange={props.addressInput} />
                <p className='error'>{props.addressError}</p>
            </div>
        </div>
        </>
    )
}

export default Adresa
