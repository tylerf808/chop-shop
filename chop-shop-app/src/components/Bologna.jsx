import { Container, FormLabel, FormControl, Input, Typography } from '@mui/material';

function Bologna() {

    return (
        <Container className="bologna-container">
            <Typography variant='h5'>Bologna</Typography>
            <FormControl>
                <FormLabel id='pepper-bologna'>Pepper Bologna (~3 lbs)</FormLabel>
                <FormLabel id='pepper-plain-price'>$11.00 each</FormLabel>
                <Input type='number' id='pepper-bologna-plain-Input'></Input>
            </FormControl>
            <FormControl>
                <FormLabel id='pepper-cheese-price'>$14.00 each</FormLabel>
                <Input type='number' id='pepper-bologna-cheese-Input'></Input>
            </FormControl>
            <FormControl>
                <FormLabel id='sweet-bologna'>Sweet Bologna (~3 lbs)</FormLabel>
                <FormLabel id='sweet-plain-price'>$11.00 each</FormLabel>
                <Input type='number' id='sweet-bologna-plain-Input'></Input>
            </FormControl>
            <FormControl>
                <FormLabel id='sweet-cheese-price'>$14.00 each</FormLabel>
                <Input type='number' id='sweet-bologna-cheese-Input'></Input>
            </FormControl>
        </Container >
    );
}

export default Bologna;