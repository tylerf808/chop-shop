import { Container, FormControl, Input, StyledEngineProvider, Typography } from "@mui/material";

function HotDogs() {

    return (
        <Container className="hot-dogs-container" sx={{padding: 3, borderTop: 1, borderWidth: 2, display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='jalopeno-Typography'>Half Smoked Hot Dogs</Typography>
                <Typography variant='body1' id='half-smokes-price'>$5.50/pack of 4</Typography>
                <Input className='item-inputs' name="Half Smoked Hot Dogs" id='half-smoked-hot-dogs'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='plain-Typography'>Plain Hot Dogs</Typography>
                <Typography variant='body1' id='plain-price'>$5.50/pack of 4</Typography>
                <Input className='item-inputs' name="Plain Hot Dogs" id='plain-hot-dogs'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='jalopeno-Typography'>Jalopeno Hot Dogs w/ Cheese</Typography>
                <Typography variant='body1' id='jalopeno-price'>$6.00/pack of 4</Typography>
                <Input className='item-inputs' name="Jalapeno Hot Dogs" id='jalapeno-hot-dogs'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='plain-cheese-Typography'>Plain Hot Dogs w/ Cheese</Typography>
                <Typography variant='body1' id='plain-cheese-price'>$6.00/pack of 4</Typography>
                <Input className='item-inputs' name="Plain Cheese Dogs" id='plain-cheese-dogs'></Input>
            </FormControl>
        </Container >
    );
}

export default HotDogs;