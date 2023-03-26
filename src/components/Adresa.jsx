import { useState } from 'react'
import '../App.css'

function Adresa(){
    
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [nameError, setNameError] = useState(null);
    const [addressError, setAddressError] = useState(null);

    function newNameInput(e){
        setName(e.target.value);
        if(!isValidName(e.target.value)){
            setNameError("Pogrešno upisano ime");
        }
        else{
            setNameError(null);
        }
    }

    function isValidName(name){
        return /\[A-Za-z]\s+\[A-Za-z]/.test(name)
    }

    function newAddressInput(e){
        setAddress(e.target.value);
        if(!isValidAddress(e.target.value)){
            setAddressError("Adresa nije valjana (Ulica + kućni broj)")
        }
        else(
            setAddressError(null)
        )
    }

    function isValidAddress(adress){
        return /^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)\s+[0-9]+$/.test(adress)
    }

    return(
        <>
        <div className='form-with-title'>
            <p className='title'>Adresa</p>
            <div className="form">
                <label id="label" htmlFor="Ime">Ime:</label>
                <input type="text" className='input' placeholder='Ime...' value={name} onChange={newNameInput}/>
                <p className='error'>{nameError}</p>

                <label id='label' htmlFor='Država'>Država:</label>
                <select className='selection-box'>
                    <option value="0">Odaberi državu</option>
                    <option value="1">Hrvatska</option>
                    <option value="2">Velika Britanija</option>
                    <option value="3">SAD</option>
                </select>

                <label id="label" htmlFor="Adresa">Adresa</label>
                <input type="text" className='input' placeholder='Adresa...' value={address} onChange={newAddressInput} />
                <p className='error'>{addressError}</p>
            </div>
        </div>
        </>
    )
}

export default Adresa
