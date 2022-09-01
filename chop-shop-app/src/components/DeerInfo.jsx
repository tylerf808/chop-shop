import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button, Input, Typography } from '@mui/material';

function DeerInfo(props) {

    const addSubtotal = () => {

    }

    return (
        <Container className="deer-info-container" sx={{ border: 2, borderRadius: 2, display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }}>
            <FormControl sx={{margin: 3}}>
                <Typography variant='body1'>Deer #:</Typography>
                <Input id='deer-num' type='number'></Input>
            </FormControl>
            <FormControl sx={{margin: 3}}>
                <Typography variant='body1'>Conf #:</Typography>
                <Input min={0} type='number'></Input>
            </FormControl>
            <FormControl sx={{margin: 3}}>
                <Typography variant='body1'>Name</Typography>
                <Input type='text'></Input>
            </FormControl>
            <FormControl sx={{margin: 3}}>
                <Typography variant='body1'>PH:</Typography>
                <Input type='tel'></Input>
            </FormControl>
            <FormControl sx={{margin: 3}}>
                <Typography variant='body1'>Drop off Date:</Typography>
                <Input type='date'></Input>
            </FormControl>
            <FormControl sx={{margin: 3}}>
                <Typography variant='body1'>Lbs of Meat:</Typography>
                <Input type='number'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <RadioGroup row >
                    <FormControlLabel value="buck" control={<Radio />} label="Buck" />
                    <FormControlLabel value="doe" control={<Radio />} label="Doe" />
                </RadioGroup>
            </FormControl>
            <Button variant="contained" color="success" onClick={addSubtotal}>Update Total</Button>
        </Container >
    );
}

export default DeerInfo;