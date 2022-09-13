import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Input, Typography } from '@mui/material';

function DeerInfo(props) {
    

    return (
        <Container className="deer-info-container" sx={{
            border: 2, borderRadius: 2, display: 'flex',
            flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap'
        }}>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Deer #:</Typography>
                <Input name="0" id='Deer Number' type='number'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Conf #:</Typography>
                <Input name="0" id='Confirmation Number' min={0} type='number'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Name</Typography>
                <Input name="0" id='Name' type='text'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>PH:</Typography>
                <Input name="0" id='Telephone Number' type='tel'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Drop off Date:</Typography>
                <Input name="0" id='Drop Off Date' type='date'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Lbs of Meat:</Typography>
                <Input name="0" id='Lbs of Meat' type='number'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <RadioGroup row >
                    <FormControlLabel value="buck" control={<Radio name="0" id='Buck'/>} label="Buck" />
                    <FormControlLabel value="doe" control={<Radio name="0" id='Doe'/>} label="Doe" />
                </RadioGroup>
            </FormControl>
            
        </Container >
    );
}

export default DeerInfo;