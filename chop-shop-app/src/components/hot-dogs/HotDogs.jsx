import { useState } from 'react';

function HotDogs() {

    return (
        <div className="hot-dogs-container">
            <form>
                <label id='hot-dog-label'>Hot Dogs</label>
                <label id='jalopeno-label'>Half Smokes</label>
                <label id='half-smokes-price'>$5.50/pack of 4</label>
                <input id='half-smokes-input' type='number'></input>
                <label id='plain-label'>Plain</label>
                <label id='plain-price'>$5.50/pack of 4</label>
                <input id='plain-input' type='number'></input>
                <label id='jalopeno-label'>Jalopeno w/ Cheese</label>
                <label id='jalopeno-price'>$6.00/pack of 4</label>
                <input id='jalopeno-input' type='number'></input>
                <label id='plain-cheese-label'>Plain w/ Cheese</label>
                <label id='plain-cheese-price'>$6.00/pack of 4</label>
                <input id='plain-cheese-input' type='number'></input>
            </form>
        </div>
    );
}

export default HotDogs;