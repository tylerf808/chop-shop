import { Container, FormControl, Input, Typography } from '@mui/material';

function FreshSausage() {

    return (
        <Container className="fresh-sausage-container" sx={{padding: 3,
            borderTop: 1, borderWidth: 2, display: 'flex',
            flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', padding: 3, marginBottom: 4
        }}>
            <FormControl>
                <Typography variant='body1'>Breakfast Sausage $4.50/lb</Typography>
                <Input className='item-inputs' name='Breakfast Sausage' id='breakfast-sausage'></Input>
            </FormControl>
            <FormControl>
                <Typography variant='body1'>Sweet Italian Sausage $4.50/lb</Typography>
                <Input className='item-inputs' name='Sweet Italian Sausage' id='sweet-italian-sausage'></Input>
            </FormControl>
            <FormControl>
                <Typography variant='body1'>Hot Italian Sausage $4.50/lb</Typography>
                <Input className='item-inputs' name='Hot Italian Sausage' id='hot-italian-sausage'></Input>
            </FormControl>
            <FormControl>
                <Typography variant='body1'>Smoked Bacon Burger $3.50/lb</Typography>
                <Input className='item-inputs' name='Smoked Bacon Burger' id='smoked-bacon-burger' ></Input>
            </FormControl>
        </Container>
    );
}

export default FreshSausage;