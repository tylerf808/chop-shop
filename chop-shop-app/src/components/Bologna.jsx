import { Container, Typography, FormControl, Input } from '@mui/material';

function Bologna() {

    return (
        <Container className="bologna-container" sx={{ border: 2, borderRadius: 2, display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Typography variant='h5'>Bologna</Typography>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='pepper-bologna'>Pepper Bologna (~3 lbs)</Typography>
                <Typography variant='body1' id='pepper-plain-price'>$11.00 each</Typography>
                <Input type='number' id='pepper-bologna-plain-Input'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='pepper-cheese-price'>$14.00 each</Typography>
                <Input type='number' id='pepper-bologna-cheese-Input'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='sweet-bologna'>Sweet Bologna (~3 lbs)</Typography>
                <Typography variant='body1' id='sweet-plain-price'>$11.00 each</Typography>
                <Input type='number' id='sweet-bologna-plain-Input'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='sweet-cheese-price'>$14.00 each</Typography>
                <Input type='number' id='sweet-bologna-cheese-Input'></Input>
            </FormControl>
        </Container >
    );
}

export default Bologna;