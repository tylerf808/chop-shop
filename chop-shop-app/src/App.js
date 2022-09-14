import DeerInfo from "./components/DeerInfo";
import DeerOptions from "./components/DeerOptions";
import MeatType from "./components/MeatType";
import Jerky from "./components/Jerky";
import Bologna from "./components/Bologna";
import HotDogs from "./components/HotDogs";
import FreshSausage from "./components/FreshSausage";
import SnackSticks from "./components/SnackSticks";
import { Container } from "@mui/system";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Button, Card, inputBaseClasses, Typography } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

function App() {

  const theme = createTheme({
    palette: {
      mode: 'light'
    }
  })

  const [receipt, changeReceipt] = useState([])
  const [showReceipt, setShowReceipt] = useState(false)
  const [custInfo, setCustInfo] = useState([])

  const updateReceipt = () => {

    const inputs = document.getElementsByTagName('Input')
    const newReceipt = []
    const custInfoArray = []

    for (let i = 0; i < inputs.length; i++) {
      if(inputs[i].name === 'custInfo'){
        const newCustInfo = {
          item: inputs[i].id,
          value: inputs[i].value
        }
        custInfoArray.push(newCustInfo)
      } else if (inputs[i].value> 0){
        const newItem = {
          item: inputs[i].id,
          value: inputs[i].value
        }
        newReceipt.push(newItem)
      }
    }
    changeReceipt(newReceipt)
    setCustInfo(custInfoArray)
    setShowReceipt(true)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container className="App" maxWidth="lg" >
        <Typography variant="h3" >
          The Chop Shop
        </Typography>
        <Typography variant="h4" >
          6625 Taneytown Pike, Taneytown, MD 21787
        </Typography>
        <Typography variant="h4" >
          Test
        </Typography>
        <DeerInfo />
        <DeerOptions />
        <MeatType />
        <Jerky />
        <Bologna />
        <HotDogs />
        <SnackSticks />
        <FreshSausage />
        <Container sx={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-end' }} >
          <Button sx={{ margin: 3, }} variant="contained" color="success" onClick={updateReceipt}>Update Total</Button>
        </Container>
        <Box>
          {showReceipt ?
            <Box>
              {custInfo.map((item) => (
                <Typography key={item.item}>{item.item} -------------------------- {item.value}</Typography>
              ))}
            </Box>
            : null}
        </Box>
        <Box >
          {showReceipt ? <TableContainer component={Paper} >

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: '#6F777D', border: 2 }}>
                <TableRow>
                  <TableCell sx={{ color: 'white' }} align='left'>Item</TableCell>
                  <TableCell sx={{ color: 'white' }} align="right">Quantity</TableCell>
                  <TableCell sx={{ color: 'white' }} align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {receipt.map((item) => (

                  <TableRow key={item.item} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row"> {item.item} </TableCell>
                    <TableCell align="right">{item.value}</TableCell>
                    <TableCell align="right">${item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> : null}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App