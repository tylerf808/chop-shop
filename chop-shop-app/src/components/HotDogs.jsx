import { Container, FormControl, Input, Typography } from "@mui/material";

function HotDogs() {

    return (
        <Container className="hot-dogs-container" sx={{ border: 2, borderRadius: 2, display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Typography variant="h5">Hot Dogs</Typography>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='jalopeno-Typography'>Half Smokes</Typography>
                <Typography variant='body1' id='half-smokes-price'>$5.50/pack of 4</Typography>
                <Input name="5.5" id='Half Smoked Hot Dogs' type='number'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='plain-Typography'>Plain</Typography>
                <Typography variant='body1' id='plain-price'>$5.50/pack of 4</Typography>
                <Input name="5.5" id='Plain Hot Dogs' type='number'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='jalopeno-Typography'>Jalopeno w/ Cheese</Typography>
                <Typography variant='body1' id='jalopeno-price'>$6.00/pack of 4</Typography>
                <Input name="6" id='Jalapeno Hot Dogs' type='number'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2}}>
                <Typography variant='body1' id='plain-cheese-Typography'>Plain w/ Cheese</Typography>
                <Typography variant='body1' id='plain-cheese-price'>$6.00/pack of 4</Typography>
                <Input name="6" id='Plain Cheese Dogs' type='number'></Input>
            </FormControl>
        </Container >
    );
}

export default HotDogs;