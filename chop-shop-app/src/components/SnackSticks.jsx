import { Container, FormGroup, Input, Typography } from "@mui/material";


function SnackSticks() {

    return (
        <Container sx={{
            border: 2, borderRadius: 2, display: 'flex',
            flexDirection: 'row', 
        }}>
            <Typography variant='h5' sx={{margin: 2, alignSelf: 'center'}}>Snack Sticks</Typography>
            <FormGroup sx={{margin: 2}}>
                <Typography variant='h6' sx={{}}>Pepper Sticks</Typography>
                <Typography variant="body1" sx={{}}>Plain $6.00/lb</Typography>
                <Input type="number" sx={{}}></Input>
                <Typography variant="body1" sx={{}}>w/ Cheese $7.00/lb</Typography>
                <Input type="number"></Input>
            </FormGroup>
            <FormGroup sx={{margin: 2}}>
            <Typography variant='h6' sx={{}}>Honey Sticks</Typography>
                <Typography variant="body1" sx={{}}>Plain $6.00/lb</Typography>
                <Input type="number" sx={{}}></Input>
                <Typography variant="body1" sx={{}}>w/ Cheese $7.00/lb</Typography>
                <Input type="number"></Input>
            </FormGroup>
        </Container>
    );
}

export default SnackSticks;