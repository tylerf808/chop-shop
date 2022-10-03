import { Container, FormGroup, Input, Typography } from "@mui/material";

function SnackSticks() {

    return (
        <Container sx={{padding: 3, borderTop: 1, borderWidth: 2, display: 'flex', flexDirection: 'row' }}>
            <FormGroup sx={{ margin: 2 }}>
                <Typography variant="body1">Pepper Sticks $6.00/lb</Typography>
                <Input className='item-inputs' id="6" name='Pepper Sticks Plain' type="number"></Input>
            </FormGroup>
            <FormGroup sx={{ margin: 2 }}>
                <Typography variant="body1">Pepper Sticks w/ Cheese $7.00/lb</Typography>
                <Input className='item-inputs' id="7" name="Pepper Sticks with Cheese" type="number"></Input>
            </FormGroup>
            <FormGroup sx={{ margin: 2 }}>
                <Typography variant="body1">Honey Sticks $6.00/lb</Typography>
                <Input className='item-inputs' id="6" name="Honey Sticks Plain" type="number"></Input>
            </FormGroup>
            <FormGroup sx={{ margin: 2 }}>
                <Typography variant="body1">Honey Sticks w/ Cheese $7.00/lb</Typography>
                <Input className='item-inputs' id="7" name="Honey Sticks with Cheese" type="number"></Input>
            </FormGroup>
        </Container>
    );
}

export default SnackSticks;