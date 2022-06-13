import { useState } from 'react';

function MeatType() {


    return (
        <div className="meat-type-container">
            <form>
                <label htmlFor='tenderloin'>Tenderloin/Back Strap</label>
                <input type='number' name='tenderloin'></input>
                <label htmlFor='roast'>Roast</label>
                <input type='number' name='roast'></input>
                <label htmlFor='steak'>Steak (4 a pack)</label>
                <input type='number' name='steak'></input>
                <label htmlFor='fish'>Fish (2 a pack)</label>
                <input type='number' name='fish'></input>
                <label htmlFor='minute'>Minute Steak ($3 per 1lb pack)</label>
                <input type='number' name='minute'></input>
                <label htmlFor='burger'>Burger (1lb per packs)</label>
                <input type='number' name='burger'></input>
                <label htmlFor='burger-extras'>Plain</label>
                <input type='radio' name='burger-extras'></input>
                <label htmlFor='burger-extras'>Add Pork (#3.50 lb)</label>
                <input type='radio' name='burger-extras'></input>
                <label htmlFor='burger-extras'>Add Beef ($4.50 lb)</label>
                <input type='radio' name='burger-extras'></input>
            </form>
        </div>
    );
}

export default MeatType;