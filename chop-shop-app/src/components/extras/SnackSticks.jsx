import { Container, FormGroup, Input, Typography } from "@mui/material";

function SnackSticks() {

    return (
        <Container sx={{padding: 3, borderTop: 1, borderWidth: 2, display: 'flex', flexDirection: 'row' }}>
            <FormGroup sx={{ margin: 2 }}>
                <Typography variant="body1">Pepper Sticks $6.00/lb</Typography>
                <Input className='item-inputs' id="pepper-sticks-plain" name='Pepper Sticks Plain'></Input>
            </FormGroup>
            <FormGroup sx={{ margin: 2 }}>
                <Typography variant="body1">Pepper Sticks w/ Cheese $7.00/lb</Typography>
                <Input className='item-inputs' id="pepper-sticks-cheese" name="Pepper Sticks with Cheese"></Input>
            </FormGroup>
            <FormGroup sx={{ margin: 2 }}>
                <Typography variant="body1">Honey Sticks $6.00/lb</Typography>
                <Input className='item-inputs' id="honey-sticks-plain" name="Honey Sticks Plain"></Input>
            </FormGroup>
            <FormGroup sx={{ margin: 2 }}>
                <Typography variant="body1">Honey Sticks w/ Cheese $7.00/lb</Typography>
                <Input className='item-inputs' id="honey-sticks-cheese" name="Honey Sticks with Cheese"></Input>
            </FormGroup>
        </Container>
    );
}

export default SnackSticks;