import { useState } from 'react';

function FreshSausage() {

    return (
        <div className="fresh-sausage-container">
            <form>
                <label id='sausage-header'>Fresh Sausage</label>
                <label id='breakfast-sausage-label'>Breakfast Sausage</label>
                <label id='breakfast-sausage-price'>$4.50/lb</label>
                <label id='sweet-sausage-label'>Sweet Italian Sausage</label>
                <label id='sweet-sausage-price'>$4.50/lb</label>
                <label id='hot-sausage-label'>Hot Italian Sausage</label>
                <label id='hot-sausage-price'>$4.50/lb</label>
                <label id='smoked-bacon-label'>Smoked Bacon Burger</label>
                <label id='smoked-baacon-price'>$3.50/lb</label>
            </form>
        </div>
    );
}

export default FreshSausage;