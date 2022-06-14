import { useState } from 'react';
import { Container, FormLabel, FormControl, Radio, RadioGroup, FormControlLabel, Input } from '@mui/material';

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
        <Container sx={{padding: 3}} className="deer-options-container">
            <p>Deer - Regular Cut - Vacuum Sealed and Frozen - <b>$85.00</b></p>
            <FormControl sx={{padding: 3}}>
                <FormLabel htmlFor='debone-num' className='input-FormLabel'>Debone - $12.50 Per Qtr:</FormLabel>
                <Input type='number'></Input>
            </FormControl>
            <FormControl sx={{padding: 3}}>
                <FormLabel id="mount-radio-buttons-group-label">Skin Deer for Mount - $25.00 extra: </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="mount-radio-buttons-group-label"
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
            <FormControl sx={{padding: 3}}>
                <FormLabel name='euro-mount-radio-buttons-group-label'>Save Head for Euro Mount: </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="mount-radio-buttons-group-label"
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
        </Container>
    );
}

export default DeerOptions;