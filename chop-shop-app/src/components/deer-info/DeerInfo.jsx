
function DeerInfo() {
    return (
        <div className="deer-info-container">
            <form className="deer-info-form">
                <input type="number" id="deer-number" className="deer-input" placeholder="Deer #"></input>
                <label htmlFor="buck">Buck: </label>
                <input type="radio" id="buck" name="buck-or-doe" className="deer-input" ></input>
                <label htmlFor="doe">Doe: </label>
                <input type="radio" id="doe" name="buck-or-doe" className="deer-input" ></input>
                <input type="number" id="conf-number" className="deer-input" placeholder="Confirmation #"></input>
                <input type="text" id="cust-name" className="deer-input" placeholder="Name"></input>
                <input type="number" id="ph" className="deer-input" placeholder="PH"></input>
                <div className='drop-date-container'>
                    <label htmlFor="drop-off">Drop-Off Date</label>
                    <input type="date" id="drop-off" className="deer-input"></input>
                </div>
                <input type="number" id="lbs-meat" className="deer-input" placeholder="Lbs of Meat"></input>
            </form>
        </div>
    );
}

export default DeerInfo;