import '../App.css'

function Placanje(props){
    return(
        <>
        <div className='form-with-title'>
        <p className='title'>Način plaćanja</p>
            <div className='form'>
                <label id='label'>
                    <input type="radio" value="Pouzeće" name='nacin-placanja' id='radio' onChange={e=>props.assignValue(e.target.value)}/>Pouzeće
                </label>
                <label id='label'>
                    <input type="radio" value="Kartica" name='nacin-placanja' id='radio' onChange={e=>props.assignValue(e.target.value)}/>Kartica
                </label>
            </div>
        </div>
        </>
    )
}

export default Placanje

