import { Container, FormControl, FormControlLabel, Input, Radio, RadioGroup, Typography } from "@mui/material";

function MeatType({changeBurgerType}) {
    
    return (
        <Container className="meat-type-container" sx={{borderTop: 1, borderWidth: 2, display: 'flex', 
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Tenderloin/Back Strap</Typography>
                <Input className='item-inputs' type='number' id='5' name="Tenderloin/Back Strap"></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Roast</Typography>
                <Input className='item-inputs' type='number' id='5' name="Roast"></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Steak</Typography>
                <Input className='item-inputs' type='number' id='6' name="Steak"></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Fish</Typography>
                <Input className='item-inputs' type='number' id='3' name="Fish"></Input>
            </FormControl >
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Minute Steak</Typography>
                <Input className='item-inputs' type='number' id='3' name="Minute Steak"></Input>
            </FormControl>
            <FormControl sx={{margin: 3}}>
                <Typography variant="body1">Burgers</Typography>
                    <Input className='item-inputs' id="2" type='number' name="Burgers"></Input>
                    <RadioGroup row id='burgers-extras-radio-buttons-group'>
                        <FormControlLabel onClick={() => changeBurgerType('plain')} value='plain' control={<Radio />} label='Plain' />
                        <FormControlLabel onClick={() => changeBurgerType('pork')} value='pork' control={<Radio />} label='Add Pork ($3.50/lb)' />
                        <FormControlLabel onClick={() => changeBurgerType('beef')} value='beef' control={<Radio />} label='Add Beef ($4.50/lb)' />
                    </RadioGroup>
            </FormControl>
        </Container>
    );
}

export default MeatType;