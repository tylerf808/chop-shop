import './styles.css'

function DeerOptions() {

    const preventEnter = (event) => {
        var keyPressed = event.keyCode;
            if (keyPressed === 13) {
                event.preventDefault();
                return false;
            }
    }

    return (
        <div className="deer-options-container">
            <p>Deer - Regular Cut - Vacuum Sealed and Frozen - <b>$85.00</b></p>
            <form className='debone-form' onKeyDown={preventEnter}>
                <label htmlFor='debone-num'>Debone - $12.50 Per Qtr:</label>
                <input type="number" name='debone-num' className='debone-input' step="0.01"></input>
            </form>
        </div>
    );
}

export default DeerOptions;