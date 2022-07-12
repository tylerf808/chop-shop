import { Typography } from "@mui/material";
import { Container } from "@mui/system";

function TotalCalculator({total}) {

    return (
        <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', 
        margin: 2, padding: 2 }}>
            <Typography sx={{ justifySelf: 'center' }} variant="h5">Total: ${total}</Typography>
        </Container>
    );
}

export default TotalCalculator;