import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Input, Typography } from '@mui/material';

function DeerInfo() {

    return (
        <Container className="deer-info-container" sx={{ border: 2, borderRadius: 2, display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }}>
        
            <FormControl sx={{margin: 2}}>
                <Typography variant='body1'>Deer #:</Typography>
                <Input type='number'></Input>
            </FormControl>
            <FormControl sx={{margin: 2}}>
                <Typography variant='body1'>Conf #:</Typography>
                <Input type='number'></Input>
            </FormControl>
            <FormControl sx={{margin: 2}}>
                <Typography variant='body1'>Name</Typography>
                <Input type='text'></Input>
            </FormControl>
            <FormControl sx={{margin: 2}}>
                <Typography variant='body1'>PH:</Typography>
                <Input type='number'></Input>
            </FormControl>
            <FormControl sx={{margin: 2}}>
                <Typography variant='body1'>Drop off Date:</Typography>
                <Input type='date'></Input>
            </FormControl>
            <FormControl sx={{margin: 2}}>
                <Typography variant='body1'>Lbs of Meat:</Typography>
                <Input type='number'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2 }}>
                <RadioGroup row >
                    <FormControlLabel value="buck" control={<Radio />} label="Buck" />
                    <FormControlLabel value="doe" control={<Radio />} label="Doe" />
                </RadioGroup>
            </FormControl>
        </Container >
    );
}

export default DeerInfo;