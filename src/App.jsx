import { useRef, useState } from 'react'
import './App.css'
import Container from './components/Container'
import Summary from './components/Summary'



function App() {

  const userName = useRef("")
  const userAddress = useRef("")
  const userState = useRef("")
  const userEmail = useRef("")
  const paymentMethod = useRef("")
  const [show, setShow] = useState(false)

  // napravit funkciju da in svima pridoda vrijednost (poslat ju u container),
  // a u containeru napravit provjere za errore

  function assignValuesToRef(nameValue, addressValue, stateValue, emailValue, paymentValue){
    
    userName.current = nameValue
    userAddress.current = addressValue
    userState.current = stateValue
    userEmail.current = emailValue
    paymentMethod.current = paymentValue

    setShow(true)
    
  }

  function uploadInfo(){
    return {name : userName.current, address : userAddress.current, state : userState.current, email : userEmail.current, payment : paymentMethod.c}
  }

  return (
    <>
    <Container assign={assignValuesToRef}/>
    {show && <Summary upload={uploadInfo}/>}
    </>
  )
}

export default App
