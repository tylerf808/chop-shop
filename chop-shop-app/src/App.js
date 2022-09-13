import DeerInfo from "./components/DeerInfo";
import DeerOptions from "./components/DeerOptions";
import MeatType from "./components/MeatType";
import Jerky from "./components/Jerky";
import Bologna from "./components/Bologna";
import HotDogs from "./components/HotDogs";
import FreshSausage from "./components/FreshSausage";
import SnackSticks from "./components/SnackSticks";
import { Container } from "@mui/system";
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import { Button, Typography } from "@mui/material";
import { useState, useEffect, Component } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

function App() {

  const theme = createTheme({
    palette: {
      mode: 'light'
    }
  })

  const [receipt, changeReceipt] = useState([])
  const [showReceipt, setShowReceipt] = useState(false)

  const updateReceipt = () => {
    const inputs = document.getElementsByTagName('Input')
    const newReceipt = []
    for (let i = 0; i < inputs.length; i++) {
      const item = inputs[i].id
      const value = inputs[i].value
      const price = inputs[i].name
      const newItem = {
        item: item,
        value: value,
        price: price
      }
      newReceipt.push(newItem)
    }
    changeReceipt(newReceipt)
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
          443-415-4643
        </Typography>
        <DeerInfo />
        <DeerOptions />
        <MeatType />
        <Jerky />
        <Bologna />
        <HotDogs />
        <SnackSticks />
        <FreshSausage />
        <Button variant="contained" color="success" onClick={updateReceipt}>Update Total</Button>
        { showReceipt ? <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='left'>Item</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {receipt.map((item) => (
                <TableRow key={item.item} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {item.item}
                  </TableCell>
                  <TableCell align="right">{item.value}</TableCell>
                  <TableCell align="right">${item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> : null}
      </Container>
    </ThemeProvider>
  );
}

export default App