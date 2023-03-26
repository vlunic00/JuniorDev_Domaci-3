import '../App.css'

function Placanje(){
    return(
        <>
        <div className='form-with-title'>
        <p className='title'>Način plaćanja</p>
            <div className='form'>
                <label id='label'>
                    <input type="radio" value="Pouzece" name='nacin-placanja' id='radio' />Pouzeće
                </label>
                <label id='label'>
                    <input type="radio" value="Kartica" name='nacin-placanja' id='radio' />Kartica
                </label>
            </div>
        </div>
        </>
    )
}

export default Placanje

