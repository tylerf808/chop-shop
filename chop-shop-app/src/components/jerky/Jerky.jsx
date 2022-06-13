import { useState } from 'react';

function Jerky() {

    return (
        <div className="jerky-container">
            <form>
                <label htmlFor='jerky'>Jerky</label>
                <label htmlFor='jerky'>$15.00 lb</label>
                <input type='number' name='jerky'></input>
                <label htmlFor='pastrami'> x lbs</label>
                <label htmlFor='pastrami'>Pastrami</label>
                <label htmlFor='pastrami'>$7.50 lb</label>
                <input type='number' name='pastrami'></input>
                <label htmlFor='pastrami'> x lbs</label>
                <label htmlFor='chipped'>Chipped/Cured Ham</label>
                <label htmlFor='chipped'>$25.00 lb</label>
                <input type='number' name='chipped'></input>
                <label htmlFor='chipped'> x lbs</label>
            </form>
        </div>
    );
}

export default Jerky;