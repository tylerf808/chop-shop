import { Container, FormGroup, Input, Typography } from "@mui/material";

function SnackSticks() {

    return (
        <Container sx={{ border: 2, borderRadius: 2, display: 'flex', flexDirection: 'row'}}>
            <Typography variant='h5' sx={{margin: 2, alignSelf: 'center'}}>Snack Sticks</Typography>
            <FormGroup sx={{margin: 2}}>
                <Typography variant='h6'>Pepper Sticks</Typography>
                <Typography variant="body1">Plain $6.00/lb</Typography>
                <Input className='item-inputs' id="6" name='Pepper Sticks Plain' type="number"></Input>
                <Typography variant="body1">w/ Cheese $7.00/lb</Typography>
                <Input className='item-inputs' id="7" name="Pepper Sticks with Cheese" type="number"></Input>
            </FormGroup>
            <FormGroup sx={{margin: 2}}>
            <Typography variant='h6'>Honey Sticks</Typography>
                <Typography variant="body1">Plain $6.00/lb</Typography>
                <Input className='item-inputs' id="6" name="Honey Sticks Plain" type="number"></Input>
                <Typography variant="body1">w/ Cheese $7.00/lb</Typography>
                <Input className='item-inputs' id="7" name="Honey Sticks with Cheese" type="number"></Input>
            </FormGroup>
        </Container>
    );
}

export default SnackSticks;