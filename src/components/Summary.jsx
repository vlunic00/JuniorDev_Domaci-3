import { useState, useEffect } from 'react'
import '../App.css'
import uploadInfo from '../App.jsx'

function Summary(){

    const [info, setInfo] = useState({
        name: "",
        address: "",
        state: "",
        email: "",
        payment: ""
    });

    useEffect(() => {
        uploadInfo().then(rez => {
            setInfo(res)
        })
    }, [])

    return(
        <>
            <div className='container'>
                <p>Name: {info.name}</p>
                <p>Address: {info.address}</p>
                <p>State: {info.state}</p>
                <p>Email: {info.email}</p>
                <p>Payment: {info.payment}</p>
            </div>
        </>
    )
}

export default Summary