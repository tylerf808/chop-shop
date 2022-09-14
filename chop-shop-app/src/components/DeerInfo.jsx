import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Input, Typography } from '@mui/material';

function DeerInfo() {

    return (
        <Container className="deer-info-container" sx={{
            border: 2, borderRadius: 2, display: 'flex',
            flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap'
        }}>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Deer #:</Typography>
                <Input name="custInfo" id='Deer Number' type='number'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Conf #:</Typography>
                <Input name="custInfo" id='Confirmation Number' type='number'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Name</Typography>
                <Input name="custInfo" id='Name' type='text'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>PH:</Typography>
                <Input name="custInfo" id='Telephone Number' type='tel'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Drop off Date:</Typography>
                <Input name="custInfo" id='Drop Off Date' type='date'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Lbs of Meat:</Typography>
                <Input name="custInfo" id='Lbs of Meat' type='number'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <RadioGroup row >
                    <FormControlLabel value="Buck" control={<Radio name="custInfo" id='Buck'/>} label="Buck" />
                    <FormControlLabel value="Doe" control={<Radio name="custInfo" id='Doe'/>} label="Doe" />
                </RadioGroup>
            </FormControl>
            
        </Container >
    );
}

export default DeerInfo;