import { Container, FormControl, FormControlLabel, Input, Radio, RadioGroup, Typography } from "@mui/material";

function MeatType() {

    return (
        <Container className="meat-type-container" sx={{ border: 2, borderRadius: 2, display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Typography variant='h5' sx={{}}>Packs</Typography>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Tenderloin/Back Strap</Typography>
                <Input type='number' id='Tenderloin/Back Strap' name="0"></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Roast</Typography>
                <Input type='number' id='Roast' name="0"></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Steak</Typography>
                <Input type='number' id='Steak' name="0"></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Fish</Typography>
                <Input type='number' id='Fish' name="0"></Input>
            </FormControl >
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Minute Steak</Typography>
                <Input type='number' id='Minute Steak' name="3"></Input>
            </FormControl>
            <FormControl sx={{margin: 3}}>
                <Typography variant="body1">Burgers</Typography>
                    <Input id="Burgers" type='number' name="0"></Input>
                    <RadioGroup row id='burgers-extras-radio-buttons-group'>
                        <FormControlLabel value='plain' control={<Radio id="Plain" name="0"/>} label='Plain' />
                        <FormControlLabel value='pork' control={<Radio id="Add Pork" name="3.5"/>} label='Add Pork ($3.50/lb)' />
                        <FormControlLabel value='beef' control={<Radio id="Add Beef" name="4.5"/>} label='Add Beef ($4.50/lb)' />
                    </RadioGroup>
            </FormControl>
        </Container>
    );
}

export default MeatType;