import { Container, FormControl, FormLabel, Input, Typography } from "@mui/material";


function HotDogs() {

    return (
        <Container className="hot-dogs-container">
            <Typography variant="h5">Hot Dogs</Typography>
            <FormControl>
                <FormLabel id='jalopeno-FormLabel'>Half Smokes</FormLabel>
                <FormLabel id='half-smokes-price'>$5.50/pack of 4</FormLabel>
                <Input id='half-smokes-Input' type='number'></Input>
            </FormControl>
            <FormControl>
                <FormLabel id='plain-FormLabel'>Plain</FormLabel>
                <FormLabel id='plain-price'>$5.50/pack of 4</FormLabel>
                <Input id='plain-Input' type='number'></Input>
            </FormControl>
            <FormControl>
                <FormLabel id='jalopeno-FormLabel'>Jalopeno w/ Cheese</FormLabel>
                <FormLabel id='jalopeno-price'>$6.00/pack of 4</FormLabel>
                <Input id='jalopeno-Input' type='number'></Input>
            </FormControl>
            <FormControl>
                <FormLabel id='plain-cheese-FormLabel'>Plain w/ Cheese</FormLabel>
                <FormLabel id='plain-cheese-price'>$6.00/pack of 4</FormLabel>
                <Input id='plain-cheese-Input' type='number'></Input>
            </FormControl>
        </Container >
    );
}

export default HotDogs;