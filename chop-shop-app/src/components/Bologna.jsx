import { Container, Typography, FormControl, Input } from '@mui/material';

function Bologna() {

    return (
        <Container className="bologna-container" sx={{ border: 2, borderRadius: 2, display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Typography variant='h5'>Bologna</Typography>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='pepper-bologna'>Pepper Bologna (~3 lbs)</Typography>
                <Typography variant='body1' id='pepper-plain-price'>$11.00 each</Typography>
                <Input className='item-inputs' name='Pepper Bologna Plain' type='number' id='11'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='pepper-cheese-price'>$14.00 each</Typography>
                <Input className='item-inputs' name='Pepper Bologna Cheese' type='number' id='14'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='sweet-bologna'>Sweet Bologna (~3 lbs)</Typography>
                <Typography variant='body1' id='sweet-plain-price'>$11.00 each</Typography>
                <Input className='item-inputs' name='Sweet Bologna Plain' type='number' id='11'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='sweet-cheese-price'>$14.00 each</Typography>
                <Input className='item-inputs' name='Sweet Bologna Cheese' type='number' id='14'></Input>
            </FormControl>
        </Container >
    );
}

export default Bologna;