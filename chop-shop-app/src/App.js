import DeerInfo from "./components/DeerInfo";
import DeerOptions from "./components/DeerOptions";
import MeatType from "./components/MeatType";
import Jerky from "./components/Jerky";
import Bologna from "./components/Bologna";
import HotDogs from "./components/HotDogs";
import FreshSausage from "./components/FreshSausage";
import SnackSticks from "./components/SnackSticks";
import PDFDownload from "./components/PDFDownload";
import { Container } from "@mui/system";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Button, Typography } from "@mui/material";
import { useState, } from "react";
import CurrencyFormat from 'react-currency-format';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { PDFDownloadLink } from '@react-pdf/renderer';

function App() {

  //Create theme for the page
  const theme = createTheme({
    palette: {
      mode: 'light'
    }
  })

  //Instantiate date obj to insert date into pdf download file name
  const newDate = new Date()
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  //Create different states to hold customer and receipt info
  const [receipt, changeReceipt] = useState([])
  const [showReceipt, setShowReceipt] = useState(false)
  const [custInfo, setCustInfo] = useState([])
  const [saveHeadForEuro, setSaveHeadForEuro] = useState('')
  const [skinDeerForMount, setSkinDeerForMount] = useState('')
  const [buckOrDoe, setBuckOrDoe] = useState('')
  const [total, setTotal] = useState(0)
 const [showDownload, setShowDownload] = useState(false)

  const changeShowDownload = () => {
    if(showDownload === false){
      setShowDownload(true)
      return
    }
    setShowDownload(false)
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

      } else {
        const newItem = {
          name: inputs[i].name,
          value: inputs[i].value,
          price: inputs[i].value * inputs[i].id,
          key: i
        }
        newReceipt.push(newItem)
      }
    }

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

    if(showDownload === true){
      changeShowDownload()
    }

    //Shows the receipt
    setShowReceipt(true)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container className="App" maxWidth="lg" >
        <Typography sx={{ margin: 2 }} variant="h2" >
          The Chop Shop
        </Typography>
        <DeerInfo setBuckOrDoe={setBuckOrDoe} />
        <DeerOptions setSaveHeadForEuro={setSaveHeadForEuro} setSkinDeerForMount={setSkinDeerForMount} />
        <MeatType />
        <Jerky />
        <Bologna />
        <HotDogs />
        <SnackSticks />
        <FreshSausage />
        <Container sx={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-end' }} >
          <Button sx={{ margin: 3 }} variant="contained" color="success" onClick={updateReceipt}>Create Receipt</Button>
        </Container>
        <Container id='receipt-container'>
          {showReceipt ?
            <Container>
              <Typography variant="h5">Customer Info</Typography>
              <Box sx={{ border: 2, backgroundColor: '#6F777D', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {custInfo.map((item) => (
                  <Typography sx={{ margin: 3, color: 'white' }} key={item.key}>{item.name}: {item.value}
                  </Typography>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {receipt.map((item) => (
                    <TableRow key={item.key} sx={{ border: 0 }}>
                      <TableCell component="th" scope="row"> {item.name} </TableCell>
                      <TableCell align="right">{item.value}</TableCell>
                      <TableCell align="right"><CurrencyFormat fixedDecimalScale={true} decimalScale={2} value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ margin: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Typography variant='h5'>Total: <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Typography>
            </Box>
            <Button onClick={changeShowDownload}>Create PDF</Button>
            {showDownload ? <PDFDownloadLink style={{ padding: 6}} document={<PDFDownload items={receipt} custInfo={custInfo}/>} fileName={custInfo[2].value + '_' + month + '-' + date + '-' + year + '.pdf'}>💾</PDFDownloadLink> : null}
          </Container> : null}
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App