import '../App.css'

function Checkbox(props){
    return (
        <>
        <div className='form-with-title'>
            <label id='title'>
            <input type='checkbox' onChange={e=>props.changeAccepted(e.target.value)}/>Prihvaćam uvjete narudžbe
            </label>
        </div>
        </>
    )
}

export default Checkbox