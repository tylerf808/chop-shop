import { Container, FormControl, FormLabel, Input, Typography } from "@mui/material";


function Jerky() {

    return (
        <Container className="jerky-container">
            <FormControl>
                <Typography variant="h5" >Jerky</Typography>
                <FormLabel htmlFor='jerky'>$15.00 lb</FormLabel>
                <Input type='number' name='jerky'></Input>
            </FormControl>
            <FormControl>
                <Typography variant="h5">Pastrami</Typography>
                <FormLabel htmlFor='pastrami'>$7.50 lb</FormLabel>
                <Input type='number' name='pastrami'></Input>
            </FormControl>
            <FormControl>
                <Typography variant="h5">Chipped/Cured Ham</Typography>
                <FormLabel htmlFor='chipped'>$25.00 lb</FormLabel>
                <Input type='number' name='chipped'></Input>
            </FormControl>
        </Container>
    );
}

export default Jerky;