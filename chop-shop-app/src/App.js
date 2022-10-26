import DeerInfo from "./components/cut/DeerInfo";
import DeerOptions from "./components/cut/DeerOptions";
import MeatType from "./components/cut/MeatType";
import Jerky from "./components/extras/Jerky";
import Bologna from "./components/extras/Bologna";
import HotDogs from "./components/extras/HotDogs";
import FreshSausage from "./components/extras/FreshSausage";
import SnackSticks from "./components/extras/SnackSticks";
import PDFDownload from "./components/PDFDownload";
import { useEffect, useState } from "react";
import CurrencyFormat from 'react-currency-format';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, Typography, Container } from '@mui/material'
import { PDFDownloadLink } from '@react-pdf/renderer';

function App() {

  const epoch = (date) => {
    return Date.parse(date)
  }

  //Instantiate date obj to insert date into pdf download file name and use epoch time as unique key for PDFDownload so it rerenders on state change
  const newDate = new Date()
  const date = newDate.getDate()
  const month = newDate.getMonth() + 1
  const year = newDate.getFullYear()
  const timestamp = epoch(newDate)

  let pricesFromJSON
  fetch('/prices.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then((response) => response.json()).then((data) => pricesFromJSON = data)

  //Create different states to hold customer and receipt info
  const [receipt, changeReceipt] = useState([])
  const [showReceipt, setShowReceipt] = useState(false)
  const [custInfo, setCustInfo] = useState([])
  const [saveHeadForEuro, setSaveHeadForEuro] = useState('')
  const [skinDeerForMount, setSkinDeerForMount] = useState('')
  const [buckOrDoe, setBuckOrDoe] = useState('')
  const [burgerType, setBurgerType] = useState('')
  const [backstrapType, setBackstrapType] = useState('')
  const [total, setTotal] = useState(0)
  const [tbdItems, setTbdItems] = useState([])

  //Function that runs when user clicks the button to generate a receipt. Alters customer and receipt states.
  const updateReceipt = () => {

    const custInfoArray = []
    const newReceipt = []
    const newTbdItems = []

    //Take in all inputs from the page and create customer info array and receipt array to hold the new values
    const inputs = document.getElementsByClassName('MuiInput-input')

    //Add overall cut obj to receipt array
    const overallCut = {
      name: 'Regular Cut',
      itemPrice: parseFloat(pricesFromJSON['regular-cut']),
      price: parseFloat(pricesFromJSON['regular-cut']),
    }
    newReceipt.push(overallCut)

    //Loops through all the inputs, checks if they're empty, and pushes them in the appropriate array.
    for (let i = 0; i < inputs.length; i++) {

      if (inputs[i].id === 'customer-info') {
        const newCustInfo = {
          name: inputs[i].name,
          value: inputs[i].value,
          key: i
        }
        custInfoArray.push(newCustInfo)
      } else if (inputs[i].value === "") {

      } else if (inputs[i].name === "Burgers") {
        //Special case for burgers; need to pick whether pork plain or beef and change price per item
        let burgerObj
        switch (burgerType) {
          case 'plain':
            burgerObj = {
              name: 'Plain Burger',
              value: inputs[i].value,
              itemPrice: pricesFromJSON["plain-burger"],
              price: inputs[i].value * pricesFromJSON["plain-burger"],
              key: i
            }
            newReceipt.push(burgerObj)
            break;
          case 'pork':
            burgerObj = {
              name: 'Pork Burger',
              value: inputs[i].value,
              itemPrice: pricesFromJSON["pork-burger"],
              price: inputs[i].value * pricesFromJSON["pork-burger"],
              key: i
            }
            newReceipt.push(burgerObj)
            break;
          default:
            burgerObj = {
              name: 'Beef Burger',
              value: inputs[i].value,
              itemPrice: pricesFromJSON["beef-burger"],
              price: inputs[i].value * pricesFromJSON["beef-burger"],
              key: i
            }
            newReceipt.push(burgerObj)
            break;
        }
      } else if (inputs[i].name === "Tenderloin/Backstrap") {
        //Special case for backstrap to pick whole  3 chunk or butterfly
        let backstrapObj
        switch (backstrapType) {
          case 'whole':
            backstrapObj = {
              name: 'Tenderloin/Backstrap Whole',
              value: inputs[i].value,
              itemPrice: pricesFromJSON["backstrap"],
              price: inputs[i].value * pricesFromJSON["backstrap"],
              key: i
            }
            newReceipt.push(backstrapObj)
            break;
          case '3-chunk':
            backstrapObj = {
              name: 'Tenderloin/Backstrap 3-Chunk',
              value: inputs[i].value,
              itemPrice: pricesFromJSON["backstrap"],
              price: inputs[i].value * pricesFromJSON["backstrap"],
              key: i
            }
            newReceipt.push(backstrapObj)
            break;
          case 'butterfly':
            backstrapObj = {
              name: 'Tenderloin/Backstrap Butterfly',
              value: inputs[i].value,
              itemPrice: pricesFromJSON["backstrap"],
              price: inputs[i].value * pricesFromJSON["backstrap"],
              key: i
            }
            newReceipt.push(backstrapObj)
            break;
        }
      } else if (isNaN(inputs[i].value)) {
        const newItem = {
          name: inputs[i].name,
          value: 'TBD',
          itemPrice: pricesFromJSON[inputs[i].id],
          key: i
        }
        newTbdItems.push(newItem)
      } else {
        const newItem = {
          name: inputs[i].name,
          value: inputs[i].value,
          itemPrice: pricesFromJSON[inputs[i].id],
          price: inputs[i].value * pricesFromJSON[inputs[i].id],
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

    if (skinDeerForMount ===  'Yes') {
      const skinDeerItem = {
        name: "Skin for Mount Fee",
        itemPrice: parseFloat(pricesFromJSON["skin-for-mount"]),
        price: parseFloat(pricesFromJSON["skin-for-mount"])
      }
      newReceipt.push(skinDeerItem)
    }

    //Push new item and custInfo objs into arrays and then set the states with those arrays
    custInfoArray.push(euroInfo)
    custInfoArray.push(skinForMountInfo)
    custInfoArray.push(buckOrDoeInfo)
    changeReceipt(newReceipt)
    setCustInfo(custInfoArray)
    setTbdItems(newTbdItems)

    //Also calculate total and change total state
    let newTotal = 0
    for (let i = 0; i < newReceipt.length; i++) {
      newTotal = newTotal + newReceipt[i].price
    }
    setTotal(newTotal)
    //Shows the receipt
    setShowReceipt(true)
  }

  return (
    <Container>
      <Container className="App" maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ margin: 2, alignSelf: 'center' }} variant="h2" >
          The Chop Shop
        </Typography>
        <Container sx={{ border: 'solid', borderWidth: 2, borderRadius: 3 }}>
          <Typography variant="h4" sx={{ margin: 2 }}>Cut</Typography>
          <DeerInfo setBuckOrDoe={setBuckOrDoe} />
          <DeerOptions setSaveHeadForEuro={setSaveHeadForEuro} setSkinDeerForMount={setSkinDeerForMount} />
          <MeatType changeBurgerType={setBurgerType} changeBackstrap={setBackstrapType} />
        </Container>
        <Container sx={{ border: 'solid', borderWidth: 2, borderRadius: 3 }}>
          <Typography variant="h4" sx={{ margin: 2 }}>Extras</Typography>
          <Jerky />
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
              <Box sx={{ border: 2, borderRadius: 1, backgroundColor: '#6F777D', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {custInfo.map((item) => (
                  <Typography sx={{ margin: 3, color: 'white' }} key={item.key}><span style={{ fontWeight: 'bold' }}>{item.name}:</span> {item.value} </Typography>
                ))}
              </Box>
            </Container>
            : null}
          {showReceipt ? <Container>
            <Typography sx={{ marginTop: 2 }} variant="h5">Itemized Receipt</Typography>
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
                  {tbdItems.map((item) => (
                    <TableRow key={item.key} sx={{ border: 0 }}>
                      <TableCell component="th" scope="row"> {item.name} </TableCell>
                      <TableCell align="right">{item.value}</TableCell>
                      <TableCell align="right"><CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={item.itemPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ margin: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Typography variant='h5'>Total: <CurrencyFormat decimalScale={2} fixedDecimalScale={true} value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 5 }}>
              <PDFDownloadLink key={timestamp} style={{ padding: 6 }} document={<PDFDownload tbd={tbdItems} items={receipt} custInfo={custInfo} total={total} />} fileName={custInfo[0].value + '_' + custInfo[3].value + '.pdf'}><Typography>Download</Typography></PDFDownloadLink>
            </Box>
          </Container> : null}
        </Container>
      </Container>
    </Container>
  );
}

export default App