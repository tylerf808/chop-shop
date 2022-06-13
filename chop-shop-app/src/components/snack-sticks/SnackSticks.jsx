import { useState } from 'react';

function SnackSticks() {

    return (
        <div className="snack-sticks-container">
            <form>
                <label id='snack-sticks-label'>Snack Sticks</label>
                <label id='plain-snack-stick'>Plain</label>
                <label id='cheese-snack-stick'>With Cheese</label>
                <label id='pepper-sticks-label'>Pepper Sticks</label>
                <label id='honey-sticks-label'>Honey Sticks</label>
                <label id='pepper-plain-price'>$6.00/lb</label>
                <label id='pepper-cheese-price'>$7.00/lb</label>
                <label id='honey-plain-price'>$6.00/lb</label>
                <label id='honey-cheese-price'>$7.00/lb</label>
            </form>
        </div>
    );
}

export default SnackSticks;