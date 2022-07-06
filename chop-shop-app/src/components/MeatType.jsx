import { Container, Box, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, Typography } from "@mui/material";

function MeatType() {

    return (
        <Container className="meat-type-container" sx={{ border: 2, borderRadius: 2, display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <FormControl sx={{ margin: 2 }}>
                <Typography variant='body1'>Tenderloin/Back Strap</Typography>
                <Input type='number' name='tenderloin'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2 }}>
                <Typography variant='body1'>Roast</Typography>
                <Input type='number' name='roast'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2 }}>
                <Typography variant='body1'>Steak (4 a pack)</Typography>
                <Input type='number' name='steak'></Input>
            </FormControl>
            <FormControl sx={{ margin: 2 }}>
                <Typography variant='body1'>Fish (2 a pack)</Typography>
                <Input type='number' name='fish'></Input>
            </FormControl >
            <FormControl sx={{ margin: 2 }}>
                <Typography variant='body1'>Minute Steak ($3 per 1lb pack)</Typography>
                <Input type='number' name='minute'></Input>
            </FormControl>
            <FormControl sx={{margin: 2}}>
                <Typography variant="body1">Burgers</Typography>
                    <Input type='number' ></Input>
                    <RadioGroup 
                        row
                        name='burgers-extras-radio-buttons-group'
                    >
                        <FormControlLabel value='plain' control={<Radio />} label='Plain' />
                        <FormControlLabel value='pork' control={<Radio />} label='Add Pork ($3.50/lb)' />
                        <FormControlLabel value='beef' control={<Radio />} label='Add Beef ($4.50/lb)' />
                    </RadioGroup>
            </FormControl>
        </Container>
    );
}

export default MeatType;