import Kontakt from "./Kontakt"
import Adresa from "./Adresa"
import Placanje from "./Placanje"
import Botun from "./Botun"
import Checkbox from "./Checkbox"
import '../App.css'
import { useState, useRef } from "react"

function Container(){

    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(null);
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState(null);

    const stateValue = useRef("0")
    const paymentValue = useRef("0")
    const acceptedTerms = useRef(false)

    function newInput(e){
        setEmail(e.target.value);
        if(!isValidEmail(e.target.value)){
            setError("Email is invalid");
        }
        else{
                setError(null);
        }
    
    }

    function isValidEmail(email){
        return /^.+@[^\.].*\.[a-z]{2,}$/.test(email)
    }

    
    function newNameInput(e){
        setName(e.target.value);
        if(!isValidName(e.target.value)){
            setNameError("Pogrešno upisano ime (Ime + Prezime");
        }
        else{
            setNameError(null);
        }
    }

    function isValidName(name){
        return /^([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)\s+[a-zA-Z]/.test(name)
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

    function assignStateValue(value){
        stateValue.current = value;
    }
    
    function assignPaymentValue(value){
        paymentValue.current = value;
    }

    function changeTermsValue(value){
        acceptedTerms.current = !acceptedTerms.current
    }

    return(
        <>
        <div className="container">
        <h3 className="header">Račun --&gt; Plaćanje</h3>
        <Kontakt input={newInput} email={email} error={error}/>
        <Adresa nameInput={newNameInput} addressInput={newAddressInput}
            name={name} address={address} nameError={nameError}
            addressError={addressError} assignValue={assignStateValue}/>
        <Placanje assignValue={assignPaymentValue}/>
        <Checkbox changeAccepted={changeTermsValue}/>
        <Botun />
        </div>
        </>
    )
}

export default Container