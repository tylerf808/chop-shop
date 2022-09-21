import { Container, FormControl, Radio, RadioGroup, FormControlLabel, Input, Typography } from '@mui/material';

function DeerOptions({setSaveHeadForEuro, setSkinDeerForMount}) {

    return (
        <Container className="deer-options-container" sx={{ border: 2, borderRadius: 2, display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }}>
            <FormControl sx={{padding: 3}}>
                <Typography variant='body1' htmlFor='debone-num' className='input-label'>Debone - $12.50 Per Qtr:</Typography>
                <Input className='item-inputs' name='Debone Qtrs' id='12.50' type='number'></Input>
            </FormControl>
            <FormControl sx={{padding: 3}}>
                <Typography variant='body1' id="mount-radio-buttons-group-label">Skin Deer for Mount - $25.00 extra: </Typography>
                <RadioGroup name='Skin Deer for Mount' row aria-labelledby="mount-radio-buttons-group-label" >
                    <FormControlLabel onClick={() => {setSkinDeerForMount('Yes')}} value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel onClick={() => {setSkinDeerForMount('No')}} value="No" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
            <FormControl sx={{padding: 3}}>
                <Typography variant='body1' name='euro-mount-radio-buttons-group-label'>Save Head for Euro Mount: </Typography>
                <RadioGroup name='Save Head for Euro Mount' row aria-labelledby="mount-radio-buttons-group-label">
                    <FormControlLabel onClick={() => {setSaveHeadForEuro('Yes')}} value="Yes" control={<Radio  />} label="Yes" />
                    <FormControlLabel onClick={() => {setSaveHeadForEuro('No')}} value="No" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
        </Container>
    );
}

export default DeerOptions;