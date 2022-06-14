import { Container, FormControl, FormLabel } from '@mui/material';

function FreshSausage() {

    return (
        <Container className="fresh-sausage-container">
                <FormLabel id='sausage-header'>Fresh Sausage</FormLabel>
                <FormLabel id='breakfast-sausage-FormLabel'>Breakfast Sausage</FormLabel>
                <FormLabel id='breakfast-sausage-price'>$4.50/lb</FormLabel>
                <FormLabel id='sweet-sausage-FormLabel'>Sweet Italian Sausage</FormLabel>
                <FormLabel id='sweet-sausage-price'>$4.50/lb</FormLabel>
                <FormLabel id='hot-sausage-FormLabel'>Hot Italian Sausage</FormLabel>
                <FormLabel id='hot-sausage-price'>$4.50/lb</FormLabel>
                <FormLabel id='smoked-bacon-FormLabel'>Smoked Bacon Burger</FormLabel>
                <FormLabel id='smoked-baacon-price'>$3.50/lb</FormLabel>
        </Container>
    );
}

export default FreshSausage;