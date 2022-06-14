import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function DeerInfo() {

    


    return (
            <Container className="deer-info-container">
                <FormControl>
                    <RadioGroup
                        row
                    >
                        <FormControlLabel value="buck" control={<Radio />} label="Buck" />
                        <FormControlLabel value="doe" control={<Radio />} label="Doe" />
                    </RadioGroup>
                </FormControl>
            </Container>
    );
}

export default DeerInfo;