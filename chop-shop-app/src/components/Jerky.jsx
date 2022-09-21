import { Container, FormControl, Input, Typography } from "@mui/material";


function Jerky() {

    return (
        <Container className="jerky-container" sx={{ border: 2, borderRadius: 2, display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <FormControl sx={{ margin: 2}}>
                <Typography variant="h5" >Jerky</Typography>
                <Typography variant="body1" htmlFor='jerky'>$15.00 lb</Typography>
                <Input className='item-inputs' type='number' name="Jerky" id="15"></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant="h5">Pastrami</Typography>
                <Typography variant='body1' htmlFor='pastrami'>$7.50 lb</Typography>
                <Input className='item-inputs' type='number' id='7.50' name='Pastrami'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant="h5">Chipped/Cured Ham</Typography>
                <Typography variant='body1' htmlFor='chipped'>$25.00 lb</Typography>
                <Input className='item-inputs' type='number' id="25" name='Chipped/Cured Ham'></Input>
            </FormControl>
        </Container>
    );
}

export default Jerky;