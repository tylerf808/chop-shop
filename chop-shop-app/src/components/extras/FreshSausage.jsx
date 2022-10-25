import { Container, FormControl, Input, Typography } from '@mui/material';

function FreshSausage() {

    return (
        <Container className="fresh-sausage-container" sx={{padding: 3,
            borderTop: 1, borderWidth: 2, display: 'flex', flexWrap: 'wrap',
            flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',
        }}>
            <FormControl>
                <Typography variant='body1'>Breakfast Sausage</Typography>
                <Input className='item-inputs' name='Breakfast Sausage' id='breakfast-sausage'></Input>
            </FormControl>
            <FormControl>
                <Typography variant='body1'>Sweet Italian Sausage</Typography>
                <Input className='item-inputs' name='Sweet Italian Sausage' id='sweet-italian-sausage'></Input>
            </FormControl>
            <FormControl>
                <Typography variant='body1'>Hot Italian Sausage</Typography>
                <Input className='item-inputs' name='Hot Italian Sausage' id='hot-italian-sausage'></Input>
            </FormControl>
            <FormControl>
                <Typography variant='body1'>Smoked Bacon Burger</Typography>
                <Input className='item-inputs' name='Smoked Bacon Burger' id='smoked-bacon-burger'></Input>
            </FormControl>
            <FormControl sx={{marginTop:  3}}>
                <Typography variant='body1'>Smoked Jalapeño Bacon Burger</Typography>
                <Input className='item-inputs' name='Smoked Jalapeño Bacon Burger' id='smoked-jalapeno-bacon-burger'></Input>
            </FormControl>
        </Container>
    );
}

export default FreshSausage;