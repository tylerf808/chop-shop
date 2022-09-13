import { Container, FormControl, Radio, RadioGroup, FormControlLabel, Input, Typography } from '@mui/material';

function DeerOptions() {

    return (
        <Container className="deer-options-container" sx={{ border: 2, borderRadius: 2, display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }}>
            <FormControl sx={{padding: 3}}>
                <Typography variant='body1' htmlFor='debone-num' className='input-label'>Debone - $12.50 Per Qtr:</Typography>
                <Input name='12.5' id='Debone Qtrs' type='number'></Input>
            </FormControl>
            <FormControl sx={{padding: 3}}>
                <Typography variant='body1' id="mount-radio-buttons-group-label">Skin Deer for Mount - $25.00 extra: </Typography>
                <RadioGroup row aria-labelledby="mount-radio-buttons-group-label" >
                    <FormControlLabel value="yes" control={<Radio name='25' id='Skin Deer for Mount'/>} label="Yes" />
                    <FormControlLabel value="no" control={<Radio name="0" id="Don't Skin Deer for Mount no"/>} label="No" />
                </RadioGroup>
            </FormControl>
            <FormControl sx={{padding: 3}}>
                <Typography variant='body1' name='euro-mount-radio-buttons-group-label'>Save Head for Euro Mount: </Typography>
                <RadioGroup row aria-labelledby="mount-radio-buttons-group-label">
                    <FormControlLabel value="yes" control={<Radio name="0" id='Save Head for Euro Mount'/>} label="Yes" />
                    <FormControlLabel value="no" control={<Radio name="0" id='Do Not Save Head for Euro Mount'/>} label="No" />
                </RadioGroup>
            </FormControl>
        </Container>
    );
}

export default DeerOptions;