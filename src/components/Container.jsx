import Kontakt from "./Kontakt"
import Adresa from "./Adresa"
import Placanje from "./Placanje"
import Botun from "./Botun"
import Checkbox from "./Checkbox"
import '../App.css'
import { useState } from "react"

function Container(){

    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    function newInput(e, field){
            setEmail(e.target.value);
            if(!isValidEmail(e.target.value)){
                setError("Email is invalid");
            }
            else{
                setError(null);
    }

    function isValidEmail(email){
        return /\S+@\S+\.\S+/.test(email)
    }

}

    return(
        <>
        <div className="container">
        <h3 className="header">Račun --&gt; Plaćanje</h3>
        <Kontakt action={newInput} email={email} error={error}/>
        <Adresa />
        <Placanje />
        <Checkbox />
        <Botun />
        </div>
        </>
    )
}

export default Container