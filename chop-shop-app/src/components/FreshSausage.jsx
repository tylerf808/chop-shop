import { Container, FormControl, Input, Typography } from '@mui/material';

function FreshSausage() {

    return (
        <Container className="fresh-sausage-container" sx={{
            border: 2, borderRadius: 2, display: 'flex',
            flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: 3, marginBottom: 4
        }}>
            <Typography variant='h5' id='sausage-header'>Fresh Sausage</Typography>
            <FormControl>
                <Typography variant='body1'>Breakfast Sausage $4.50/lb</Typography>
                <Input className='item-inputs' name='Breakfast Sausage' id='4.50' type='number'></Input>
            </FormControl>
            <FormControl>
                <Typography variant='body1'>Sweet Italian Sausage $4.50/lb</Typography>
                <Input className='item-inputs' name='Sweet Italian Sausage' id='4.50' type='number'></Input>
            </FormControl>
            <FormControl>
                <Typography variant='body1'>Hot Italian Sausage $4.50/lb</Typography>
                <Input className='item-inputs' name='Hot Italian Sausage' id='4.50' type='number'></Input>
            </FormControl>
            <FormControl>
                <Typography variant='body1'>Smoked Bacon Burger $3.50/lb</Typography>
                <Input className='item-inputs' name='Smoked Bacon Burger' id='3.50' type='number' ></Input>
            </FormControl>
        </Container>
    );
}

export default FreshSausage;