import { useState } from 'react';

function Bologna() {

    return (
        <div className="bologna-container">
            <form>
                <label>Bologna</label>
                <label>Plain</label>
                <label>With Cheese</label>
                <label id='pepper-bologna'>Pepper Bologna (~3 lbs)</label>
                <label id='pepper-plain-price'>$11.00 each</label>
                <input type='number' id='pepper-bologna-plain-input'></input>
                <label id='pepper-cheese-price'>$14.00 each</label>
                <input type='number' id='pepper-bologna-cheese-input'></input>
                <label id='sweet-bologna'>Sweet Bologna (~3 lbs)</label>
                <label id='sweet-plain-price'>$11.00 each</label>
                <input type='number' id='sweet-bologna-plain-input'></input>
                <label id='sweet-cheese-price'>$14.00 each</label>
                <input type='number' id='sweet-bologna-cheese-input'></input>
            </form>
        </div>
    );
}

export default Bologna;