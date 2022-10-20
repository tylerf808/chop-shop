import { Container, FormControl, Input, Typography } from "@mui/material";

function Jerky(props) {

    return (
        <Container className="jerky-container" sx={{ padding: 3, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <FormControl sx={{ margin: 2}}>
                <Typography variant="body1" htmlFor='jerky'>Jerky $15.00 lb</Typography>
                <Input className='item-inputs' id='jerky' name="Jerky"></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' htmlFor='pastrami'>Pastrami $7.50 lb</Typography>
                <Input className='item-inputs' id='pastrami' name='Pastrami'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' htmlFor='chipped'>Ham $25.00 lb</Typography>
                <Input className='item-inputs' id='ham' name='Chipped/Cured Ham'></Input>
            </FormControl>
        </Container>
    );
}

export default Jerky;