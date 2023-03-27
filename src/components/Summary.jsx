import '../App.css'

function Summary(props){

    return(
        <>
            <div className='container'>
                <p>Name: {props.name}</p>
                <p>Address: {props.address}</p>
                <p>State: {props.state}</p>
                <p>Email: {props.email}</p>
                <p>Payment: {props.payment}</p>
            </div>
        </>
    )
}

export default Summary