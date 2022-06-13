
import { useState } from 'react';

function DeerOptions() {

    const [total, changeTotal] = useState(0);

    const preventEnter = (event) => {
        const keyPressed = event.keyCode;
            if (keyPressed === 13) {
                event.preventDefault();
                return false;
            }
    }

    const updateDeboneTotal = (event) => {
        const deboneNum = event.target.value;
        const newTotal = (deboneNum * 12.50);
        const formatedTotal = newTotal.toFixed(2);
        changeTotal(formatedTotal);

    }

    return (
        <div className="deer-options-container">
            <p>Deer - Regular Cut - Vacuum Sealed and Frozen - <b>$85.00</b></p>
            <form className='deer-options-form' onKeyDown={preventEnter}>
                <label htmlFor='debone-num' className='input-label'>Debone - $12.50 Per Qtr:</label>
                <input type="number" min='0' max='8' name='debone-num' className='number-input' id='debone-input' step="1" onChange={updateDeboneTotal}></input>
                <label className='input-label'> x $12.50 = ${total}</label>
                <label className='input-label' htmlFor='mountYorN'>Skin Deer for Mount - $25.00 extra: </label>
                <input type='radio' name='mountYorN' className='deer-input'></input>
                <label className='input-label'>Yes</label>
                <input type='radio' name='mountYorN' className='deer-input'></input>
                <label className='input-label'>no</label>
                <label className='input-label' htmlFor='mountYorN'>Save Head for Euro Mount: </label>
                <input type='radio' name='euroYorN' className='deer-input'></input>
                <label className='input-label'>Yes</label>
                <input type='radio' name='euroYorN' className='deer-input'></input>
                <label className='input-label'>no</label>
            </form>
        </div>
    );
}

export default DeerOptions;