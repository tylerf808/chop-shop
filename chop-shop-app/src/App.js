import DeerInfo from "./components/cut/DeerInfo";
import DeerOptions from "./components/cut/DeerOptions";
import MeatType from "./components/cut/MeatType";
import Jerky from "./components/extras/Jerky";
import Bologna from "./components/extras/Bologna";
import HotDogs from "./components/extras/HotDogs";
import FreshSausage from "./components/extras/FreshSausage";
import SnackSticks from "./components/extras/SnackSticks";
import PDFDownload from "./components/PDFDownload";
import { useState, } from "react";
import CurrencyFormat from 'react-currency-format';
import { ThemeProvider, Input, createTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, Typography, Container } from '@mui/material'
import { PDFDownloadLink } from '@react-pdf/renderer';

function App() {

  //Create theme for the page
  const theme = createTheme({
    palette: {
      mode: 'light'
    }
  })

  const epoch = (date) => {
    return Date.parse(date)
  }

  //Instantiate date obj to insert date into pdf download file name and use epoch time as unique key for PDFDownload so it rerenders on state change
  const newDate = new Date()
  const date = newDate.getDate()
  const month = newDate.getMonth() + 1
  const year = newDate.getFullYear()
  const timestamp = epoch(newDate)


  //Create different states to hold customer and receipt info
  const [receipt, changeReceipt] = useState([])
  const [showReceipt, setShowReceipt] = useState(false)
  const [showPrices, setShowPrices] = useState(false)
  const [custInfo, setCustInfo] = useState([])
  const [saveHeadForEuro, setSaveHeadForEuro] = useState('')
  const [skinDeerForMount, setSkinDeerForMount] = useState('')
  const [buckOrDoe, setBuckOrDoe] = useState('')
  const [burgerType, setBurgerType] = useState('')
  const [total, setTotal] = useState(0)
  const [prices, setPrices] = useState({ jerky: '3', pastrami: '4', ham: '5' })

  //Function to display change prices page
  const changePrices = () => {
    setShowPrices(true)
  }

  const confirmPriceChange = () => {

    setShowPrices(false)
    setShowReceipt(false)
  }

  //Function that runs when user clicks the button to generate a receipt. Alters customer and receipt states.
  const updateReceipt = () => {

    //Take in all inputs from the page and create customer info array and receipt array to hold the new values
    const inputs = document.getElementsByClassName('MuiInput-input')
    const custInfoArray = []
    const newReceipt = []

    //Loops through all the inputs, checks if they're empty, and pushes them in the appropriate array.
    for (let i = 0; i < inputs.length; i++) {

      if (inputs[i].id === 'customer-info') {
        const newCustInfo = {
          name: inputs[i].name,
          value: inputs[i].value,
          key: i
        }
        custInfoArray.push(newCustInfo)
      } else if (inputs[i].value === "" || isNaN(inputs[i].value)) {

      } else if (inputs[i].name === "Burgers") {
        //Special case for burgers; need to pick whether pork plain or beef and change price per item
        let burgerObj
        switch (burgerType) {
          case 'plain':
            burgerObj = {
              name: 'Plain Burger',
              value: inputs[i].value,
              itemPrice: inputs[i].id,
              price: inputs[i].value * inputs[i].id,
              key: i
            }
            newReceipt.push(burgerObj)
            break;
          case 'pork':
            burgerObj = {
              name: 'Pork Burger',
              value: inputs[i].value,
              itemPrice: inputs[i].id,
              price: inputs[i].value * 3.5,
              key: i
            }
            newReceipt.push(burgerObj)
            break;
          default:
            burgerObj = {
              name: 'Beef Burger',
              value: inputs[i].value,
              itemPrice: inputs[i].id,
              price: inputs[i].value * 4.5,
              key: i
            }
            newReceipt.push(burgerObj)
            break;
        }
      } else {
        const newItem = {
          name: inputs[i].name,
          value: inputs[i].value,
          itemPrice: inputs[i].id,
          price: inputs[i].value * inputs[i].id,
          key: i
        }
        newReceipt.push(newItem)
      }
    }

    //Get customer info radio button selections
    const euroInfo = {
      name: 'Save Head for Euro Mount',
      value: saveHeadForEuro,
      key: 101
    }
    const skinForMountInfo = {
      name: 'Skin Deer for Mount',
      value: skinDeerForMount,
      key: 102
    }
    const buckOrDoeInfo = {
      name: 'Buck or Doe',
      value: buckOrDoe,
      key: 103
    }

    custInfoArray.push(euroInfo)
    custInfoArray.push(skinForMountInfo)
    custInfoArray.push(buckOrDoeInfo)
    changeReceipt(newReceipt)
    setCustInfo(custInfoArray)

    //Also calculate total and change total state
    let newTotal = 0
    for (let i = 0; i < newReceipt.length; i++) {
      newTotal = newTotal + newReceipt[i].price
    }
    setTotal(newTotal.toFixed(2))

    //Shows the receipt
    setShowReceipt(true)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container className="App" maxWidth="lg" >
        <Typography sx={{ margin: 2 }} variant="h2" >
          The Chop Shop
        </Typography>
        <Button onClick={changePrices}>Change Prices</Button>
        {showPrices ? <Container>
          <Typography>Change Jerky Price</Typography><Input className="price-change-input" type="number" id="jerkyInput"></Input>
          <Typography>Change Pastrami Price</Typography><Input className="price-change-input" type="number" id="pastramiInput"></Input>
          <Typography>Change Ham Price</Typography><Input className="price-change-input" type="number" id="hamInput"></Input>
          <Button onClick={confirmPriceChange}>Confirm price change</Button>
        </Container> : null}
        <Container sx={{ border: 'solid', borderWidth: 2, borderRadius: 3}}>
          <Typography variant="h4" sx={{ margin: 2 }}>Cut</Typography>
          <DeerInfo setBuckOrDoe={setBuckOrDoe} />
          <DeerOptions setSaveHeadForEuro={setSaveHeadForEuro} setSkinDeerForMount={setSkinDeerForMount} />
          <MeatType changeBurgerType={setBurgerType} />
        </Container>
        <Container sx={{ border: 'solid', borderWidth: 2, borderRadius: 3}}>
          <Typography variant="h4" sx={{ margin: 2 }}>Extras</Typography>
          <Jerky jerkyPrice={prices.jerky} pastramiPrice={prices.pastrami} hamPrice={prices.ham} />
          <Bologna />
          <HotDogs />
          <SnackSticks />
          <FreshSausage />
        </Container>
        <Container sx={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-end' }} >
          <Button sx={{ margin: 3 }} variant="contained" color="success" onClick={updateReceipt}>Create Receipt</Button>
        </Container>
        <Container id='receipt-container'>
          {showReceipt ?
            <Container>
              <Typography variant="h5">Customer Info</Typography>
              <Box sx={{ border: 2, backgroundColor: '#6F777D', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {custInfo.map((item) => (
                  <Typography sx={{ margin: 3, color: 'white' }} key={item.key}><span style={{ fontWeight: 'bold' }}>{item.name}:</span> {item.value} </Typography>
                ))}
              </Box>
            </Container>
            : null}
          {showReceipt ? <Container>
            <Typography variant="h5">Itemized Receipt</Typography>
            <TableContainer component={Paper} >
              <Table >
                <TableHead sx={{ backgroundColor: '#6F777D', border: 2 }}>
                  <TableRow>
                    <TableCell sx={{ color: 'white' }} align='left'>Item</TableCell>
                    <TableCell sx={{ color: 'white' }} align="right">Quantity</TableCell>
                    <TableCell sx={{ color: 'white' }} align="right">Price</TableCell>
                    <TableCell sx={{ color: 'white ' }} align='right'>Subtotal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {receipt.map((item) => (
                    <TableRow key={item.key} sx={{ border: 0 }}>
                      <TableCell component="th" scope="row"> {item.name} </TableCell>
                      <TableCell align="right">{item.value}</TableCell>
                      <TableCell align="right"><CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={item.itemPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} /></TableCell>
                      <TableCell align="right"><CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ margin: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Typography variant='h5'>Total: <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Typography>
            </Box>
            <PDFDownloadLink key={timestamp} style={{ padding: 6 }} document={<PDFDownload items={receipt} custInfo={custInfo} total={total} />} fileName={custInfo[2].value + '_' + month + '-' + date + '-' + year + '.pdf'}>💾</PDFDownloadLink>
          </Container> : null}
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App