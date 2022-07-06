import { useState } from 'react';
import { Container, FormLabel, FormControl, Radio, RadioGroup, FormControlLabel, Input, Typography } from '@mui/material';

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
        <Container className="deer-options-container" sx={{ border: 2, borderRadius: 2, display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }}>
            <FormControl sx={{padding: 3}}>
                <Typography variant='body1' htmlFor='debone-num' className='input-label'>Debone - $12.50 Per Qtr:</Typography>
                <Input type='number'></Input>
            </FormControl>
            <FormControl sx={{padding: 3}}>
                <Typography variant='body1' id="mount-radio-buttons-group-label">Skin Deer for Mount - $25.00 extra: </Typography>
                <RadioGroup
                    row
                    aria-labelledby="mount-radio-buttons-group-label"
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
            <FormControl sx={{padding: 3}}>
                <Typography variant='body1' name='euro-mount-radio-buttons-group-label'>Save Head for Euro Mount: </Typography>
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