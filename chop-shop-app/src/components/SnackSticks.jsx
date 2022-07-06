import { Container, FormGroup, Input, Typography } from "@mui/material";


function SnackSticks() {

    return (
        <Container sx={{
            border: 2, borderRadius: 2, display: 'flex',
            flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'
        }}>
            <Typography variant='h5' sx={{margin: 2}}>Snack Sticks</Typography>
            <FormGroup>
                <Typography variant='h6' sx={{margin: 1}}>Pepper Sticks</Typography>
                <Typography variant="body1" sx={{margin: 1}}>Plain $6.00/lb</Typography>
                <Input type="number" sx={{margin: 1}}></Input>
                <Typography variant="body1" sx={{margin: 1}}>w/ Cheese $7.00/lb</Typography>
                <Input type="number"></Input>
            </FormGroup>
            <FormGroup>
            <Typography variant='h6' sx={{margin: 1}}>Honey Sticks</Typography>
                <Typography variant="body1" sx={{margin: 1}}>Plain $6.00/lb</Typography>
                <Input type="number" sx={{margin: 1}}></Input>
                <Typography variant="body1" sx={{margin: 1}}>w/ Cheese $7.00/lb</Typography>
                <Input type="number"></Input>
            </FormGroup>
        </Container>
    );
}

export default SnackSticks;