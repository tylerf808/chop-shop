import { Container, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup } from "@mui/material";

function MeatType() {

    return (
        <Container className="meat-type-container">
            <FormControl>
                <FormLabel >Tenderloin/Back Strap</FormLabel>
                <Input type='number' name='tenderloin'></Input>
            </FormControl>
            <FormControl>
                <FormLabel >Roast</FormLabel>
                <Input type='number' name='roast'></Input>
            </FormControl>
            <FormControl>
                <FormLabel >Steak (4 a pack)</FormLabel>
                <Input type='number' name='steak'></Input>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='fish'>Fish (2 a pack)</FormLabel>
                <Input type='number' name='fish'></Input>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='minute'>Minute Steak ($3 per 1lb pack)</FormLabel>
                <Input type='number' name='minute'></Input>
            </FormControl>
            <FormControl>
                <FormLabel>Burger (1lb per packs)</FormLabel>
                <Input type='number'></Input>
            </FormControl>
            <FormControl>
                <RadioGroup
                    row
                    name='burgers-extras-radio-buttons-group'
                >
                    <FormControlLabel value='plain' control={<Radio />} label='Plain'/>
                    <FormControlLabel value='pork' control={<Radio />} label='Add Pork ($3.50/lb)'/>
                    <FormControlLabel value='beef' control={<Radio />} label='Add Beef ($4.50/lb)'/>
                </RadioGroup>
            </FormControl>
        </Container>
    );
}

export default MeatType;