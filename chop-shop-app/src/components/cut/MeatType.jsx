import { Container, FormControl, FormControlLabel, Input, Radio, RadioGroup, Typography } from "@mui/material";

function MeatType({ changeBurgerType, changeBackstrap }) {

    return (
        <Container className="meat-type-container" sx={{
            borderTop: 1, borderWidth: 2, display: 'flex',
            flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'
        }}>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Tenderloin/Backstrap</Typography>
                <Input className='item-inputs' type='number' id='backstrap' name="Tenderloin/Backstrap"></Input>
                <RadioGroup>
                    <FormControlLabel sx={{}} onClick={() => changeBackstrap('whole')} value='whole' control={<Radio />} label='Whole'></FormControlLabel>
                    <FormControlLabel sx={{}} onClick={() => changeBackstrap('3-chunk')} value='3-chunk' control={<Radio />} label='3-Chunk'></FormControlLabel>
                    <FormControlLabel sx={{}} onClick={() => changeBackstrap('butterfly')} value='butterfly' control={<Radio />} label='Butterfly'></FormControlLabel>
                </RadioGroup>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Roast</Typography>
                <Input className='item-inputs' type='number' id='roast' name="Roast"></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Steak</Typography>
                <Input className='item-inputs' type='number' id='steak' name="Steak"></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Fish</Typography>
                <Input className='item-inputs' type='number' id='fish' name="Fish"></Input>
            </FormControl >
            <FormControl sx={{ margin: 3 }}>
                <Typography variant='body1'>Minute Steak</Typography>
                <Input className='item-inputs' type='number' id='minute-steak' name="Minute Steak"></Input>
            </FormControl>
            <FormControl sx={{ margin: 3 }}>
                <Typography variant="body1">Ground/Burgers</Typography>
                <Input className='item-inputs' id="burger" name="Burgers"></Input>
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