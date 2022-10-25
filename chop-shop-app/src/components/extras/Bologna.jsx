import { Container, Typography, FormControl, Input } from '@mui/material';

function Bologna() {

    return (
        <Container className="bologna-container" sx={{padding: 3, borderTop: 1, borderWidth: 2, display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='pepper-bologna'>Pepper Bologna </Typography>
                <Input className='item-inputs' name='Pepper Bologna Plain' id='pepper-bologna-plain'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
            <Typography variant='body1' id='pepper-bologna'>Pepper Bologna w/ cheese</Typography>
                <Input className='item-inputs' name='Pepper Bologna Cheese' id='pepper-bologna-cheese'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='sweet-bologna'>Sweet Bologna </Typography>
                <Input className='item-inputs' name='Sweet Bologna Plain' id='sweet-bologna-plain'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
            <Typography variant='body1' id='sweet-bologna'>Sweet Bologna w/ cheese</Typography>
                <Input className='item-inputs' name='Sweet Bologna Cheese' id='sweet-bologna-cheese'></Input>
            </FormControl>
        </Container >
    );
}

export default Bologna;