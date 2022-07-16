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
    deerNum: 0,
    confNum: 0,
    name: '',
    PH: 0,
    dropDate: 0,
    lbs: 0,
    buckOrDoe: '',
    deboneQts: 0,
    skinForMount: '',
    packs: {
      tenderloin: 0,
      roast: 0,
      steak: 0,
      fish: 0,
      minuteSteak: 0,
      burgers: {
        plain: 0,
        addPork: 0,
        addBeef: 0
      }
    },
    jerky: 0,
    pastrami: 0,
    chipHam: 0,
    bologna: {
      pep: 0,
      pepCheese: 0,
      sweet: 0,
      sweetCheese: 0,
    },
    HotDogs: {
      halfSmoke: 0,
      plain: 0,
      jalCheese: 0,
      plainCheese: 0,
    },
    snackStick: {
      pepPlain: 0,
      pepCheese: 0,
      honeyPlain: 0,
      honeyCheese: 0
    },
    freshSausage: {
      break: 0,
      sweetItal: 0,
      hotItal: 0,
      smokeBaconBurg: 0
    }
  })
  const [total, changeTotal] = useState({
    total: 0,
  })

  const addToTotal = (e) => {
    const num = e.target.value;
    const oldNum = total.total;
    const newNum = num + oldNum;
    const newTotal = {
      total: newNum
    }
    changeTotal(newTotal)
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
        <DeerInfo onChange={addToTotal} />
        <DeerOptions onChange={addToTotal} />
        <MeatType />
        <Jerky />
        <Bologna />
        <HotDogs />
        <SnackSticks />
        <FreshSausage />
        <TotalCalculator total={total.total}></TotalCalculator>
      </Container>
    </ThemeProvider>
  );
}

export default App;