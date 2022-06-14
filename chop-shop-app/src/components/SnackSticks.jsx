import { Box, FormControl, FormLabel } from "@mui/material";


function SnackSticks() {

    return (
        <Box sx={{margin: 4}} className="snack-sticks-container">
                <FormLabel id='snack-sticks-FormLabel'>Snack Sticks</FormLabel>
                <FormLabel id='plain-snack-stick'>Plain</FormLabel>
                <FormLabel id='cheese-snack-stick'>With Cheese</FormLabel>
                <FormLabel id='pepper-sticks-FormLabel'>Pepper Sticks</FormLabel>
                <FormLabel id='honey-sticks-FormLabel'>Honey Sticks</FormLabel>
                <FormLabel id='pepper-plain-price'>$6.00/lb</FormLabel>
                <FormLabel id='pepper-cheese-price'>$7.00/lb</FormLabel>
                <FormLabel id='honey-plain-price'>$6.00/lb</FormLabel>
                <FormLabel id='honey-cheese-price'>$7.00/lb</FormLabel>
        </Box>
    );
}

export default SnackSticks;