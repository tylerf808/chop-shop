import DeerInfo from "./components/DeerInfo";
import DeerOptions from "./components/DeerOptions";
import MeatType from "./components/MeatType";
import Jerky from "./components/Jerky";
import Bologna from "./components/Bologna";
import HotDogs from "./components/HotDogs";
import FreshSausage from "./components/FreshSausage";
import SnackSticks from "./components/SnackSticks";
import TotalCalculator from "./components/TotalCalculator";
import { Container } from "@mui/system";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";
import { useState } from "react";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#4A79DE'
      },
      secondary: {
        main: '#809AAF'
      },
    },
  })

  const [receipt, changeReceipt] = useState({
      total: 0,
  })

  const addItem = (e) => {
    changeReceipt({total: e.target.value})
  }

  return (
    <ThemeProvider theme={theme}>
      <Container className="App" maxWidth="lg">
        <Typography variant="h3">
          The Chop Shop
        </Typography>
        <Typography variant="h4">
          6625 Taneytown Pike, Taneytown, MD 21787
        </Typography>
        <Typography variant="h4">
          443-415-4643
        </Typography>
        <DeerInfo />
        <DeerOptions onChange={addItem}/>
        <MeatType />
        <Jerky />
        <Bologna />
        <HotDogs />
        <SnackSticks />
        <FreshSausage />
        <TotalCalculator total={receipt.total}></TotalCalculator>
      </Container>
    </ThemeProvider>
  );
}

export default App;