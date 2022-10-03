import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Input, Typography } from '@mui/material';

function DeerInfo({setBuckOrDoe}) {

    return (
        <Container className="deer-info-container" sx={{
             display: 'flex',
            flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap'
        }}>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Deer #:</Typography>
                <Input name="Deer Number" id='customer-info' type='number'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Conf #:</Typography>
                <Input name="Confirmation Number" id='customer-info' type='number'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Name</Typography>
                <Input name="Name" id='customer-info' type='text'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>PH:</Typography>
                <Input name="Telephone Number" id='customer-info' type='tel'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Drop off Date:</Typography>
                <Input name="Drop Off Date" id='customer-info' type='date'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Lbs of Meat:</Typography>
                <Input name="Lbs of Meat" id='customer-info' type='number'></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <RadioGroup name='Buck or Doe' row >
                    <FormControlLabel onClick={() => {setBuckOrDoe('Buck')}} value="Buck" control={<Radio  />} label="Buck" />
                    <FormControlLabel onClick={() => {setBuckOrDoe('Doe')}} value="Doe" control={<Radio />} label="Doe" />
                </RadioGroup>
            </FormControl>
            
        </Container >
    );
}

export default DeerInfo;